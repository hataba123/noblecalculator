import type { CpmCpcInput, CpmCpcResult } from "./schema";

export function calculateCpmCpc({ adSpend, impressions, clicks }: CpmCpcInput): CpmCpcResult {
  const cpm = impressions > 0 ? (adSpend / impressions) * 1000 : 0;
  const cpc = clicks > 0 ? adSpend / clicks : 0;
  const ctr = impressions > 0 ? (clicks / impressions) * 100 : 0;

  return { adSpend, impressions, clicks, cpm, cpc, ctr };
}