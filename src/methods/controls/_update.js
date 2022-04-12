/** ----------------------------------------
    Update
---------------------------------------- */

function update(callback) {
    const _this = this;

    callback(() => {
        _this.execute();
    });

    return _this;
}

/** ----------------------------------------
    Exports
---------------------------------------- */

export default update;