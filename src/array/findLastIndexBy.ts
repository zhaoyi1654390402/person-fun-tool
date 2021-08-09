// 返回符合要求的元素的下标
// import _findLastIndex from 'lodash/findLastIndex';
import { notHas } from '../utils';
import { findLastIndex } from 'ramda';
if (notHas(Array.prototype, 'findLastIndexBy')) {
	Object.defineProperty(Array.prototype, 'findLastIndexBy', {
		value: function (fn: (a: any) => boolean) {
			return findLastIndex(fn,this);
		},
		enumerable: false,
	});
}
