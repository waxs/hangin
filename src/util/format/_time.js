/** ----------------------------------------
    Validate
---------------------------------------- */

const validateFormat = string => {
    const regexDouble = /^(?:1[0-2]|0[0-9]):[0-5][0-9]$/;
    const regexTriple = /^(?:1[0-2]|0[0-9]):[0-5][0-9]:[0-5][0-9]$/;
    const check = !string.match(regexDouble) && !string.match(regexTriple);
    return _error(check, `Not a valid time: ${ string }, use format: HH:MM or HH:MM:SS.`);
};

/** ----------------------------------------
    Correction
 ---------------------------------------- */

const correction = values => {
    while (values.length < 3) values.push(0);
    return values;
};

/** ----------------------------------------
    Date
---------------------------------------- */

const time = value => {
    const values = value.match(/[a-zA-Z]+|[0-9]+/g);
    const parsed = values.map(number => parseInt(number, 10));
    const corrected = correction(parsed);
    return corrected;
};

/** ----------------------------------------
    Export
---------------------------------------- */

export default time;