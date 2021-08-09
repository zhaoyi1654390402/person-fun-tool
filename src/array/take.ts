import _take from 'lodash/take';
import { notHas } from '../utils';

if (notHas(Array.prototype, 'take')) {
	Object.defineProperty(Array.prototype, 'take', {
		value: function (n?: number) {
			return _take(this, n);
		},
		enumerable: false,
	});
}
