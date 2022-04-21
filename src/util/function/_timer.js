/** ----------------------------------------
    Utils
 ---------------------------------------- */

import _isType from '@util/check/_isType';

/** ----------------------------------------
    Config
 ---------------------------------------- */

const config = {
    week: null,
    day: 7, 
    hour: 24,
    minute: 60,
    second: 60,
    millisecond: 1000
};

/** ----------------------------------------
    Validate
 ---------------------------------------- */

const validateAmount = amount => {
    return _isType(amount) === 'number' || error(true, `Not a valid amount: ${ amount }, specify a number.`);
};

const validateType = type => {
    const types = Object.keys(config);
    return types.includes(type) || error(true, `Not a valid type: ${ type }, use ${ types.join(', ') }.`);
};  

/** ----------------------------------------
    Reduce
 ---------------------------------------- */

const reducer = (...args) => args.reduce((a, b) => a * b);

/** ----------------------------------------
    Timer
 ---------------------------------------- */

const timer = (amount, type) => {
    const types = Object.keys(config);

    const length = types.length;
    const index = types.indexOf(type);

    const calc = types.splice(index + 1, length - index);
    const values = calc.map(type => config[type]);

    if(validateAmount(amount) && validateType(type)) {
        return amount * reducer(...values);
    }
};

/** ----------------------------------------
    Export
 ---------------------------------------- */

export default timer;