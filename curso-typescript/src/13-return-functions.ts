(()=> {
  const calcTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach(price => {
      total += price;
    });
    return total.toString();
  }
  const printTotal = (prices: number[]): void => {
    let rta = calcTotal(prices);
    console.log(`Total: ${rta}`);
  }
  printTotal([1, 2, 1, 1, 1, 1]);
})();
