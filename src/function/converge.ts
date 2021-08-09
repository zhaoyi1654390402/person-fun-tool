import { notHas } from '../utils';
import { converge } from 'ramda';

if (notHas(Function.prototype, 'converge')) {
	Object.defineProperty(Function.prototype, 'converge', {
		value: function (
			after: (...a: readonly any[]) => any,
			fns: Array<(...a: readonly any[]) => any>
		) {
			converge(after, fns);
		},
		enumerable: false,
	});
}
