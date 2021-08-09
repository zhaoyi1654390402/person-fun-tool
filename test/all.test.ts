import '../src';

test('all', () => {
	let test = ['Grace Hopper', 'Jacob Bernoulli', 'Johann Bernoulli'].all(
		(item) => item === 'Jacob Bernoulli'
	);
	expect(test).toStrictEqual(false);
});

test('all', () => {
	let test = ['Jacob Bernoulli'].all((item) => item === 'Jacob Bernoulli');
	expect(test).toStrictEqual(true);
});

test('any', () => {
	let test = ['Jacob Bernoulli'].any((item) => item === 'Jacob Bernoulli');
	expect(test).toStrictEqual(true);
});
test('any', () => {
	let test = ['Grace Hopper', 'Jacob Bernoulli', 'Johann Bernoulli'].any(
		(item) => item === 'Jacob Bernoulli'
	);
	expect(test).toStrictEqual(true);
});
test('any', () => {
	let test = ['Grace Hopper', 'Johann Bernoulli'].any(
		(item) => item === 'Jacob Bernoulli'
	);
	expect(test).toStrictEqual(false);
});
