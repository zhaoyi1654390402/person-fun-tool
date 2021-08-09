import { uniqBy } from 'ramda';
import { notHas } from '../utils';

if (notHas(Array.prototype, 'uniqBy')) {
	Object.defineProperty(Array.prototype, 'uniqBy', {
		value: function (fn: (a: any) => any, list?: readonly any[]) {
			return uniqBy(fn, list && list.length ? list : this);
		},
		enumerable: false,
	});
}
