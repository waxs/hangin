/** ----------------------------------------
    Between
 ---------------------------------------- */

function between(start, end) {
    this.start(...start);
    this.end(...end);

    return this;
};

/** ----------------------------------------
    Export
 ---------------------------------------- */

export default between;