/** ----------------------------------------
    Loop
---------------------------------------- */

/**
 * Will continiously loop the given sequence,
 * use limiters to determine the restricts.
 * 
 * 
 */

function loop(amount) {
    this.apply({
        active: true,
        routine: 'loop',
        limit: amount
    });
    
    return this;
};

/** ----------------------------------------
    Exports
---------------------------------------- */

export default loop;