const calculateTotalSales = (qt, price) => {
  const total = qt * price;
  const valueInReal = total / 100;
  return `R$${valueInReal.toFixed(2).replace(".", ",")}`;
};

const findExistingSale = (sales, id) => {
  return sales.find((sale) => sale.id === id);
};

const addProductToSale = (sale, product) => {
  sale.products.push(product);
};

const createNewSale = (transaction, product) => {
  return {
    id: transaction.id,
    products: [
      {
        name: product.name,
        total: calculateTotalSales(transaction.qt, product.price),
      },
    ],
  };
};

const parseSales = (logs) => {
  const sales = [];

  logs.forEach((product) => {
    product.transactions.forEach((transaction) => {
      const totalSales = calculateTotalSales(transaction.qt, product.price);
      const existingSale = findExistingSale(sales, transaction.id);

      if (existingSale) {
        addProductToSale(existingSale, {
          name: product.name,
          total: totalSales,
        });
      } else {
        const newSale = createNewSale(transaction, product);
        sales.push(newSale);
      }
    });
  });
  return sales;
};

module.exports = parseSales;