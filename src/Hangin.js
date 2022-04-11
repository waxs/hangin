/** ----------------------------------------
    Hangin Core
 ---------------------------------------- */

import Core from '@js/Core';

/** ----------------------------------------
     Utilities
 ---------------------------------------- */

import construct from '@js/setup/_construct';
import middleware from '@js/setup/_middleware';

/** ----------------------------------------
    Hangin
 ---------------------------------------- */

class Hangin extends Core {

    /** ----------------------------------------
        Constructor
     ---------------------------------------- */

    constructor(config) {
        super(); 

        if(typeof window !== 'undefined' || typeof global !== 'undefined') {
            construct(this, config);
        }
        
    }

}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default middleware(Hangin);