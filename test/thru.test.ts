import '../src';

test('thru', () => {
    const temp = {
        a: 1,
        b: 2,
    };
    type tempType = { [k: string]: number }
    expect(temp.thru<number, tempType>(it => it.a))
        .toStrictEqual(1);
    const copy = temp.thru(it => it);
    expect(copy === temp).toStrictEqual(true);
});