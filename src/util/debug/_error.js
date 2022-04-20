 /** ----------------------------------------
    Utilties
 ---------------------------------------- */

import _isArray from '@util/check/_isArray';

/** ----------------------------------------
    Error
 ---------------------------------------- */

const error = (checks, message) => {
    const validated = !message || _isArray(checks) ? checks.every(check => check) : checks;
    if(validated) return console.error(message) && true;
};

/** ----------------------------------------
    Export
---------------------------------------- */

export default error;