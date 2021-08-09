import '../src';

test('sumBy', () => {
    const arr = [1, 2, 3];
    expect(arr.sumBy(it => it) === arr.reduce((sum, item) => sum + item, 0))
        .toStrictEqual(true);
});