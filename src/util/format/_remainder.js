/** ----------------------------------------
    Utils
 ---------------------------------------- */

import _error from '@util/debug/_error';
import _isType from '@util/check/_isType';
import _timestamp from '@util/format/_timestamp';

/** ----------------------------------------
    Remainder
 ---------------------------------------- */

const remainder = (start, end) => {
    const now = _timestamp();

    let _start = start;
    let _end = end;

    if(!end) {
        _start = now.unix;
        _end = start;
    };

    const min = Math.min(_start, _end);
    const max = Math.max(_start, _end);

    return max - min;
};

/** ----------------------------------------
    Export
 ---------------------------------------- */

export default remainder;