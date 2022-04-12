/** ----------------------------------------
    Model
---------------------------------------- */

function model(id) {
    const data = this._models.map(schedule => {
        if(schedule.id === id) return schedule;

        const job = schedule.events.filter(job => {
            return job.id === id || job.key === id;
        });

        return job[0];
    });

    return data[0];
};

/** ----------------------------------------
    Export
---------------------------------------- */

export default model;