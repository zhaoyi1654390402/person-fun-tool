import { notHas } from '../utils';
import { groupBy } from 'ramda';
if (notHas(Array.prototype, 'groupBy')) {
	Object.defineProperty(Array.prototype, 'groupBy', {
		value: function (fn: (a: any) => string) {
			return groupBy(fn, this);
		},
	});
}
