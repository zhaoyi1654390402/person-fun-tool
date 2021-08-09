import '../src';

test('associate', () => {
	let test = [
		'Grace Hopper',
		'Jacob Bernoulli',
		'Johann Bernoulli',
	].associate((it) => {
		let arr = it.split(' ');
		return [arr[0], arr[1]];
	});

	expect(test).toStrictEqual({
		Grace: 'Hopper',
		Jacob: 'Bernoulli',
		Johann: 'Bernoulli',
	});
});
