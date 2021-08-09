import { notHas } from '../utils';
import _drop from 'lodash/drop';
// Array.drop=>返回切片去除array前面的n个元素的新数组
if (notHas(Array.prototype, 'drop')) {
	Object.defineProperty(Array.prototype, 'drop', {
		value: function (n?: number) {
			return _drop(this, n);
		},
		enumerable: false,
	});
}
