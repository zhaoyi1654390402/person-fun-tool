import '../src';

test('none', () => {
    let test = ['Grace Hopper', 'Jacob Bernoulli', 'Johann Bernoulli']
        .none((item) => item === 'Jacob Bernoulli');
    let test2 = ['Grace Hopper', 'Jacob Bernoulli', 'Johann Bernoulli']
        .none((item) => item === 'Sucsoft Cowork');

    expect(test).toStrictEqual(false);
    expect(test2).toStrictEqual(true);
});
