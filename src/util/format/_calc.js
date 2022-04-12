/** ----------------------------------------
    Utils
 ---------------------------------------- */

import _date from '@util/format/_date';
import _time from '@util/format/_time';
import _timestamp from '@util/format/_timestamp';

/** ----------------------------------------
    Calculate
 ---------------------------------------- */

/**
 * Will calculate a given date and time,
 * set as an array of values in order of
 * year, month, day and hour, minute, to 
 * a timestamp value. This will contain
 * relevant information about the given
 * date and preformat values. 
 *
 * @param { array } date - YYYY-MM-DD format
 * @param { array } time - HH:MM format
 * @return { object } formatted date/time
 */

const calc = (date, time) => {
    const formatDate = _date(date); 
    const formatTime = _time(time); 
    return _timestamp(formatDate, formatTime);
};

/** ----------------------------------------
    Export
 ---------------------------------------- */

export default calc;
