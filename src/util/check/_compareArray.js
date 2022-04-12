/** ----------------------------------------
    Compare Array
 ---------------------------------------- */

/**
 * Will compare two arrays and check if all
 * values are equal in both arrays. 
 *
 * @param { array } original - first array
 * @param { array } compare - second array
 * @return { boolean } result
 */

const compareArray = (original, compare) => {
    return original.length === compare.length && original.every((value, index) => value === compare[index]);
};

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default compareArray;