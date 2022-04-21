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
    Correction
 ---------------------------------------- */

const correction = date => {
    if(date) date[1] = date[1] - 1;
    return date;
};

const update = date => {
    if(date) date[1]++;
    return date;
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

    const corrected = correction(date);
    const values = date ? [...corrected, ...time] : now;

    const stamp = new Date(...values);
    const unix = stamp.getTime();

    return {
        values: update(values),
        date: update(date || dateNow()),
        time: time.length ? time : timeNow(),
        stamp,
        unix
    };
};

/** ----------------------------------------
    Export
 ---------------------------------------- */

export default timestamp;