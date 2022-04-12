/** ----------------------------------------
    Progress
 ---------------------------------------- */

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
