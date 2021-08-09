import { notHas } from '../utils';
import { none } from 'ramda';
if (notHas(Array.prototype, 'none')) {
	Object.defineProperty(Array.prototype, 'none', {
		value: function (fn: (arr: any) => boolean, list?: readonly any[]) {
			return none(fn, list && list.length ? list : this);
		},
		enumerable: false,
	});
}
