/** ----------------------------------------
    Utils
 ---------------------------------------- */

import _error from '@util/debug/_error';
import _isType from '@util/check/_isType';

 /** ----------------------------------------
     Config
 ---------------------------------------- */
 
const config = [
    'jan',
    'feb',
    'mar',
    'apr',
    'may',
    'jun',
    'jul',
    'aug',
    'sep',
    'oct',
    'nov',
    'dec'
];

const fullConfig = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december'
];

/** ----------------------------------------
    Validate
 ---------------------------------------- */

const validateString = string => {
    const check = !config.includes(string) && !fullConfig.includes(string);
    return _error(check, `Not a valid value: ${ string }, month needs to be shorthand (jan) or january.`);
};

const validateNumber = number => {
    const check = !(number >= 1) && !(number <= 12);
    return _error(check, `Not a valid number: ${ number }, month needs to be between 1 and 12.`);
};

/** ----------------------------------------
    Month
 ---------------------------------------- */

const month = value => {
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

export default month;