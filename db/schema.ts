import { mysqlEnum, int, mysqlTable, uniqueIndex, varchar, boolean, timestamp, text, float, index } from "drizzle-orm/mysql-core";
import { sql } from "drizzle-orm";

export const users = mysqlTable(
  "users",
  {
    id: varchar("id", { length: 24 }).primaryKey().notNull(),
    name: varchar("name", { length: 20 }).notNull(),
    email: varchar("email", { length: 50 }).notNull(),
    password: varchar("password", { length: 256 }).notNull(),
    isVerified: boolean("isVerified").notNull().default(false),
    createdAt: timestamp("createdAt")
      .notNull()
      .default(sql`CURRENT_TIMESTAMP`),
  },
  (users) => ({
    emailIndex: uniqueIndex("email__index").on(users.email),
  })
);

export const verification = mysqlTable(
  "verification",
  {
    id: varchar("id", { length: 24 }).primaryKey().notNull(),
    token: varchar("token", { length: 256 }).notNull(),
    email: varchar("email", { length: 50 }).notNull(),
    createdAt: timestamp("createdAt")
      .notNull()
      .default(sql`CURRENT_TIMESTAMP`),
  },
  (verification) => ({
    verificationIndex: uniqueIndex("verification__index").on(verification.email),
  })
);

export const categories = mysqlTable("categories", {
  id: varchar("id", { length: 24 }).primaryKey().notNull(),
  name: varchar("name", {
    length: 20,
  }).notNull(),
  desc: text("desc").default(""),
  createdAt: timestamp("createdAt")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

export const discount = mysqlTable("discount", {
  id: varchar("id", { length: 24 }).primaryKey().notNull(),
  name: varchar("name", { length: 50 }).notNull(),
  percent: float("percent"),
  active: boolean("active").default(false).notNull(),
  createdAt: timestamp("createdAt")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

export const products = mysqlTable(
  "products",
  {
    id: varchar("id", { length: 24 }).primaryKey().notNull(),
    name: varchar("name", { length: 100 }).notNull(),
    price: float("price"),
    image: varchar("image", { length: 10 }).notNull(),
    slug: varchar("slug", { length: 50 }).notNull(),
    discountId: varchar("discountId", { length: 24 }),
    categoryId: varchar("categoryId", { length: 24 }).notNull(),
    createdAt: timestamp("createdAt")
      .notNull()
      .default(sql`CURRENT_TIMESTAMP`),
  },
  (products) => ({
    discountIndex: index("discount__index").on(products.discountId),
    categoryIndex: index("category__index").on(products.categoryId),
    slugIndex: uniqueIndex("slug__index").on(products.slug),
  })
);

export const shoppingSession = mysqlTable(
  "shopping_session",
  {
    id: varchar("id", { length: 24 }).primaryKey().notNull(),
    userId: varchar("userId", { length: 24 }).notNull(),
    total: float("total"),
  },
  (shoppingSession) => ({
    userIndex: uniqueIndex("shopping__user__index").on(shoppingSession.userId),
  })
);

export const cartItem = mysqlTable(
  "cart_item",
  {
    id: varchar("id", { length: 24 }).primaryKey().notNull(),
    sessionId: varchar("sessionId", { length: 24 }).notNull(),
    productId: varchar("productId", { length: 24 }).notNull(),
    quantity: int("quantity"),
    createdAt: timestamp("createdAt")
      .notNull()
      .default(sql`CURRENT_TIMESTAMP`),
  },
  (cartItem) => ({
    sessionIndex: index("session__index").on(cartItem.sessionId),
  })
);

export const orderDetail = mysqlTable(
  "order_detail",
  {
    id: varchar("id", { length: 24 }).primaryKey().notNull(),
    orderId: varchar("orderId", { length: 24 }).notNull(),
    productId: varchar("productId", { length: 24 }).notNull(),
    quantity: int("quantity"),
    price: float("price"),
    createdAt: timestamp("createdAt")
      .notNull()
      .default(sql`CURRENT_TIMESTAMP`),
  },
  (orderDetail) => ({
    productIndex: index("product__index").on(orderDetail.productId),
    orderIndex: index("order__index").on(orderDetail.orderId),
  })
);

export const userOrder = mysqlTable(
  "user_order",
  {
    id: varchar("id", { length: 24 }).primaryKey().notNull(),
    userId: varchar("userId", { length: 24 }).notNull(),
    paymentId: varchar("paymentId", { length: 24 }).notNull(),
    total: float("total"),
    createdAt: timestamp("createdAt")
      .notNull()
      .default(sql`CURRENT_TIMESTAMP`),
  },
  (userOrder) => ({
    paymentIndex: uniqueIndex("user__payment__index").on(userOrder.paymentId),
    userId: index("user__index").on(userOrder.userId),
  })
);

// payment schema
export const payment = mysqlTable(
  "payment",
  {
    id: varchar("id", { length: 24 }).primaryKey().notNull(),
    orderId: varchar("orderId", { length: 24 }).notNull(),
    amount: float("amount"),
    status: mysqlEnum("status", ["pending", "paid", "unpaid"]).notNull(),
    provider: mysqlEnum("provider", ["stripe"]).notNull(),
    createdAt: timestamp("createdAt")
      .notNull()
      .default(sql`CURRENT_TIMESTAMP`),
  },
  (payment) => ({
    orderIndex: uniqueIndex("payment__order__index").on(payment.orderId),
  })
);
