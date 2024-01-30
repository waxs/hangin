/** ----------------------------------------
    Utils
 ---------------------------------------- */

import _timestamp from '@util/format/_timestamp';

/** ----------------------------------------
    Queue
 ---------------------------------------- */

function queue(schedule, jobs) {
    this.loading = true;

    this.event.dispatch('execute', schedule);
    
    const events = jobs.map((job, index) => {
        return this.job(job, {
            id: schedule.id,
            index
        });
    });
    
    const loading = this.loader(events);

    loading.then(() => {
        this.loading = false;
        this.event.dispatch('done', schedule);
    }); 

    return {
        events,
        total: events.length,
        completed: loading,
    };
};

/** ----------------------------------------
    Export
 ---------------------------------------- */

export default queue;