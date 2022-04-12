/** ----------------------------------------
    Utils
 ---------------------------------------- */

import _cron from '@util/format/_cron';
import _remainder from '@util/format/_remainder';
import timeout from '@util/function/_timeout';

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
        const { events, cron, routine } = schedule;
        
        const amount = _remainder(_cron(cron));

        const exe = () => {
            const queue = this.queue(schedule, events);

            queue.completed.then(() => {
                routine === 'loop' ? this.plan() : clearTimeout(timer);
            });
        };

        timer = timeout(() => exe(), cron ? amount : schedule.unix);

        this.apply({ 
            timeout: timer.fn,
            times: schedule.times + 1,
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