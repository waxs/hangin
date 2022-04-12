/** ----------------------------------------
    Instant
---------------------------------------- */

function instant() {
    this.apply({
        active: true,
        routine: 'once',
        unix: 0
    });
    
    return this;
};

/** ----------------------------------------
    Exports
---------------------------------------- */

export default instant;