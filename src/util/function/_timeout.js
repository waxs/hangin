/** ----------------------------------------
    Utilties
 ---------------------------------------- */

import _isType from '@util/check/_isType';

/** ----------------------------------------
    Config
 ---------------------------------------- */

/**
 * Browsers store the delay as a 32-bit signed 
 * integer internally. This causes an integer 
 * overflow when using delays larger than 
 * 2147483647ms.
 */

const max = 0x7fffffff;

/** ----------------------------------------
    Chunk
 ---------------------------------------- */

/**
 * Chunk number to a max given and leave
 * a remainder based on max given value as
 * set within the configuration. 
 * 
 * @param { number } delay - interval
 * @return { array } will return chunks based on max value
 */

const chunk = delay => {
    const chunks = [];

    while (delay > 0) {
        chunks.push(Math.min(delay, max));
        delay = delay - max;
    }

    return chunks;
};

/** ----------------------------------------
    Sum
 ---------------------------------------- */

/**
 * Reduce the chunks to a total delay.
 * 
 * @param { array } array - array of numbers
 * @return { number } will return the sum of numbers
 */

const sum = array => array.reduce((sum, number) => sum + number, 0);

/** ----------------------------------------
    Store
 ---------------------------------------- */

/**
 * The timeout will be temporary stored within
 * the store object, so that the right 
 * reference can be exposed outside of the 
 * recursive timeout function.
 */

const store = {
    _timeout: null,
    get fn() {
        return this._timeout;
    },
    set fn(timeout) {
        this._timeout = timeout;
    }
};

/** ----------------------------------------
    Timeout
 ---------------------------------------- */

/**
 * Most browsers support a max a 32 bit 
 * interger for saving the timeout. This 
 * timeout function will chunk delays based 
 * on this limitation an plan multiple 
 * schedules if needed to prevent this
 * behavior and strech the duration of a
 * timeout exceeding this limit. 
 * 
 * @param { function } callback - callback function
 * @param { number } delay - the timeout in milliseconds
 * @return { function } will return the setTimeout 
 */

const timeout = (callback, delay) => {
    const chunks = chunk(delay);
    const next = chunks.shift();

    const exe = () => chunks.length ? timeout(callback, sum(chunks)) : callback();
    store.fn = setTimeout(exe, next);
 
    return store; 
};

/** ----------------------------------------
    Export
 ---------------------------------------- */

export default timeout;