import '../src';

test('compact', () => {
    const arr: Array<number | string | null | undefined | boolean> = [-1, 0, '', null, undefined, false, 1];
    const res = arr.compact<number>();
    expect(res).toStrictEqual([-1, 1]);
});