/** ----------------------------------------
    Start
---------------------------------------- */

function pause() {
    this.active = false;
    this.event.dispatch('pause');
}

/** ----------------------------------------
    Exports
---------------------------------------- */

export default pause;