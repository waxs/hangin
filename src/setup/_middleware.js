/** ----------------------------------------
    Middleware
 ---------------------------------------- */

function middleware(obj) {
	const extend = Object.getPrototypeOf(new obj());
	const prototype = Object.getPrototypeOf(extend);
	const methods = Object.getOwnPropertyNames(prototype);

	for(const method of methods) {
		const fn = prototype[method];

		if(typeof fn === 'function' && fn.name !== 'Core') {
			prototype[method] = function(...args) {
				fn && this._chain.push(fn.name);
				return fn.call(this, ...args); 
			};

		}
	}

	return obj;
};

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default middleware;