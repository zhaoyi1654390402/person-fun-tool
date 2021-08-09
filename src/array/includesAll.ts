// 当前数组包含的子集
import { notHas } from '../utils';

if (notHas(Array.prototype, 'includesAll')) {
	Object.defineProperty(Array.prototype, 'includesAll', {
		value: function <T, U extends T>(
			array: U[],
			cb?: (item: U, it: T) => boolean
		) {
			return array.every((item, index, arr) =>
				(this as T[]).find((it) => (cb ? cb(item, it) : item === it))
			);
		},
		enumerable: false,
	});
}
