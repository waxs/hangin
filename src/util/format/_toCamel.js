/** ----------------------------------------
    To Camel
 ---------------------------------------- */

/**
 * Convert a given string to camel case.
 *
 * @param { string } string
 * @return { string } in camel case syntax
 */

const toCamel = string => {
    const result = string.replace(/([A-Z])/g, '$1');
    return result.split(' ').join('_').toLowerCase();
};

/** ----------------------------------------
    Export
 ---------------------------------------- */

export default toCamel;