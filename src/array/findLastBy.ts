// 返回符合要求的元素的下标
import { notHas } from '../utils';
import { findLast } from 'ramda';

if (notHas(Array.prototype, 'findLastBy')) {
	Object.defineProperty(Array.prototype, 'findLastBy', {
		value: function (fn: (a: any) => boolean) {
			return findLast(fn)(this);
		},
		enumerable: false,
	});
}
