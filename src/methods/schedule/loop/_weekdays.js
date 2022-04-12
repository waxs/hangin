/** ----------------------------------------
    Utilties
---------------------------------------- */

import _time from '@util/format/_time';

/** ----------------------------------------
    Weekdays
---------------------------------------- */

/**
 * The weekdays method will only execute
 * from monday till friday and be called
 * on a specific given time.
 *
 * @param { string } time - HH:MM format
 * @return { this } extend instance
 */

function weekdays(time = '0:00') {
    const [hour, minute] = _time(time);

    const cron = `${ minute } ${ hour } * * 1-5`;

    this.apply({
        active: true,
        routine: 'loop',
        cron: cron,
        time: time,
    });
 
    return this;
};

/** ----------------------------------------
    Exports
---------------------------------------- */

export default weekdays;