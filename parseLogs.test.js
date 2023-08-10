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
                    { name: 'apple', total: "R$6,00" },
                    { name: 'orange', total: "R$2,50" },
                    { name: 'rice', total: "R$10,00" },
                    { name: 'soap', total: "R$2,50" }
                ],
            },
            {
                id: '002',
                products: [
                    { name: 'apple', total: "R$2,00" },
                    { name: 'orange', total: "R$2,50" },
                    { name: 'rice', total: "R$5,00" }
                ],
            },
            {
                id: '003',
                products: [
                    { name: 'apple', total: "R$74,00" },
                    { name: 'chocolat', total: "R$135,00" },
                    { name: 'soap', total: "R$1,00" }
                ],
            },
            {
                id: '004',
                products: [
                    { name: 'apple', total: "R$10,00" },
                    { name: 'milk', total: "R$108,00" },
                    { name: 'soap', total: "R$0,50" }
                ],
            },
            {
                id: '005',
                products: [
                    { name: 'milk', total: "R$36,00" },
                    { name: 'rice', total: "R$15,00" },
                ],
            },
            {
                id: '006',
                products: [
                    { name: 'milk', total: "R$45,00" },
                    { name: 'chocolat', total: "R$15,00" },
                ],
            },
            {
                id: '007',
                products: [
                    { name: 'milk', total: "R$81,00" },
                    { name: 'chocolat', total: "R$75,00" }
                ],
            },
            ]
        )
    })
})