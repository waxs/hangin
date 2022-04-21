/** ----------------------------------------
    Progress
 ---------------------------------------- */

/**
 * Used for calculating the process of a 
 * given task.
 *
 * @param { object } info - given job
 * @param { number } total - total length of jobs
 * @param { number } index - current job item
 * @return { object } parsed information
 */

const progress = (info, total, index) => {
    const progress = index + 1;
    const percentage = progress / total * 100;
    const round = Math.round(percentage * 100) / 100;

    return {
        name: info.key,
        state: info.name,
        total,
        percentage: round,
        progress
    };
};

/** ----------------------------------------
    Export
 ---------------------------------------- */

export default progress;
