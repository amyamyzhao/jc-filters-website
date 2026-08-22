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
};

export const categories: Category[] = [
  {
    code: "01",
    slug: "pool-and-spa-filters",
    title: "Pool & Spa Filters",
    kicker: "Water filtration",
    description: "Replacement cartridges for swimming pools and spas, organized around size, end-cap style and compatible reference.",
    matching: "Part number · dimensions · end-cap style · pool / spa model",
    shape: "cartridge",
    image: "/assets/jc/pool-collection.jpg",
    subImages: ["/assets/store/pool-spa.jpg", "/assets/jc/pool-collection.jpg"],
    subcategories: ["Pool Filters", "Spa Filters"],
  },
  {
    code: "02",
    slug: "appliance-filters",
    title: "Appliance Filters",
    kicker: "Clean-air appliances",
    description: "Air purifier and humidifier replacement filters grouped by appliance model, reference and filtration format.",
    matching: "Appliance model · OEM reference · filter type · dimensions",
    shape: "panel",
    image: "/assets/jc/appliance-collection.jpg",
    subImages: ["/assets/jc/appliance-collection.jpg", "/assets/store/appliance-filter.jpg"],
    subcategories: ["Air Purifier Filters", "Humidifier Filters"],
  },
  {
    code: "03",
    slug: "vacuum-filters-and-dust-bags",
    title: "Vacuum Filters & Dust Bags",
    kicker: "Floor-care replacements",
    description: "Vacuum HEPA filters, foam filter sets and non-woven dust bags prepared for model matching and seller-ready packs.",
    matching: "Vacuum model · OEM reference · filter / collar type · pack count",
    shape: "panel",
    image: "/assets/jc/vacuum-filter-collection.jpg",
    subImages: ["/assets/jc/vacuum-filter-collection.jpg", "/assets/jc/vacuum-bag-collection.jpg"],
    subcategories: ["Vacuum HEPA Filters", "Vacuum Dust Bags"],
  },
  {
    code: "04",
    slug: "dryer-lint-filters",
    title: "Dryer Lint Filters",
    kicker: "Dryer replacement parts",
    description: "Dryer lint screens and traps organized by replacement reference, frame shape and compatible appliance model.",
    matching: "Reference number · frame shape · dimensions · compatible model",
    shape: "screen",
    image: "/assets/store/dryer-lint.jpg",
    subImages: ["/assets/store/dryer-lint.jpg", "/assets/store/dryer-lint.jpg"],
    subcategories: ["Dryer Lint Screens", "Dryer Lint Traps"],
  },
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
    title: "FBA Service Support",
    short: "Unit, carton and shipment preparation aligned to the approved brief.",
    intro: "Send your current FBA preparation requirements with the product list. The applicable labeling, packing and carton work can then be confirmed item by item.",
    points: ["Unit-label preparation", "Pack-count and carton planning", "Shipping-mark support"],
    note: "Final preparation requirements remain subject to the buyer’s current marketplace instructions and the approved order specification.",
  },
  {
    slug: "custom-packaging",
    number: "03",
    title: "Custom Packaging",
    short: "A structured path from pack brief to approved production artwork.",
    intro: "Private-label packaging can be scoped around pack count, artwork, barcode placement and marketplace presentation.",
    points: ["Pack-count configuration", "Artwork and label placement", "Barcode and carton-mark planning"],
    note: "Packaging options, MOQ and lead time are confirmed against the selected item and final artwork.",
  },
];

export function whatsappLink(message: string) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
