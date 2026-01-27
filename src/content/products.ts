export type Product = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  format: string;
  price: string;
  purchaseUrl: string;
};

export const products: Product[] = [
  {
    id: "book-1",
    title: "Book Title One",
    subtitle: "A short, compelling hook that clarifies who it’s for",
    description:
      "A 1–2 sentence description of what the reader will learn, how it helps, and what makes it different.",
    format: "PDF / ePub",
    price: "$XX",
    purchaseUrl: "#", // TODO: replace with your checkout link (Stripe/Gumroad/Shopify/etc.)
  },
  {
    id: "book-2",
    title: "Book Title Two",
    subtitle: "A practical guide to ________",
    description:
      "A 1–2 sentence description of outcomes and what’s inside (frameworks, templates, exercises, etc.).",
    format: "PDF / ePub",
    price: "$XX",
    purchaseUrl: "#",
  },
];
