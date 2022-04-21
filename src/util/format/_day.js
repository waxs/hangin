/** ----------------------------------------
    Utils
 ---------------------------------------- */

import error from '@util/debug/_error';
import _isType from '@util/check/_isType';

 /** ----------------------------------------
     Config
 ---------------------------------------- */
 
const config = [
    'mon',
    'tue',
    'wed',
    'thu',
    'fri',
    'sat',
    'sun'
];

const fullConfig = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saterday',
    'sunday'
];

/** ----------------------------------------
    Validate
 ---------------------------------------- */

const validateString = string => {
    const check = !config.includes(string) && !fullConfig.includes(string);
    return error(check, `Not a valid value: ${ string }, day needs to be shorthand (mon) or monday.`);
};

const validateNumber = number => {
    const check = !(number >= 1) && !(number <= 12);
    return error(check, `Not a valid number: ${ number }, day needs to be between 1 and 12.`);
};

/** ----------------------------------------
    Day
 ---------------------------------------- */

/**
 * Will parse a day of the week string or 
 * number, and validate it's value. 
 *
 * @param { string, number } value - shorthand or day of the week
 * @return { number } validated day
 */

const day = value => {
    if(_isType(value) === 'string') {
        if(!validateString(value)) {
            return config.indexOf(value) + 1 || fullConfig.indexOf(value) + 1;
        }
    }

    if(_isType(value) === 'number') {
        if(!validateNumber(value)) {
            return fullConfig[value - 1];
        }
    }
};

/** ----------------------------------------
    Export
 ---------------------------------------- */

export default day;