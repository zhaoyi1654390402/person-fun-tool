import { notHas } from '../utils';

if (notHas(Array.prototype, 'strictGroupBy')) {
	Object.defineProperty(Array.prototype, 'strictGroupBy', {
		value: function (fn: (a: any) => number | string, list?: any[]) {
			return Object.values(
				(list && list.length ? list : <any[]>this).reduce<{
					[k: string]: { key: any; value: any[] };
				}>((previousValue, currentValue) => {
					const key = fn(currentValue);
					const typeKey = typeof key + '_' + key;
					if (!previousValue[typeKey]) {
						previousValue[typeKey] = {
							key,
							value: [],
						};
					}
					previousValue[typeKey].value.push(currentValue);
					return previousValue;
				}, {})
			).map((a) => [a.key, a.value]);
		},
		enumerable: false,
	});
}
