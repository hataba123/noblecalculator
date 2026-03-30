import { NextResponse } from "next/server";

import { tools } from "@/src/config/tools";

export function GET() {
  return NextResponse.json({
    status: "ok",
    count: tools.length,
    calculators: tools,
  });
}
