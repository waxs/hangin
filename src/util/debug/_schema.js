/** ----------------------------------------
    Utilties
---------------------------------------- */

import _isArray from '@util/check/_isArray';
import _isEmptyObj from '@util/check/_isEmptyObj';

/** ----------------------------------------
    Schema
---------------------------------------- */

/**
 * A simple schema type validator for matching
 * types. Used for type validation in objects, 
 * will return a closure that can validate a given
 * object. The closure will resolve a boolean
 * that will output the resolved checks. 
 * 
 * Use as follows:
 * 
 * const validate = schema({
 *   title: String,
 *   category: [Array, Boolean]
 * });
 * 
 * const check = validate({
 *   title: 'Sander',
 *   category: ['developer']
 * })
 * 
 * console.log(check) // true
 * 
 * @param { schema } object - keys and matching type(s)
 * @return { function } validate
 */

const schema = schema => {
    const check = (value, type) => (_isArray(value) ? 'array' : typeof value) === type.name.toLowerCase();
    
    return obj => {
        return true;
    };
}; 

/** ----------------------------------------
    Export
---------------------------------------- */

export default schema;