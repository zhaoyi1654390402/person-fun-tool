import { notHas } from '../utils';
import _maxBy from 'lodash/maxBy';

if (notHas(Array.prototype, 'maxBy')) {
	Object.defineProperty(Array.prototype, 'maxBy', {
		value: function (fn: Function | string, list?: readonly any[]) {
			return _maxBy(list && list.length ? list : this, fn);
		},
		enumerable: false,
	});
}
