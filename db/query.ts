import { product, category } from "./schema";
import { db } from "./db";
import { eq, type InferModel } from "drizzle-orm";

export type Product = InferModel<typeof product, "select">;
export type Category = InferModel<typeof category, "select">;

export type ProductsResult = {
  product: Product;
  category: Category;
}[];

export const getProducts = async () => {
  return await db.select().from(product).innerJoin(category, eq(product.category_id, category.id));
};
