const parseProfit = (logs) => {
  return logs.map((product) => {
    const totalSold = product.transactions.reduce((acc, transaction) => {
      return acc + transaction.qt * product.price;
    }, 0);

    return {
      name: product.name,
      totalSelled: `R$${totalSold.toFixed(2).replace(".", ",")}`,
    };
  });
};

module.exports = parseProfit;