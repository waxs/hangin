/** ----------------------------------------
    Utils
 ---------------------------------------- */

import _compareArray from '@util/check/_compareArray';
import _timestamp from '@util/format/_timestamp';

/** ----------------------------------------
    Is Now
 ---------------------------------------- */

/**
 * Will compare a given time to the current 
 * time and return a check.
 *
 * @param { array  } time - hour and minute
 * @return { boolean } result
 */

const isNow = time => {
    const stamp = _timestamp();
    const [hour, minute] = stamp.time;
    return !_compareArray([hour, minute], time);
};

/** ----------------------------------------
    Export
 ---------------------------------------- */

export default isNow;