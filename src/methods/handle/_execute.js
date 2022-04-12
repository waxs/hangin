/** ----------------------------------------
    Execute
 ---------------------------------------- */

function execute() {
    const schedule = this.model(this._schedule);
    const { events } = schedule;
    return this.queue(schedule, events);
}

/** ----------------------------------------
    Export
 ---------------------------------------- */

export default execute;