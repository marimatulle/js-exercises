const logs = require('./logs');
const parseProfit = require('./parseProfit');

describe('parseProfit', () => {
    test('should return an array with the product name and total selled', () => {
        const input = [
          {
            name: "apple",
            price: 200,
            transactions: [
              { id: "001", qt: 3 },
              { id: "002", qt: 1 },
              { id: "003", qt: 37 },
              { id: "004", qt: 5 },
            ],
          },
        ];
        const result = parseProfit(input);
        expect(result).toEqual(
            [
                { name: 'apple', totalSelled: "R$9200,00" }
            ]
        )
    })
})

