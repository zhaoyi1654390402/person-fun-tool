import '../src';

test('isPromise', () => {
	const promiseObj = new Promise((resolve) => {
		setTimeout(() => {
			resolve(1);
		}, 1000);
	});
	expect(promiseObj);
});
