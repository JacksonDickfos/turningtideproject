export type BaseCatalogItem = {
  /** Stable id used for card targeting/styling (e.g. dp-1, c-2, fr-3) */
  id: string;
  /** URL slug for the detail page */
  slug: string;
  title: string;
  subtitle?: string;
  /** Short card description (optional; empty string hides on cards) */
  description: string;
  /** Longer description for detail pages (optional) */
  longDescription?: string;
  imageSrc?: string;
  imageAlt?: string;
  status?: "available" | "coming_soon";
};

export type DigitalProductItem = BaseCatalogItem & {
  type: "digital_product";
  /** Stripe checkout URL (to be provided) */
  stripeUrl?: string;
  priceLabel?: string;
  sidebarTitle?: string;
  sidebarSubtitle?: string;
  sidebarNote?: string;
  /** Image gallery for the product page */
  gallery?: { src: string; alt?: string }[];
};

export type CourseItem = BaseCatalogItem & {
  type: "course";
  introVideoUrl?: string;
  modules?: { title: string; bullets?: string[] }[];
};

export type FreeResourceItem = BaseCatalogItem & {
  type: "free_resource";
  /** Where the PDF will be delivered from (email flow is implemented separately) */
  pdfUrl?: string;
  gallery?: { src: string; alt?: string }[];
  /** Download panel (hero copy above the signup form) */
  signupHeading: string;
  signupShortDescription: string;
  signupCtaLabel: string;
  signupDisclosureNote: string;
};

export const digitalProducts: DigitalProductItem[] = [
  {
    type: "digital_product",
    id: "dp-1",
    slug: "the-care-companion",
    title: "The Care Companion",
    description:
      "Your Ultimate Caregiving Organiser. An essential all-in-one guide to comprehensive care.",
    imageSrc: "/images/carecompanion6.png",
    imageAlt: "The Care Companion",
    status: "available",
    stripeUrl: "https://buy.stripe.com/fZucMYb6u6yk0Ao9OH6oo00",
    priceLabel: "$49.95 AUD",
    sidebarTitle: "The Care Companion — Your Ultimate Caregiving Organiser.",
    sidebarSubtitle:
      "An all-in-one digital tool to keep important information, appointments, and care details in one place.",
    sidebarNote: "Created to reduce overwhelm and help caring feel more manageable.",
    gallery: [{ src: "/images/carecompanion6.png", alt: "The Care Companion" }],
  },
  {
    type: "digital_product",
    id: "dp-2",
    slug: "residential-aged-care-inspection-guide",
    title: "Aged Care Inspection Guide",
    subtitle: "What to look for, what to ask, and how to choose with confidence.",
    description: "",
    imageSrc: "/images/inspectionguide.png",
    imageAlt: "Aged Care Inspection Guide",
    status: "coming_soon",
    stripeUrl: "", // TODO: add Stripe link
    gallery: [{ src: "/images/inspectionguide.png", alt: "Inspection guide" }],
  },
  {
    type: "digital_product",
    id: "dp-3",
    slug: "digital-product-3",
    title: "Digital Product 3",
    description: "Visual + copy coming soon.",
    status: "coming_soon",
    stripeUrl: "", // TODO: add Stripe link
  },
];

export const courses: CourseItem[] = [
  {
    type: "course",
    id: "c-1",
    slug: "clear-the-chaos",
    title: "Clear the Chaos",
    subtitle: "Getting organised for carers",
    description:
      "A practical course to help you get things out of your head and into simple systems that actually work for carers.",
    imageSrc: "/images/clearthechaos.png",
    imageAlt: "Clear the Chaos",
    status: "coming_soon",
    introVideoUrl: "", // TODO: add hosted video URL
    modules: [
      { title: "Module 1: Getting the mental load out of your head" },
      { title: "Module 2: Simple systems that stick" },
      { title: "Module 3: Maintenance (without overwhelm)" },
    ],
  },
  {
    type: "course",
    id: "c-2",
    slug: "reclaiming-you",
    title: "Reclaiming You",
    subtitle: "Self-care for carers",
    description:
      "A realistic approach to self-care that fits around caring - not another thing to feel guilty about.",
    imageSrc: "/images/reclaimingyou.png",
    imageAlt: "Reclaiming You",
    status: "coming_soon",
    introVideoUrl: "", // TODO: add hosted video URL
    modules: [
      { title: "Module 1: What self-care actually means for carers" },
      { title: "Module 2: Protecting your energy" },
      { title: "Module 3: Reconnecting with yourself" },
    ],
  },
  {
    type: "course",
    id: "c-3",
    slug: "protect-your-energy",
    title: "Protect Your Energy",
    subtitle: "Setting boundaries for carers",
    description:
      "Learn how to set boundaries without guilt, conflict, or feeling selfish.",
    imageSrc: "/images/protectyourenergy.png",
    imageAlt: "Protect Your Energy",
    status: "coming_soon",
    introVideoUrl: "", // TODO: add hosted video URL
    modules: [
      { title: "Module 1: Boundaries basics" },
      { title: "Module 2: Scripts for hard conversations" },
      { title: "Module 3: Holding boundaries kindly" },
    ],
  },
];

