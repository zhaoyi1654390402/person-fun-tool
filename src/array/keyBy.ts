import _keyBy from 'lodash/keyBy';
import { notHas } from '../utils';

if (notHas(Array.prototype, 'keyBy')) {
	Object.defineProperty(Array.prototype, 'keyBy', {
		value: function (
			fn: Array<string | symbol> | Function | Object | string,
			list: readonly any[]
		) {
			return list && list.length ? _keyBy(list, fn) : _keyBy(this, fn);
		},
		enumerable: false,
	});
}
