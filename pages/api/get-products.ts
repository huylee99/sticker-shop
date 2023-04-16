import { getProducts } from "~/db/query";

export const config = {
  runtime: "edge",
  regions: ["sin1"],
};

const handler = async () => {
  const result = await getProducts();

  return new Response(JSON.stringify(result), { status: 200 });
};

export default handler;
