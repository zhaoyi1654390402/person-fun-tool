import '../src';

type user = { user: string, age: number }

const users: { [k: string]: user } = {
    'fred': {'user': 'fred', 'age': 40},
    'pebbles': {'user': 'pebbles', 'age': 1},
};
test('mapKeys function', () => {
    expect(users.mapKeys((o: user) => o.age))
        .toStrictEqual({
            40: {'user': 'fred', 'age': 40},
            1: {'user': 'pebbles', 'age': 1},
        });
});

test('mapKeys string', () => {
    const arr = users.mapKeys<{ [k: number]: user }>('age');
    expect(arr)
        .toStrictEqual({
            40: {'user': 'fred', 'age': 40},
            1: {'user': 'pebbles', 'age': 1},
        });
});
