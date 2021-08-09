import { notHas } from '../utils';
import { any } from 'ramda';

if (notHas(Array.prototype, 'any')) {
	Object.defineProperty(Array.prototype, 'any', {
		value: function (fn: (arr: any) => boolean) {
			return any(fn)(this);
		},
		enumerable: false,
	});
}
