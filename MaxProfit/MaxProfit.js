/**
 * Calculate maximum profit on a given stock for a period.
 *
 * @param {prices} Array - a list of test stock price numbers.
 */
const MaxProfit = (prices) => {
  let maxProfit = -1;
  let buyPrice = 0;
  let sellPrice = 0;
  let changeBuyPrice = true;

  prices.forEach((num, i) => {
    if (changeBuyPrice === true) {
      buyPrice = prices[i];
    }

    sellPrice = prices[i + 1];
    if (sellPrice < buyPrice) {
      changeBuyPrice = true;
    }
    else {
      let tempProfit = sellPrice - buyPrice;
      if (tempProfit > maxProfit) {
        maxProfit = tempProfit;
      }
      changeBuyPrice = false;
    }
  });

  return `The maximum profit is ${maxProfit}.`;
}

module.exports = MaxProfit;
