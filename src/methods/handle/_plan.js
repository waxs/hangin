/** ----------------------------------------
    Utils
 ---------------------------------------- */

import _cron from '@util/format/_cron';
import _remainder from '@util/format/_remainder';
import _timeout from '@util/function/_timeout';
import _timestamp from '@util/format/_timestamp';

/** ----------------------------------------
    Cancel
 ---------------------------------------- */

const cancel = ({ limit, start, end, times }) => {
    const remainder = _remainder(end?.unix);

    const _limit = limit <= times;
    const _remain = (start && end) && remainder < 0;

    return [_limit, _remain].some(value => value === true);
};

/** ----------------------------------------
    Plan
 ---------------------------------------- */

/**
 * The plan function will handle a schedule
 * and set the timeout based on given parameters
 * initiating the queue and recur if the
 * given schedule is based on a loop.
 */

function plan() {
    let timer;

    const schedule = this.model(this._schedule);
    
    if(schedule && schedule.active && this.active) {
        const { events, cron, routine, limit, times } = schedule;

        const block = cancel(schedule);

        if(block) {
            this.apply({
                active: false,
                stop: _timestamp()
            });
            
            this.event.dispatch('completed');

            return;
        }

        const amount = cron && _remainder(_cron(cron));

        const exe = () => {
            const queue = this.queue(schedule, events);

            queue.completed.then(() => {
                routine === 'loop' ? this.plan() : clearTimeout(timer);
                
                this.event.dispatch('done', {
                    remainer: schedule.next || null,
                    next: schedule.next ? new Date(schedule.planned) : null
                });
            });
        };

        timer = _timeout(() => exe(), cron ? amount : schedule.unix);

        this.apply({ 
            timeout: timer.fn,
            remain: limit ? limit - times : null,
            times: times + 1,
            planned: _cron(cron),
            next: routine === 'loop' && amount
        });

        this.planned = schedule;
    }

    this._chain = []; 
};

/** ----------------------------------------
    Export
 ---------------------------------------- */

export default plan;