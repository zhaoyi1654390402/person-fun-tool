import '../src';

test('take', () => {
    const arr1: number[] = [1, 2, 3];
    const take1 = arr1.take();
    expect(take1).toStrictEqual([1]);
    expect(arr1).toStrictEqual([1, 2, 3]);
    expect(arr1.take(2)).toStrictEqual([1, 2])
    expect(arr1.take(5)).toStrictEqual([1, 2, 3])
    expect(arr1.take(0)).toStrictEqual([])
});
