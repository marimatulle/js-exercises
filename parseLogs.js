const parseLog = (logs) => {
  const sales = [];
  logs.forEach((product) => {
    product.transactions.forEach((transaction) => {
      const totalSales = transaction.qt * product.price;
      const existingSale = sales.find((sale) => sale.id === transaction.id);

      if (existingSale) {
        existingSale.products.push({
          name: product.name,
          total: totalSales,
        });
      } else {
        sales.push({
          id: transaction.id,
          products: [
            {
              name: product.name,
              total: totalSales,
            },
          ],
        });
      }
    });
  });
  return sales;
};

module.exports = parseLog;
