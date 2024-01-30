/** ----------------------------------------
    Utilties
 ---------------------------------------- */

import _isType from '@util/check/_isType';

/** ----------------------------------------
    Current Date
 ---------------------------------------- */

const dateNow = () => {
    const date = new Date();

    return [
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
    ];
};

const timeNow = () => {
    const date = new Date();

    return [
        date.getHours(),
        date.getMinutes(),
        date.getSeconds()
    ];
};

/** ----------------------------------------
    Format String
 ---------------------------------------- */

const formatDate = date => {
    if(_isType(date) === 'string') {
        return date.split('-');
    }

    return date;
};

const formatTime = time => {
    if(_isType(time) === 'string') {
        return time.split(':');
    }

    return time;
};

/** ----------------------------------------
    Correction
 ---------------------------------------- */

const correction = date => {
    if(date) date[1] = date[1] - 1;
    return date;
};

const update = date => {
    if(date) date[1]++;
    return date.map(value => Number(value));
};

/** ----------------------------------------
    Timestamp
 ---------------------------------------- */

/**
 * Create relevant time information for 
 * scheduling tasks. The function will
 * parse date and time in different 
 * formats and set the current time if
 * no date or time has been specified.
 *
 * @param { string, array } date - YYYY-MM-DD or [YYYY, MM, DD] format
 * @param { string, array } date - HH:MM or [HH, MM] format
 * @return { object } timestamp information
 */

const timestamp = (date, time = []) => {
    const now = [...dateNow(), ...timeNow()];

    const _date = formatDate(date);
    const _time = formatTime(time);

    const corrected = correction(_date);
    const values = _date ? [...corrected, ..._time] : now;

    const stamp = new Date(...values);
    const unix = stamp.getTime();

    return {
        values: update(values),
        date: update(_date || dateNow()),
        time: _time.length ? _time : timeNow(),
        stamp,
        unix
    };
};

/** ----------------------------------------
    Export
 ---------------------------------------- */

export default timestamp;