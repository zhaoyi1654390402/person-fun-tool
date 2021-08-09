import _sumBy from 'lodash/sumBy';
import { notHas } from '../utils';

if (notHas(Array.prototype, 'sumBy')) {
	Object.defineProperty(Array.prototype, 'sumBy', {
		value: function (fn?: ((value: any) => number) | string) {
			return _sumBy(this, fn);
		},
		enumerable: false,
	});
}
