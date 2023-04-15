import { products, categories } from "./schema";
import { db } from "./db";
import { like, eq, type InferModel } from "drizzle-orm";

export type Product = InferModel<typeof products, "select">;
export type Category = InferModel<typeof categories, "select">;

export type ProductsResult = {
  product: Product;
  category: Category;
}[];

export const getCategoryBySlug = async () => {
  return await db.select({ product: products, category: categories }).from(products).leftJoin(categories, eq(products.categoryId, categories.id));
};
