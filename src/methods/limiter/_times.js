/** ----------------------------------------
    Utils
 ---------------------------------------- */

import _timestamp from '@util/format/_timestamp';

/** ----------------------------------------
    Times
 ---------------------------------------- */

/**
 * This function will limit the amount of 
 * iteration based on a scheduled loop.
 *
 * @param { number } amount - number of iterations
 * @return { this } extend instance
 */

function times(amount) {
    this.apply({
        limit: amount
    });

    return this;
};

/** ----------------------------------------
    Export
 ---------------------------------------- */

export default times;