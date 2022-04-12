/** ----------------------------------------
    Done
---------------------------------------- */

function done(callback) {
    callback && hangin.event.on('done', callback);
    return this;
}

/** ----------------------------------------
    Exports
---------------------------------------- */

export default done;