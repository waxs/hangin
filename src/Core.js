/** ----------------------------------------
    Utils
 ---------------------------------------- */

import extend from '@js/setup/_extends';
import init from '@js/setup/_init';

/** ----------------------------------------
    Core
 ---------------------------------------- */

class Core {};

/** ----------------------------------------
    State
 ---------------------------------------- */

import state from '@state'; 
init(Core, state); 

/** ----------------------------------------
    Methods
 ---------------------------------------- */

import actions from '@method/actions';
import controls from '@method/controls';
import data from '@method/data';
import handle from '@method/handle';
import schedule from '@method/schedule';

/** ----------------------------------------
    Helpers
 ---------------------------------------- */

extend(Core, actions);
extend(Core, controls);
extend(Core, data);
extend(Core, handle);
extend(Core, schedule);

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default Core;