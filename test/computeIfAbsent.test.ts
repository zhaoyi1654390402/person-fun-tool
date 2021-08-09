import '../src';

test('computeIfAbsent', () => {
    let test = {
        key1: 100,
        key2: 200,
        key3: 300
    };

    expect(test.computeIfAbsent('key3', k => 301)).toStrictEqual(300);

    expect(test).toStrictEqual({
        key1: 100,
        key2: 200,
        key3: 300
    });

    expect(test.computeIfAbsent('key4', k => 400)).toStrictEqual(400);

    expect(test).toStrictEqual({
        key1: 100,
        key2: 200,
        key3: 300,
        key4: 400
    });
});
