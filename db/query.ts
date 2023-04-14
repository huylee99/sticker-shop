import { products, categories } from "./schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export const getCategoryBySlug = ({ slug }: { slug: string }) => {
  return db.select().from(products).leftJoin(categories, eq(products.categoryId, categories.id)).where(eq(categories.name, slug));
};
