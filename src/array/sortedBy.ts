import { notHas } from '../utils';
import _sortBy from 'lodash/sortBy';

if (notHas(Array.prototype, 'sortedBy')) {
	Object.defineProperty(Array.prototype, 'sortedBy', {
		value: function (...iteratees: Array<_.Many<_.ListIteratee<any>>>) {
			return _sortBy(this, ...iteratees);
		},
		enumerable: false,
	});
}
