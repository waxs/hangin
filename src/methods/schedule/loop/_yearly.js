/** ----------------------------------------
    Utilties
---------------------------------------- */

import _cron from '@util/format/_cron';
import _time from '@util/format/_time';

/** ----------------------------------------
    Yearly
---------------------------------------- */

/**
 * The yearly method needs a month, day and
 * time as HH:MM. It will set a schedule on the 
 * model and handle a new queue based on 
 * given information.
 *
 * @param { number } month - number between 1 - 12
 * @param { number } day - number between 1 - 31
 * @param { string } time - HH:MM format
 * @return { this } extend instance
 */

function yearly(month = 0, day = 0, time = '0:00') { 
    const [hour, minute] = _time(time);

    const cron = `${ minute } ${ hour } ${ day } ${ month } *`;

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

export default yearly;