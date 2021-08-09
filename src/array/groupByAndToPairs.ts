import { notHas } from '../utils';

if (notHas(Array.prototype, 'groupByAndToPairs')) {
	Object.defineProperty(Array.prototype, 'groupByAndToPairs', {
		value: function (fn: (a: any) => number | string) {
			return Object.values(
				(this as any[]).reduce<{
					[k: string]: { key: number | string; value: any[] };
				}>((previousValue, currentValue) => {
					const key = fn(currentValue);
					if (!previousValue[key]) {
						previousValue[key] = {
							key: typeof key === 'number' ? key : String(key),
							value: [],
						};
					}
					previousValue[key].value.push(currentValue);
					return previousValue;
				}, {})
			).map((a) => [a.key, a.value]);
		},
		enumerable: false,
	});
}
