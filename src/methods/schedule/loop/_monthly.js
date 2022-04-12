/** ----------------------------------------
    Utilties
---------------------------------------- */

import _cron from '@util/format/_cron';
import _time from '@util/format/_time';

/** ----------------------------------------
    Monthly
---------------------------------------- */

/**
 * The monthly method needs a day and time 
 * specified as HH:MM. It will set a schedule 
 * on the model and handle a new queue 
 * based on given information.
 *
 * @param { number } day - number between 1 - 31
 * @param { string } time - HH:MM format
 * @return { this } extend instance
 */

function monthly(day = 0, time = '0:00') {
    const [hour, minute] = _time(time);

    const cron = `${ minute } ${ hour } ${ day } * *`;

    this.apply({
        active: true,
        routine: 'loop',
        cron: cron,
        time: time
    });
    
    return this;
};

/** ----------------------------------------
    Exports
---------------------------------------- */

export default monthly;