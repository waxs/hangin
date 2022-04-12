/** ----------------------------------------
    Utilties
---------------------------------------- */

import _cron from '@util/format/_cron';
import _time from '@util/format/_time';

/** ----------------------------------------
    Daily
---------------------------------------- */

/**
 * The daily method needs a time specified
 * as HH:MM. It will set a schedule on the 
 * model and handle a new queue based on 
 * given information.
 *
 * @param { string } time - HH:MM format
 * @return { this } extend instance
 */

function daily(time = '0:00') {
    const [hour, minute] = _time(time);

    const cron = `${ minute } ${ hour } * * *`;

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

export default daily;