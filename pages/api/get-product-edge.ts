// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextRequest, NextResponse } from "next/server";
import { getCategoryBySlug } from "~/db/query";

export const config = {
  runtime: "edge",
  regions: ["sin1"],
};

const handler = async (req: NextRequest, res: NextResponse) => {
  const result = await getCategoryBySlug({ slug: "Kawaii" });

  return new Response(JSON.stringify(result), { status: 200 });
};
export default handler;
