/** ----------------------------------------
    Utils
 ---------------------------------------- */

import error from '@util/debug/_error';

/** ----------------------------------------
    Validate
 ---------------------------------------- */

const validateFormat = string => {
    const regex = /^\d{4}[./-](0[1-9]|1[0-2])[./-](0[1-9]|[12][0-9]|3[01])$/;
    const check = !string.match(regex);
    return error(check, `Not a valid date: ${ string }, use format: YYYY-MM-DD (ISO 8601).`);
};

/** ----------------------------------------
    Date
 ---------------------------------------- */

/**
 * Will parse a string given date to an 
 * array of date values based on the ISO 8601
 * syntax YYYY, MM, DD.
 *
 * @param { string } date - YYYY-MM-DD format
 * @return { array } formatted date
 */

const date = value => {
    const values = value.match(/[a-zA-Z]+|[0-9]+/g);
    const parsed = values.map(number => parseInt(number, 10));
    if(!validateFormat(value)) return parsed;
};

/** ----------------------------------------
    Export
 ---------------------------------------- */

export default date;