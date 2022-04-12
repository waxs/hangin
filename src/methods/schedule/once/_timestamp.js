/** ----------------------------------------
    Utils
---------------------------------------- */

import _remainder from '@util/format/_remainder';

/** ----------------------------------------
    Timestamp
---------------------------------------- */

function timestamp(unix) {
    this.apply({
        active: true,
        routine: 'once',
        unix: unix
    });
    
    return this;
};

/** ----------------------------------------
    Exports
---------------------------------------- */

export default timestamp;