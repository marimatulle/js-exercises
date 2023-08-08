const logs = require('./logs')
const parseLogs = require('./parseLogs')

describe('parseLogs', () => {
    test('should return an array with the transaction id, product name and total sales', () => {
        const result = parseLogs(logs)
        expect(result).toEqual(
            [
                {
                id: '001',
                products: [
                    { name: 'apple', total: 600 },
                    { name: 'orange', total: 250 },
                    { name: 'rice', total: 1000},
                    { name: 'soap', total: 250 }
                ],
            },
            {
                id: '002',
                products: [
                    { name: 'apple', total: 200 },
                    { name: 'orange', total: 250 },
                    { name: 'rice', total: 500 }
                ],
            },
            {
                id: '003',
                products: [
                    { name: 'apple', total: 7400 },
                    { name: 'chocolat', total: 13500 },
                    { name: 'soap', total: 100 }
                ],
            },
            {
                id: '004',
                products: [
                    { name: 'apple', total: 1000 },
                    { name: 'milk', total: 10800 },
                    { name: 'soap', total: 50 }
                ],
            },
            {
                id: '005',
                products: [
                    { name: 'milk', total: 3600 },
                    { name: 'rice', total: 1500 },
                ],
            },
            {
                id: '006',
                products: [
                    { name: 'milk', total: 4500 },
                    { name: 'chocolat', total: 1500 },
                ],
            },
            {
                id: '007',
                products: [
                    { name: 'milk', total: 8100 },
                    { name: 'chocolat', total: 7500 }
                ],
            },
            ]
        )
    })
})