import '../src';


test('head', () => {
    let test = ['Grace Hopper', 'Jacob Bernoulli', 'Johann Bernoulli']
        .head();

    let test2 = [].head();

    expect(test).toStrictEqual('Grace Hopper');
    expect(test2).toStrictEqual(undefined);
});
