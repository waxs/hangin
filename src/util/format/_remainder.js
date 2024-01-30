/** ----------------------------------------
    Utils
 ---------------------------------------- */

import _error from '@util/debug/_error';
import _isType from '@util/check/_isType';
import _timestamp from '@util/format/_timestamp';

/** ----------------------------------------
    Remainder
 ---------------------------------------- */

/**
 * The remainder function will determine 
 * the remaining amount of between two
 * timestamps.  
 *
 * @param { number } start - timestamp start
 * @param { number } end - timestamp end
 * @param { boolean } negative - negative timestamps
 * @return { number } time in milliseconds
 */

const remainder = (start, end, negative = false) => {
    const now = _timestamp();

    let _start = start;
    let _end = end;

    if(!end) {
        _start = now.unix;
        _end = start;
    };

    if(negative) return _end - _start;

    const min = Math.min(_start, _end);
    const max = Math.max(_start, _end);

    return max - min;
};

/** ----------------------------------------
    Export
 ---------------------------------------- */

export default remainder;