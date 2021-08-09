import '../src';

type user = { user: string, age: number }

const users: { [k: string]: user } = {
    'fred': {'user': 'fred', 'age': 40},
    'pebbles': {'user': 'pebbles', 'age': 1}
};
test('mapValues function', () => {
    expect(users.mapValues((o: user) => o.age))
        .toStrictEqual({'fred': 40, 'pebbles': 1});
});

test('mapValues string', () => {
    expect(users.mapValues<string>('age'))
        .toStrictEqual({'fred': 40, 'pebbles': 1});
});
