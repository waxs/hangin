 /** ----------------------------------------
    Utilties
 ---------------------------------------- */

import _isArray from '@util/check/_isArray';

/** ----------------------------------------
    Error
 ---------------------------------------- */

/**
 * A simple schema type validator for matching
 * types. Used for type validation in objects, 
 * will return a closure that can validate a given
 * object. The closure will resolve a boolean
 * that will output the resolved checks. 
 * 
 * @param { bool } checks - operation
 * @param { string } message - optional error message
 * @return { bool } validate
 */

const error = (checks, message) => {
    const validated = !message || _isArray(checks) ? checks.every(check => check) : checks;
    return validated && console.error(message);
};

/** ----------------------------------------
    Export
---------------------------------------- */

export default error;