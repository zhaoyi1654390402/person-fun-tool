import '../src';
test('find', () => {
	let arr1 = [1, 2, 3, 4, 5];
	expect(arr1.findLastBy((item: number) => item == 2)).toStrictEqual(2);
	expect(arr1.findLastIndexBy((item: number) => item == 2)).toStrictEqual(1);
	expect(arr1.findLastBy((item: number) => item >= 2)).toStrictEqual(5);
	expect(arr1.findLastIndexBy((item: any) => item >= 3)).toStrictEqual(4);
	try {
		const arr2 = arr1.firstBy<number>((item: number) => item == 0);
	} catch (error) {
		console.log(error);
	}
	const arr3 = arr1.firstBy<number>((item: number) => item == 1);
	expect(arr3).toStrictEqual(1);
});
