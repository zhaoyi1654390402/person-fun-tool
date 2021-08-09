import { notHas } from '../utils';
if (notHas(Promise, 'isPromise')) {
	Object.defineProperty(Promise, 'isPromise', {
		value: function (obj: any) {
			return (
				!!obj &&
				(typeof obj === 'object' ||
					typeof obj === 'function' ||
					Object.prototype.toString.call(obj) ===
						'[object Promise]') &&
				typeof obj.then === 'function'
			);
		},
		enumerable: false,
	});
}
