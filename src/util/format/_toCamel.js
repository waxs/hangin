/** ----------------------------------------
    To Camel
 ---------------------------------------- */

const toCamel = string => {
    const result = string.replace(/([A-Z])/g, '$1');
    return result.split(' ').join('_').toLowerCase();
};

/** ----------------------------------------
    Export
 ---------------------------------------- */

export default toCamel;