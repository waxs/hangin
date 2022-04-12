/** ----------------------------------------
    Utilties
---------------------------------------- */

import _cron from '@util/format/_cron';
import _day from '@util/format/_day';
import _time from '@util/format/_time';

/** ----------------------------------------
    Weekly
---------------------------------------- */

/**
 * The weekly method needs a day of the week
 * for instance 'monday' or 'saterday' and 
 * will schedule your jobs for a given time
 * if specified. 
 *
 * @param { string } dayOfWeek (monday) - week days
 * @param { string } time (0:00) - HH:MM format
 * @return { this } extend instance
 */

function weekly(dayOfWeek = 'monday', time = '0:00') {
    const [hour, minute] = _time(time);
    const day = days.indexOf(dayOfWeek);

    const cron = `${ minute } ${ hour } * * ${ _day(day) }`;

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

export default weekly;