/** ----------------------------------------
    Utilties
---------------------------------------- */

import _day from '@util/format/_day';
import _increment from '@util/format/_increment';
import _month from '@util/format/_month';
import _timer from '@util/function/_timer';

/** ----------------------------------------
    Types
---------------------------------------- */

const types = [
    'minute',
    'hour',
    'day',
    'week',
    'month',
    'year'
];

/** ----------------------------------------
    Every
---------------------------------------- */

function every(type = 'minute', value) {
    if(types.includes(type)) {
        let cron = null;

        const _value = value || 0;

        if(type === 'minute') cron = `* * * * *`;
        if(type === 'hour') cron = `${ _value } * * * *`;
        if(type === 'day') cron = `0 ${ _value } * * *`;
        if(type === 'week') cron = `* * * * ${ typeof value === 'string' ? _day(_value) : _value }`;
        if(type === 'month') cron = `* * ${ _value + 1 } * *`; 
        if(type === 'year') cron = `* * * ${ typeof value === 'string' ? _month(_value) : _value } *`;

        this.apply({
            active: true,
            routine: 'loop',
            cron: cron
        });

        return this;
    }

    return console.error('Not a supported selector:', type);
};

/** ----------------------------------------
    Exports
---------------------------------------- */

export default every;