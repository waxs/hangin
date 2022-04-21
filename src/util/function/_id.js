/** ----------------------------------------
    ID
 ---------------------------------------- */

/**
 * Create a randomized ID with or without
 * a given prefix. 
 *
 * @param { string } prefix
 * @return { string } random id
 */

const id = prefix => {
    return (prefix && prefix + '_') || '' + Math.random().toString(16).substr(2, 9);
};

/** ----------------------------------------
    Helpers
 ---------------------------------------- */

export default id;