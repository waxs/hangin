/** ----------------------------------------
    Interval
---------------------------------------- */

function interval(interval) {
    this.apply({
        active: true,
        routine: 'loop',
        unix: interval
    });
 
    return this;
};

/** ----------------------------------------
    Exports
---------------------------------------- */

export default interval;