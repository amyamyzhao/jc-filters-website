export const siteUrl = "https://www.txjiacheng.com";

export const contact = {
  whatsappNumber: "8615858381863",
  whatsappDisplay: "+86 158 5838 1863",
  email: "filter02@txjiacheng.com",
};

export type Category = {
  code: string;
  slug: string;
  title: string;
  kicker: string;
  description: string;
  matching: string;
  shape: "cartridge" | "screen" | "panel" | "bag";
  image?: string;
  subImages?: string[];
  subcategories: string[];
  compatibleBrands: string[];
  brandNote?: string;
  referenceExamples: string[];
  fitChecks: string[];
};

export function slugifySubcategory(title: string) {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function menuSubcategories(category: Category) {
  return category.slug === "dryer-lint-filters" ? [] : category.subcategories;
}

export const categories: Category[] = [
  {
    code: "01",
    slug: "pool-and-spa-filters",
    title: "Pool & Spa Filters",
    kicker: "Water filtration",
    description: "Pool and spa filter cartridges organized around size, end-cap style and compatible reference.",
    matching: "Part number · dimensions · end-cap style · pool / spa model",
    shape: "cartridge",
    image: "/assets/jc/category-pool-family-white.webp",
    subImages: ["/assets/jc/category-pool-family-white.webp", "/assets/jc/category-pool-family-white.webp"],
    subcategories: ["Pool Filters", "Spa Filters"],
    compatibleBrands: [],
    brandNote: "Pool and spa compatibility is indexed by replacement reference, dimensions and end-cap style. Brand names will be published with the verified product cross-reference.",
    referenceExamples: ["Replacement reference", "Cartridge dimensions", "Top and bottom opening", "Pool or spa system model"],
    fitChecks: ["Outside diameter", "Overall length", "Open or closed end cap", "Reference and system model"],
  },
  {
    code: "02",
    slug: "appliance-filters",
    title: "Appliance Filters",
    kicker: "Clean-air appliances",
    description: "Air purifier and humidifier filters grouped by appliance model, reference and filtration format.",
    matching: "Appliance model · OEM reference · filter type · dimensions",
    shape: "panel",
    image: "/assets/jc/appliance-collection.jpg",
    subImages: ["/assets/jc/appliance-collection.jpg", "/assets/store/appliance-filter.jpg"],
    subcategories: ["Air Purifier Filters", "Humidifier Filters"],
    compatibleBrands: ["Philips", "Dyson", "Sharp", "AIRCARE", "Essick Air", "Bemis", "Holmes", "Bionaire", "Vicks", "Kaz"],
    referenceExamples: ["Appliance brand", "Model number", "Filter reference", "Filter size and format"],
    fitChecks: ["Appliance model", "Filter reference", "Overall dimensions", "HEPA / carbon / wick format"],
  },
  {
    code: "03",
    slug: "vacuum-filters-and-dust-bags",
    title: "Vacuum Filters & Dust Bags",
    kicker: "Floor-care replacements",
    description: "Vacuum HEPA filters, foam filter sets and non-woven dust bags prepared for model matching and seller-ready packs.",
    matching: "Vacuum model · OEM reference · filter / collar type · pack count",
    shape: "panel",
    image: "/assets/jc/category-vacuum-hepa-family-white.webp",
    subImages: ["/assets/jc/category-vacuum-hepa-family-white.webp", "/assets/jc/category-dust-bag-family-white.webp"],
    subcategories: ["Vacuum HEPA Filters", "Vacuum Dust Bags"],
    compatibleBrands: ["Dyson", "Miele", "Electrolux", "Eureka", "AEG", "Vorwerk / Kobold", "Kärcher", "Philips", "Hoover", "Cecotec"],
    referenceExamples: ["Vacuum brand", "Machine model", "Filter or bag reference", "Collar shape and pack count"],
    fitChecks: ["Machine model", "Part number", "Filter or collar shape", "Bag layers and pack count"],
  },
  {
    code: "04",
    slug: "dryer-lint-filters",
    title: "Dryer Lint Filters",
    kicker: "Dryer replacement parts",
    description: "Dryer lint screens and traps organized by replacement reference, frame shape and compatible appliance model.",
    matching: "Reference number · frame shape · dimensions · compatible model",
    shape: "screen",
    image: "/assets/jc/category-dryer-family-white-left.webp",
    subImages: ["/assets/jc/category-dryer-family-white-left.webp", "/assets/jc/category-dryer-family-white-left.webp"],
    subcategories: ["Dryer Lint Screens", "Dryer Lint Traps"],
    compatibleBrands: [
      "GE", "GE Profile", "Hotpoint", "Fisher & Paykel", "RCA", "LG", "Samsung", "Whirlpool",
      "Maytag", "Kenmore", "Kenmore Elite", "Electrolux", "Frigidaire", "KitchenAid", "Jenn-Air",
      "Amana", "Magic Chef", "Admiral", "Norge", "Roper", "Crosley", "Speed Queen", "Sears",
      "Gibson", "Westinghouse", "Kelvinator", "Tappan", "Montgomery Ward",
    ],
    referenceExamples: ["Dryer brand", "Machine model", "Replacement part number", "Frame shape and size"],
    fitChecks: ["Part number", "Dryer model suffix", "Frame outline", "Handle and mesh details"],
  },
];

export const catalogArchitecture = [
  { number: "01", title: "Choose a filter category", text: "Start with pool and spa, appliance, vacuum or dryer filtration." },
  { number: "02", title: "Select the compatible brand", text: "Use the brand directory to narrow the correct model family." },
  { number: "03", title: "Confirm model or part number", text: "Cross-check the exact reference, dimensions and product photos." },
  { number: "04", title: "Confirm supply requirements", text: "Add quantity, stock timing, pack count, FBA and custom-packing needs." },
];

export const services = [
  {
    slug: "ready-stock",
    number: "01",
    title: "Ready Stock",
    short: "Replenishment built around confirmed stock and dispatch windows.",
    intro: "A clear route for urgent replenishment: confirm the exact part, quantity and available inventory before the order is released.",
    points: ["Stock confirmation by item", "Quantity and cut-off check", "Dispatch plan shared before release"],
    note: "24H refers to eligible dispatch after stock, specification, payment and cut-off confirmation. It does not mean 24-hour delivery.",
  },
  {
    slug: "fba-service",
    number: "02",
    title: "FBA Services",
    short: "Unit, carton and shipment preparation aligned to the approved brief.",
    intro: "Send your current FBA preparation requirements with the product list. The applicable labeling, packing and carton work can then be confirmed item by item.",
    points: ["Unit-label preparation", "Pack-count and carton planning", "Shipping-mark support"],
    note: "Final preparation requirements remain subject to the buyer’s current marketplace instructions and the approved order specification.",
  },
  {
    slug: "custom-packaging",
    number: "03",
    title: "OEM & ODM",
    short: "A structured path from pack brief to approved production artwork.",
    intro: "Private-label packaging can be scoped around pack count, artwork, barcode placement and marketplace presentation.",
    points: ["Pack-count configuration", "Artwork and label placement", "Barcode and carton-mark planning"],
    note: "Packaging options, MOQ and lead time are confirmed against the selected item and final artwork.",
  },
];

export function whatsappLink(message: string) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
