test('converge', () => {
	var sumOfArr = (arr: Array<number>) => {
		var sum = 0;
		arr.forEach((i) => (sum += i));
		return sum;
	};
	var lengthOfArr = (arr: Array<any>) => arr.length;
	var average = (() => {}).converge(R.divide, [sumOfArr, lengthOfArr]);
	expect(average([1, 2, 3, 4, 5, 6, 7])).toStrictEqual(4);

	var toUpperCase = (s: string) => s.toUpperCase();
	var toLowerCase = (s: string) => s.toLowerCase();
	var strangeConcat = (() => {}).converge(R.concat, [
		toUpperCase,
		toLowerCase,
	]);
	expect(strangeConcat('Yodel')).toStrictEqual('YODELyodel');
});
