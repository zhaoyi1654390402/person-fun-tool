import { notHas } from '../utils';

if (notHas(Object.prototype, 'tap')) {
	Object.defineProperty(Object.prototype, 'tap', {
		value: function tap(fn: Function) {
			fn(this);
			return this;
		},
		enumerable: false,
	});
}
