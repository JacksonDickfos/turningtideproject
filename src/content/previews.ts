export type PreviewItem = {
  id: string;
  title: string;
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
    title: "Course 1",
    description: "Coming soon.",
  },
  {
    id: "c-2",
    title: "Course 2",
    description: "Coming soon.",
  },
  {
    id: "c-3",
    title: "Course 3",
    description: "Coming soon.",
  },
];

export const freeResourcesPreview: PreviewItem[] = [
  {
    id: "fr-1",
    title: "Brain Dump",
    description: "Brain won't switch off. Mentally overloaded? Start here.",
    imageSrc: "/images/braindump.png",
    imageAlt: "Brain Dump",
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
