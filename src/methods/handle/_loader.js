/** ----------------------------------------
    Utils
---------------------------------------- */

import timeout from '@util/function/_timeout';
import _progress from '@util/format/_progress';

/** ----------------------------------------
    Loader
---------------------------------------- */

/**
 * The loader will handle jobs and return
 * an array of promises that will resolve
 * the queue in sync. 
 * 
 * @param { array } jobs - an array of jobs to be handled
 * @return { array } - an array of unresolved jobs
 */

function loader(jobs) { 
    const total = jobs.length;

    return jobs.reduce((promise, job, index) => {
        return promise.then(data => {
            const handle = () => {
                return new Promise(resolve => {
                    timeout(() => {
                        job.action(resolve, data); 

                        this.progress = _progress(job, total, index);

                        job.watch && this.event.dispatch(job.name || job.id);
                    }, job.delay);
                }); 
            };

            return job.action && handle();
        });
    }, Promise.resolve());
};

/** ----------------------------------------
    Export
---------------------------------------- */

export default loader;