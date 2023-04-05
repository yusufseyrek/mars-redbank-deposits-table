import { NextResponse } from "next/server";

import AVAILABLE_ASSETS from "@/constants/availableAssets";
import {
  getMarketQueryMsg,
  getUnderlyingLiquidityAmountMsg,
} from "@/utils/query";
import { createQuery } from "@/utils/cosmWasm";

export async function GET(request: Request) {
  try {
    const marketResults = await Promise.all(
      AVAILABLE_ASSETS.map(({ denom }) => createQuery(getMarketQueryMsg(denom)))
    );
    const underlyingLiquidityAmountResults = await Promise.all(
      marketResults.map(({ denom, collateral_total_scaled: amount_scaled }) =>
        createQuery(getUnderlyingLiquidityAmountMsg(denom, amount_scaled))
      )
    );

    return NextResponse.json(
      marketResults.map((market, index) => ({
        ...market,
        name: AVAILABLE_ASSETS[index].name,
        logo: AVAILABLE_ASSETS[index].logo.src,
        underlying_liquidity_amount: underlyingLiquidityAmountResults[index],
      }))
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
