import '../src';

test('promise all', () => {
	[
		new Promise((resolve) => {
			setTimeout(() => {
				resolve(1);
			}, 1000);
		}),
		1,
	]
		.proall<number>()
		.then((list) => {
			expect(list).toStrictEqual([1, 1]);
		});
});
