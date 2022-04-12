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