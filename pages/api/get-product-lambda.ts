// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getCategoryBySlug } from "~/db/query";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await getCategoryBySlug({ slug: "Kawaii" });

  return res.json(result);
};

export default handler;
