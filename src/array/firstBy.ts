import { notHas } from '../utils';
import { find } from 'ramda';
if (notHas(Array.prototype, 'firstBy')) {
	Object.defineProperty(Array.prototype, 'firstBy', {
		value: function (fn: (a: any) => boolean) {
			const result = find(fn)(this);
			if (result !== undefined) return result;
			else throw new Error('result can not be undefined');
		},
		enumerable: false,
	});
}
