/**
 * Calculate maximum profit on a given stock for a period.
 *
 * @param {prices} Array - a list of test stock price numbers.
 */
const MaxProfit = (prices) => {
  let maxProfit = -1;
  let buyPrice = 0;
  let sellPrice = 0;
  let shouldBuy = true;

  prices.forEach((num, i) => {
    // Perform the initial buy at the price
    // in the prices list.
    if (shouldBuy === true) {
      buyPrice = prices[i];
    }

    // Set next price change in the list.
    sellPrice = prices[i + 1];
    // If the price change is greater than the
    // price set initially, go ahead and buy.
    if (sellPrice < buyPrice) {
      shouldBuy = true;
    }
    else {
      let tempProfit = sellPrice - buyPrice;
      if (tempProfit > maxProfit) {
        maxProfit = tempProfit;
      }
      shouldBuy = false;
    }
  });

  return `The maximum profit is ${maxProfit}.`;
}

module.exports = MaxProfit;
