import { notHas } from '../utils';

if (notHas(Array.prototype, 'mapNonNullable')) {
	Object.defineProperty(Array.prototype, 'mapNonNullable', {
		value: function (iteratee: (value: any) => unknown) {
			return (this as any[])
				.map((it) => iteratee(it))
				.filter((temp) => temp !== null && temp !== undefined);
		},
		enumerable: false,
	});
}
