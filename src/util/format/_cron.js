/** ----------------------------------------
    Utilties
---------------------------------------- */

import _compareArray from '@util/check/_compareArray';
import _isCron from '@util/check/_isCron'; 
import _isNow from '@util/check/_isNow'; 
import _isToday from '@util/check/_isToday'; 
import _isType from '@util/check/_isType'; 
import _increment from '@util/format/_increment';
import _timestamp from '@util/format/_timestamp';
import _timer from '@util/function/_timer';

/** ----------------------------------------
    Values
---------------------------------------- */

const error = false;

let dateValue = null;
let nextDateValue = null;
let timeValue = null;
let nextTimeValue = null;

/** ----------------------------------------
    CRON Values
---------------------------------------- */

const cronValues = {
    minute: [0, 59],
    hour: [0, 12],
    dayMonth: [0, 31],
    month: [0, 12],
    dayWeek: [0, 6],
};

/** ----------------------------------------
    Date Functions
---------------------------------------- */

const dateFn = type => {
    const fn = {
        minute: 'getMinutes',
        hour: 'getHours',
        dayMonth: 'getDate',
        month: 'getMonth',
        dayWeek: 'getDay',
    };

    return fn[type];
};

/** ----------------------------------------
    Characters
---------------------------------------- */

const characters = {
    range: '-',
    step: '/',
    seperator: ','
};

/** ----------------------------------------
    Parse
---------------------------------------- */

const parse = values => {
    return Array.isArray(values) ? values.map(value => parseInt(value)) : parseInt(value);
};

/** ----------------------------------------
    Parse
---------------------------------------- */

const match = (value, type) => {
    if(value === '*') return value;

    const matches = {
        minute: /^([1-5]?[0-9])$/,
        hour: /^(2[0-3]|1[0-9]|[0-9])$/,
        dayMonth: /^(3[01]|[12][0-9]|[1-9])$/,
        month: /^(1[0-2]|[1-9])$/,
        dayWeek: /^([0-6])$/
    };

    // changed || from &&
    return Object.keys(matches).includes(type) && value.match(matches[type]) || value;
};

/** ----------------------------------------
    Type
---------------------------------------- */

const value = (value, type) => {
    let values = null;
    let cronType = null;

    const types = {
        range,
        step,
        seperator
    };

    Object.keys(characters).forEach(character => {
        if(value.includes(characters[character])) cronType = character;
    });
    
    if(value === '*') {
        const [min, max] = cronValues[type];
        values = [...Array.from({ length: max - min }, (_, number) => number + min), max];
    }

    return {
        input: value,
        values: values || parse(cronType ? types[cronType](value, type) : [match(value, type)]),
        cronType: cronType,
        character: characters[cronType] || null
    };
};

/** ----------------------------------------
    Next Value
---------------------------------------- */

const nextValue = (array, value) => {
    if(array.length) {
        const index = array.indexOf(value);
        if(index === array.length - 1) return array[0];
        return array[index + 1];
    }

    return value;
};

/** ----------------------------------------
    Types
---------------------------------------- */

const generic = (value, type, character) => {
    const split = value.split(character);
    const check = split.every(value => match(value, type));
    if(check) return split;
};

const range = (value, type) => {
    const range = generic(value, type, '-');

    if(range.length) {
        const min = Math.min(...parse(range));
        const max = Math.max(...parse(range));    
        return [...Array.from({ length: max - min }, (_, number) => number + min), max];
    }
};  

const step = (value, type) => {
    const range = generic(value, type, '/');
    const length = cronValues[type][1];

    if(range.length) {
        const min = Math.min(...parse(range));
        const max = Math.max(...parse(range));  

        const values = Array.from({ length }, (_, number) => {
            if(number % max == 0 && number > min) return number + min;
        });

        return [min, ...values.filter(number => !!number)];
    }
};  

const seperator = (value, type) => {
    return generic(value, type, ',');
};  

/** ----------------------------------------
    Loop Date
---------------------------------------- */

const checkDate = (options, type, stamp) => {
    if(options[type].input !== '*') {

        const fn = dateFn(type);
        const current = stamp[fn]();
        return parse(options[type].values).includes(current);
    }

    return true;
};

