/** ----------------------------------------
    Utilties
---------------------------------------- */

import _cron from '@util/format/_cron';

/** ----------------------------------------
    CRON
---------------------------------------- */

/**
 * The cron method can be configured using
 * different parameters, as long as it matches
 * the cron syntax. 
 *
 * @param { string } cron - minute hour date month day
 * @return { this } extend instance
 */

function cron(cron = '* * * * *') {
    this.apply({
        active: true,
        routine: 'loop',
        cron: cron
    });
    
    return this;
};

/** ----------------------------------------
    Exports
---------------------------------------- */

export default cron;