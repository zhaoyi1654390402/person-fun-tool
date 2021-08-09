import '../src';

test('drop', () => {
	const arr1: number[] = [1, 2, 3];
	const drop1 = arr1.drop();
	expect(drop1).toStrictEqual([2, 3]);
	expect(arr1).toStrictEqual([1, 2, 3]);
	expect(arr1.drop(2)).toStrictEqual([3]);
	expect(arr1.drop(5)).toStrictEqual([]);
	expect(arr1.drop(0)).toStrictEqual([1, 2, 3]);
});