const loopDate = options => {
    let i = 0;

    while(!nextDateValue) {
        if (i > (365 * 5)) {
            console.error('Could not find a matching date. A match should be made within a period of 5 years!'); 
            break; 
        }

        const next = _increment(i);
        const date = _timestamp(next);

        const stamp = date.stamp;

        const checkDayMonth = checkDate(options, 'dayMonth', stamp);
        const checkMonth = checkDate(options, 'month', stamp);
        const checkDayWeek = checkDate(options, 'dayWeek', stamp);
        
        const nextDate = [checkDayMonth, checkMonth, checkDayWeek].every(check => check);

        if(nextDate) {
            if(!nextDateValue && dateValue) nextDateValue = stamp;
            if(!dateValue) dateValue = stamp;
        }

        i++;
    }

    return dateValue;
};

/** ----------------------------------------
    Loop Time
---------------------------------------- */

const checkTime = (options, type, stamp) => {
    const fn = dateFn(type);
    const current = stamp[fn]();

    if(options[type].input !== '*') {
        const values = options[type].values; 
        const min = Math.min(...values);
        return values.filter(value => current <= value)[0] || min;
    }

    return current;
};

const correctTime = (options, hour, minute, stamp) => {
    let hours = hour;
    let minutes = minute;

    const minuteFn = dateFn('minute');
    const currentMinute = stamp[minuteFn]();

    const hourFn = dateFn('hour');
    const currentHour = stamp[hourFn]();

    const minuteValues = options['minute'].values; 
    const hourValues = options['hour'].values; 

    const minuteMin = Math.min(...minuteValues);
    const minuteMax = Math.max(...hourValues);

    const hourMin = Math.min(...hourValues);
    const hourMax = Math.max(...hourValues);

    if(minute < currentMinute && hourValues.length > 1) {
        minutes = minuteMin;
        if(hourMax > currentHour || !isNaN(!hourValues[0])) hours++;
    }

    if(_compareArray([currentHour, currentMinute], [hours, minutes])) {
        minutes = nextValue(minuteValues, minute);
        if(minutes === currentMinute) hours++;
    }

    if(hours === 24) hours = 0;

    return [hours, minutes];
};

const loopTime = options => {
    const date = _timestamp();
    const stamp = date.stamp;

    const hour = checkTime(options, 'hour', stamp);
    const minute = checkTime(options, 'minute', stamp);

    return correctTime(options, hour, minute, stamp);
};

/** ----------------------------------------
    Cron
---------------------------------------- */

const correctCronDate = time => {
    const date = _timestamp();
    const stamp = date.time;

    const [hour, minute] = time;
    const [currentHour, currentMinute] = stamp;

    return hour < currentHour || (hour === currentHour && minute < currentMinute);
};

/**
 * The cron function will create a timestamp
 * based on a cronjob that can be passed as
 * a string. The syntax follows the following
 * order: minute, hour, day of the month, month,
 * day of the week. It also supports multiple
 * options for adding multiple parameters:
 * 
 * (*) any value
 * (,) list separator
 * (-) range of values
 * (/) step values
 *
 * @param { string } values - cron syntaxed string
 * @return { number } timestamp for selected date
 */
 
function cron(values = '* * * * *') {      
    if(error) return _error(`Your CRON is invalid: ${ values }.`);

    const options = {};
    const split = values.split(' ');

    ['minute', 'hour', 'dayMonth', 'month', 'dayWeek'].forEach((type, index) => {
        options[type] = value(split[index], type);
    });

    dateValue = loopDate(options);
    timeValue = loopTime(options);

    const correct = correctCronDate(timeValue);
    const current = _isToday(dateValue);

    const [hour, minute] = timeValue;

    const minHour = Math.min(...options.hour.values);
    const minMinute = Math.min(...options.minute.values);

    const date = correct && current ? nextDateValue : dateValue;
    const time = correct || !current ? [minHour || 0, minMinute || 0] : [hour || 0, minute || 0];

    return date.setHours(...time, ...[0, 0]);
}

/** ----------------------------------------
    Exports
---------------------------------------- */

export default cron;