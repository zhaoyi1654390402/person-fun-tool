import { notHas } from '../utils';
import _minBy from 'lodash/minBy';

if (notHas(Array.prototype, 'minBy')) {
	Object.defineProperty(Array.prototype, 'minBy', {
		value: function (fn: Function | string, list?: readonly any[]) {
			return _minBy(list && list.length ? list : this, fn);
		},
		enumerable: false,
	});
}
