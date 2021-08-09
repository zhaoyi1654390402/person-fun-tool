import { notHas } from '../utils';
import { partition } from 'ramda';

if (notHas(Array.prototype, 'partition')) {
	Object.defineProperty(Array.prototype, 'partition', {
		value: function (fn: (a: any) => boolean, list?: readonly any[]) {
			return partition(fn, list && list.length ? list : this);
		},
		enumerable: false,
	});
}
