/** ----------------------------------------
    Utils
---------------------------------------- */

import _increment from '@util/format/_increment';
import _timestamp from '@util/format/_timestamp';

/** ----------------------------------------
    Weekend
---------------------------------------- */

const weekend = () => {
    const stamp = _timestamp();
    const date = new Date();
    const current = date.getDay();

    const saterday = 6 - current;
    const sunday = 7 - current;

    const isSaterday = saterday === 1;
    const isSunday = sunday === 1;

    const isWeekend = isSaterday || isSunday;

    const nextSaterday = _increment(stamp.date, saterday);
    const nextSunday = _increment(stamp.date, sunday);

    return {
        today: isWeekend,
        untill: {
            saterday: {
                stamp: _timestamp(nextSaterday),
                today: isSaterday,
                days: saterday
            },
            sunday: {
                stamp: _timestamp(nextSunday),
                today: isSunday,
                days: sunday,
            }
        }
    };
};

/** ----------------------------------------
    Exports
---------------------------------------- */

export default weekend;