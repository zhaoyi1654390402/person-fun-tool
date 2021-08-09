import '../src';

test('groupBy', () => {
	const arr = [
		{
			id: 1,
			age: 1,
		},
		{
			id: 2,
			age: 2,
		},
		{
			id: 3,
			age: 3,
		},
		{
			id: 4,
			age: 2,
		},
	];

	const res1 = arr.groupBy((it: any) => it.age);
	expect(res1).toStrictEqual({
		1: [
			{
				id: 1,
				age: 1,
			},
		],
		2: [
			{
				id: 2,
				age: 2,
			},
			{
				id: 4,
				age: 2,
			},
		],
		3: [
			{
				id: 3,
				age: 3,
			},
		],
	});
});

test('groupByAndToPairs', () => {
    const arr = [
        {
            id: 1,
            age: 1,
        },
        {
            id: 2,
            age: 2,
        },
        {
            id: 3,
            age: 3,
        },
        {
            id: 4,
            age: 2,
        },
    ];

    const res1 = arr.groupByAndToPairs(it => it.age);
    expect(res1).toStrictEqual([
        [
            1,
            [
                {
                    id: 1,
                    age: 1,
                },
            ],
        ],
        [
            2,
            [
                {
                    id: 2,
                    age: 2,
                },
                {
                    id: 4,
                    age: 2,
                },
            ],
        ],
        [
            3,
            [
                {
                    id: 3,
                    age: 3,
                },
            ],
        ],
    ]);
    expect(typeof res1[0][0] === 'number').toStrictEqual(true);
});

test('strictGroupBy', () => {
	const arr = [
		{
			id: 1,
			age: 1,
		},
		{
			id: 2,
			age: '2',
		},
		{
			id: 3,
			age: 3,
		},
		{
			id: 4,
			age: 2,
		},
		{
			id: 5,
			age: 2,
		},
	];
	const res = arr.strictGroupBy((_) => _.age);
	expect(res).toStrictEqual([
		[1, [{ id: 1, age: 1 }]],
		['2', [{ id: 2, age: '2' }]],
		[3, [{ id: 3, age: 3 }]],
		[
			2,
			[
				{ id: 4, age: 2 },
				{ id: 5, age: 2 },
			],
		],
	]);
	const res1 = arr.strictGroupBy((_) => _.age, arr);
	expect(res1).toStrictEqual([
		[1, [{ id: 1, age: 1 }]],
		['2', [{ id: 2, age: '2' }]],
		[3, [{ id: 3, age: 3 }]],
		[
			2,
			[
				{ id: 4, age: 2 },
				{ id: 5, age: 2 },
			],
		],
	]);
});
