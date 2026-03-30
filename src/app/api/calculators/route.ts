import { NextResponse } from "next/server";

import { tools } from "@/src/config/tools";

export function GET() {
  // Expose the same registry data that powers the UI so API consumers stay aligned.
  return NextResponse.json({
    status: "ok",
    count: tools.length,
    calculators: tools,
  });
}
