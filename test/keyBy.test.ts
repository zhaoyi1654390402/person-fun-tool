import '../src';

test('keyBy', () => {
	expect(
		[
			{ dir: 'left', code: 97 },
			{ dir: 'right', code: 100 },
		].keyBy('dir')
	).toStrictEqual({
		left: { dir: 'left', code: 97 },
		right: { dir: 'right', code: 100 },
	});
	expect(
		[
			{ dir: 'left', code: 97 },
			{ dir: 'right', code: 100 },
		].keyBy('dir', [
			{ dir: 'left', code: 97 },
			{ dir: 'right', code: 100 },
		])
	).toStrictEqual({
		left: { dir: 'left', code: 97 },
		right: { dir: 'right', code: 100 },
	});
});