export const freeResources: FreeResourceItem[] = [
  {
    type: "free_resource",
    id: "fr-3",
    slug: "free-resource-3",
    title: "When It's Time",
    subtitle: "Navigating the move into care for someone you love.",
    description: "",
    imageSrc: "/images/whenitstime.png",
    imageAlt: "When It's Time",
    status: "available",
    pdfUrl: "", // TODO: set actual PDF URL
    gallery: [
      { src: "/images/WIT 1 Front Cover.jpg", alt: "Front cover" },
      {
        src: "/images/WIT 2 When something is changing.jpg",
        alt: "When something is changing",
      },
      { src: "/images/WIT 3 What it helps with.jpg", alt: "What it helps with" },
      { src: "/images/WIT 4 What this is.jpg", alt: "What this is" },
      { src: "/images/WIT 5 Why carers use it.jpg", alt: "Why carers use it" },
      { src: "/images/WIT 6 How to use it.jpg", alt: "How to use it" },
      {
        src: "/images/WIT 7 What you_ll walk away with.jpg",
        alt: "What you'll walk away with",
      },
      {
        src: "/images/WIT 8 Instant Download - Digital PDF.jpg",
        alt: "Instant download — digital PDF",
      },
      { src: "/images/WIT 9 When Its Time.jpg", alt: "When it's time" },
    ],
    signupHeading: "Support for a big, emotional decision",
    signupShortDescription:
      "A practical, compassionate guide to help you navigate the move into care — whether the decision is yours, shared with family, or being made by someone you love.",
    signupCtaLabel: "Download now",
    signupDisclosureNote:
      "By downloading, you'll also receive helpful emails from The Turning Tides Project. You can unsubscribe anytime.",
  },
  {
    type: "free_resource",
    id: "fr-1",
    slug: "the-brain-dump",
    title: "The Brain Dump",
    subtitle: "Brain won't switch off. Mentally overloaded? Start here.",
    description: "",
    imageSrc: "/images/braindump.png",
    imageAlt: "The Brain Dump",
    status: "available",
    pdfUrl: "", // TODO: set actual PDF URL
    gallery: [
      { src: "/images/BD 1 Front Cover.jpg", alt: "Front cover" },
      {
        src: "/images/BD 2 When your head feels full.jpg",
        alt: "When something is changing",
      },
      { src: "/images/BD 3 What it helps with.jpg", alt: "What it helps with" },
      { src: "/images/BD 4 What this is.jpg", alt: "What this is" },
      { src: "/images/BD 5 Why carers use it.jpg", alt: "Why carers use it" },
      { src: "/images/BD 6 How to use it.jpg", alt: "How to use it" },
      {
        src: "/images/BD 7 What you_ll walk away with.jpg",
        alt: "What you'll walk away with",
      },
      {
        src: "/images/BD 8 Instant Download - Digital PDF.jpg",
        alt: "Instant download — digital PDF",
      },
      { src: "/images/BD 9 The Brain Dump.jpg", alt: "When it's time" },
    ],
    signupHeading: "Clear your head in minutes",
    signupShortDescription:
      "A simple way to get everything out of your head and onto paper — no organising, no fixing, just space to breathe.",
    signupCtaLabel: "Download now",
    signupDisclosureNote:
      "By downloading, you'll also receive helpful emails from The Turning Tides Project. You can unsubscribe anytime.",
  },
  {
    type: "free_resource",
    id: "fr-2",
    slug: "grateful-tides",
    title: "Grateful Tides",
    subtitle: "A simple gratitude journal for carers – even on the hard days.",
    description: "",
    imageSrc: "/images/journal.png",
    imageAlt: "Grateful Tides",
    status: "available",
    pdfUrl: "", // TODO: set actual PDF URL
    gallery: [{ src: "/images/journal.png", alt: "Grateful Tides" }],
    signupHeading: "A gentle moment of gratitude",
    signupShortDescription:
      "A simple gratitude journal designed to help you pause, reflect, and notice small moments of calm - even on hard days.",
    signupCtaLabel: "Download now",
    signupDisclosureNote:
      "By downloading, you'll also receive helpful emails from The Turning Tides Project. You can unsubscribe anytime.",
  },
];

export function getDigitalProduct(slug: string) {
  return digitalProducts.find((p) => p.slug === slug);
}

export function getCourse(slug: string) {
  return courses.find((c) => c.slug === slug);
}

export function getFreeResource(slug: string) {
  return freeResources.find((r) => r.slug === slug);
}

