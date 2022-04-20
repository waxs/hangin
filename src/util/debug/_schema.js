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
        const keys = Object.keys(obj);

        const checks = keys.reduce((array, key) => {
            const types = schema[key];
            const value = obj[key];

            if(!types) return array;

            const multiple = _isArray(types);
            const compare = !multiple ? check(value, types) : types.some(type => check(value, type));

            const log = multiple ? types.map(type => type.name).join(', ') : types.name;

            if(!compare) console.error(`Given value for ${ key } (${ typeof value }) is not of a valid type matching the schema: [${ log }]`);

            array.push(compare);

            return array;
        }, []);

        return checks.every(check => !!check);
    };
}; 

/** ----------------------------------------
    Export
---------------------------------------- */

export default schema;