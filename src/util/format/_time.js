/** ----------------------------------------
    Correction
 ---------------------------------------- */

const correction = values => {
    while (values.length < 3) values.push(0);
    return values;
};

/** ----------------------------------------
    Time
---------------------------------------- */

/**
 * Will parse a string value to an array
 * reflecting the time in a HH:MM format.
 *
 * @param { string } value - time in HH:MM
 * @return { array } [HH, MM]
 */

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