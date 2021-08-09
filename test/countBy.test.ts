import '../src';

test('countBy', () => {
	const numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2].countBy(Math.floor);

	expect(numbers).toStrictEqual({ '1': 3, '2': 2, '3': 1 });
});
