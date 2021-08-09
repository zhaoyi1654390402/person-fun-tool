import { notHas } from '../utils';
// import _countBy from 'lodash/countBy';
import { countBy } from 'ramda';
if (notHas(Array.prototype, 'countBy')) {
	Object.defineProperty(Array.prototype, 'countBy', {
		value: function (fn: (a: any) => string | number) {
			return countBy(fn)(this);
		},
		enumerable: false,
	});
}
