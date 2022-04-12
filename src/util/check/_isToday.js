/** ----------------------------------------
    Utils
 ---------------------------------------- */

import _timestamp from '@util/format/_timestamp';

/** ----------------------------------------
    Today
 ---------------------------------------- */

/**
 * Check if a given timestamp is today. This
 * will flatten time, meaning only day, month
 * and year are compared.
 *
 * @param { number } stamp - timestamp to compare
 * @return { boolean } result
 */

const isToday = stamp => {
    const today = _timestamp();

    const todayValue = today.stamp.setHours(0, 0, 0, 0);
    const stampValue = stamp.setHours(0, 0, 0, 0);

    return todayValue === stampValue;
};

/** ----------------------------------------
    Export
 ---------------------------------------- */

export default isToday;