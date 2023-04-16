import { mysqlEnum, int, mysqlTable, uniqueIndex, varchar, boolean, timestamp, text, float, index } from "drizzle-orm/mysql-core";
import { sql } from "drizzle-orm";

export const user = mysqlTable(
  "user",
  {
    id: varchar("id", { length: 24 }).primaryKey().notNull(),
    name: varchar("name", { length: 20 }).notNull(),
    email: varchar("email", { length: 50 }).notNull(),
    hashed_password: varchar("hashed_password", { length: 256 }).notNull(),
    is_verified: boolean("is_verified").notNull().default(false),
    created_at: timestamp("created_at")
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
    created_at: timestamp("created_at")
      .notNull()
      .default(sql`CURRENT_TIMESTAMP`),
  },
  (verification) => ({
    verificationIndex: uniqueIndex("verification__index").on(verification.email),
  })
);

export const category = mysqlTable("category", {
  id: varchar("id", { length: 24 }).primaryKey().notNull(),
  display_name: varchar("display_name", {
    length: 20,
  }).notNull(),
  slug: varchar("slug", {
    length: 10,
  }).notNull(),
  desc: text("desc").default(""),
  created_at: timestamp("created_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

export const discount = mysqlTable("discount", {
  id: varchar("id", { length: 24 }).primaryKey().notNull(),
  name: varchar("name", { length: 50 }).notNull(),
  percent: float("percent"),
  active: boolean("active").default(false).notNull(),
  created_at: timestamp("created_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

export const product = mysqlTable(
  "product",
  {
    id: varchar("id", { length: 24 }).primaryKey().notNull(),
    display_name: varchar("display_name", { length: 100 }).notNull(),
    price: float("price"),
    image: varchar("image", { length: 128 }).notNull(),
    slug: varchar("slug", { length: 50 }).notNull(),
    discount_id: varchar("discount_id", { length: 24 }),
    category_id: varchar("category_id", { length: 24 }).notNull(),
    created_at: timestamp("created_at")
      .notNull()
      .default(sql`CURRENT_TIMESTAMP`),
  },
  (products) => ({
    discountIndex: index("discount__index").on(products.discount_id),
    categoryIndex: index("category__index").on(products.category_id),
    slugIndex: uniqueIndex("slug__index").on(products.slug),
  })
);

export const shoppingSession = mysqlTable(
  "shopping_session",
  {
    id: varchar("id", { length: 24 }).primaryKey().notNull(),
    user_id: varchar("user_id", { length: 24 }).notNull(),
    total: float("total"),
  },
  (shoppingSession) => ({
    userIndex: uniqueIndex("shopping__user__index").on(shoppingSession.user_id),
  })
);

export const cartItem = mysqlTable(
  "cart_item",
  {
    id: varchar("id", { length: 24 }).primaryKey().notNull(),
    session_id: varchar("session_id", { length: 24 }).notNull(),
    product_id: varchar("product_id", { length: 24 }).notNull(),
    quantity: int("quantity"),
    created_at: timestamp("created_at")
      .notNull()
      .default(sql`CURRENT_TIMESTAMP`),
  },
  (cartItem) => ({
    sessionIndex: index("session__index").on(cartItem.session_id),
  })
);

export const orderDetail = mysqlTable(
  "order_detail",
  {
    id: varchar("id", { length: 24 }).primaryKey().notNull(),
    order_id: varchar("order_id", { length: 24 }).notNull(),
    product_id: varchar("product_id", { length: 24 }).notNull(),
    quantity: int("quantity"),
    price: float("price"),
    created_at: timestamp("created_at")
      .notNull()
      .default(sql`CURRENT_TIMESTAMP`),
  },
  (orderDetail) => ({
    productIndex: index("product__index").on(orderDetail.product_id),
    orderIndex: index("order__index").on(orderDetail.order_id),
  })
);

export const userOrder = mysqlTable(
  "user_order",
  {
    id: varchar("id", { length: 24 }).primaryKey().notNull(),
    user_id: varchar("user_id", { length: 24 }).notNull(),
    payment_id: varchar("payment_id", { length: 24 }).notNull(),
    total: float("total"),
    created_at: timestamp("created_at")
      .notNull()
      .default(sql`CURRENT_TIMESTAMP`),
  },
  (userOrder) => ({
    paymentIndex: uniqueIndex("user__payment__index").on(userOrder.payment_id),
    userId: index("user__index").on(userOrder.user_id),
  })
);

// payment schema
export const payment = mysqlTable(
  "payment",
  {
    id: varchar("id", { length: 24 }).primaryKey().notNull(),
    order_id: varchar("order_id", { length: 24 }).notNull(),
    amount: float("amount"),
    status: mysqlEnum("status", ["pending", "paid", "unpaid"]).notNull(),
    provider: mysqlEnum("provider", ["stripe"]).notNull(),
    created_at: timestamp("created_at")
      .notNull()
      .default(sql`CURRENT_TIMESTAMP`),
  },
  (payment) => ({
    orderIndex: uniqueIndex("payment__order__index").on(payment.order_id),
  })
);
