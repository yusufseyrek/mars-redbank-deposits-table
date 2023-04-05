const getMarketQueryMsg = (denom: string): Record<string, unknown> => ({
  market: { denom },
});

const getUnderlyingLiquidityAmountMsg = (
  denom: string,
  amount_scaled: string
) => ({
  underlying_liquidity_amount: { denom, amount_scaled },
});

export { getMarketQueryMsg, getUnderlyingLiquidityAmountMsg };
