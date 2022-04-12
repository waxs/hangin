/** ----------------------------------------
    Utilties
---------------------------------------- */

import _cron from '@util/format/_cron';
import _isCron from '@util/check/_isCron';
import _remainder from '@util/format/_remainder';
import _time from '@util/format/_time';

/** ----------------------------------------
    Replace CRON
---------------------------------------- */

const replaceCron = (cron, newCron) => {
    const [_cron, _newCron] = [cron, newCron].map(values => {
        return values.split(' ');
    }); 

    const replaced = _cron.map((_, index) => {
        const newValue = _newCron[index];
        return newValue && newValue !== '' ? newValue : _cron[index];
    });

    return replaced.join(' ');
};

/** ----------------------------------------
    At
---------------------------------------- */

function at(time = '0:00') {
    const schedule = this.model(this._schedule);

    const [hour, minute] = _time(time);

    if(schedule.cron) {
        const cron = `${ minute } ${ hour }`;
        const updated = replaceCron(schedule.cron, cron);

        this.apply({
            cron: updated,
            time: time
        });
    } 
    
    if(!schedule.cron) {
        this.apply({
            time: time
        });
    }

    return this;
};

/** ----------------------------------------
    Exports
---------------------------------------- */

export default at;