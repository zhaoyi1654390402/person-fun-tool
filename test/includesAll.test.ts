import '../src';


test('includesAll', () => {
    let test = ['Grace Hopper', 'Jacob Bernoulli', 'Johann Bernoulli']
        .includesAll(['Jacob Bernoulli']);

    let test2 = [{id: 1}, {id: 2}, {id: 3}]
        .includesAll([{id: 2}, {id: 4}, {id: 3}], (item, it) => it.id === item.id);

    expect(test).toStrictEqual(true);
    expect(test2).toStrictEqual(false);
});
