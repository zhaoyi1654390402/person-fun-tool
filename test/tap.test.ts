import '../src';

test('tap change value', () => {
	const temp = {
		a: 1,
		b: 2,
	};
	const map = temp.tap((it: any) => (it.a = 2));
	expect(map).toStrictEqual({ a: 2, b: 2 });
});

test('tap add key', () => {
	const temp = {
		a: 1,
		b: 2,
	};
	const map = temp.tap((it: any) => (it.c = 1));
	expect(map).toStrictEqual({ a: 1, b: 2, c: 1 });
	expect(map === temp).toStrictEqual(true);
});
