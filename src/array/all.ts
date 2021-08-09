import { notHas } from '../utils';
import { all } from 'ramda';

if (notHas(Array.prototype, 'all')) {
	Object.defineProperty(Array.prototype, 'all', {
		value: function (predicate: (arr: any) => boolean) {
			return all(predicate)(this);
		},
		enumerable: false,
	});
}
