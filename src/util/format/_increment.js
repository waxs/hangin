/** ----------------------------------------
    Utilties
---------------------------------------- */

import _isType from '@util/check/_isType';
import _timestamp from '@util/format/_timestamp';

/** ----------------------------------------
    Increment
---------------------------------------- */

const incrementDate = (date, days = 0) => {
    const stamp = _timestamp(); 

    const _date = _isType(date) === 'array' ? date : stamp.date;
    const _days = !days ? date : days;
    
    let [year, month, day] = _date;

    for (let i = 0; i < _days; i++) {
        const dayAmount = new Date(year, month, 0).getDate();
        
        if(day === dayAmount) {
            month++;
            day = 0;
        } 

        if(month === 13) {
            year++;
            month = 1;
            day = 0;
        }

        day++;
    }

    return [year, month, day];
};

/** ----------------------------------------
    Export
---------------------------------------- */

export default incrementDate;