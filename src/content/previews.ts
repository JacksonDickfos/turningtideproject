export type PreviewItem = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
};

export const digitalProductsPreview: PreviewItem[] = [
  {
    id: "dp-1",
    title: "The Care Companion",
    description:
      "Your Ultimate Caregiving Organiser. An essential all-in-one guide to comprehensive care.",
    imageSrc: "/images/carecompanion6.png",
    imageAlt: "The Care Companion",
  },
  {
    id: "dp-2",
    title: "Digital Product 2",
    description: "Visual + copy coming soon.",
  },
  {
    id: "dp-3",
    title: "Digital Product 3",
    description: "Visual + copy coming soon.",
  },
];

export const coursesPreview: PreviewItem[] = [
  {
    id: "c-1",
    title: "Clear the Chaos",
    subtitle: "Getting organised for carers",
    description:
      "A practical course to help you get things out of your head and into simple systems that actually work for carers.",
    imageSrc: "/images/clearthechaos.png",
    imageAlt: "Clear the Chaos",
  },
  {
    id: "c-2",
    title: "Reclaiming You",
    subtitle: "Self-care for carers",
    description:
      "A realistic approach to self-care that fits around caring - not another thing to feel guilty about.",
    imageSrc: "/images/reclaimingyou.png",
    imageAlt: "Reclaiming You",
  },
  {
    id: "c-3",
    title: "Protect Your Energy",
    subtitle: "Setting boundaries for carers",
    description:
      "Learn how to set boundaries without guilt, conflict, or feeling selfish.",
    imageSrc: "/images/protectyourenergy.png",
    imageAlt: "Protect Your Energy",
  },
];

export const freeResourcesPreview: PreviewItem[] = [
  {
    id: "fr-1",
    title: "The Brain Dump",
    description: "Brain won't switch off. Mentally overloaded? Start here.",
    imageSrc: "/images/braindump.png",
    imageAlt: "The Brain Dump",
  },
  {
    id: "fr-2",
    title: "Free Resource 2",
    description: "Visual + copy coming soon.",
  },
  {
    id: "fr-3",
    title: "Free Resource 3",
    description: "Visual + copy coming soon.",
  },
];
