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
  subcategories: string[];
};

export const categories: Category[] = [
  {
    code: "01",
    slug: "pool-and-spa",
    title: "Pool & Spa Filters",
    kicker: "Water filtration program",
    description: "Replacement pool cartridges and robotic pool cleaner filter parts organized for fast cross-reference.",
    matching: "Part number · dimensions · pool / cleaner model",
    shape: "cartridge",
    image: "/assets/store/pool-spa.jpg",
    subcategories: ["Swimming Pool Replacement Cartridges", "Robotic Pool Cleaner Filters", "Spa Filter Cartridges"],
  },
  {
    code: "02",
    slug: "dryer-lint-filters",
    title: "Dryer Lint Screen Filters",
    kicker: "Dryer replacement parts",
    description: "Dryer lint screens and traps grouped by replacement reference and compatible appliance model.",
    matching: "Reference number · size · compatible model",
    shape: "screen",
    image: "/assets/store/dryer-lint.jpg",
    subcategories: ["LG Replacements", "Samsung Replacements", "Whirlpool Replacements", "Kenmore Replacements"],
  },
  {
    code: "03",
    slug: "hepa-filters",
    title: "HEPA Filters",
    kicker: "Air & vacuum filtration",
    description: "HEPA, foam and filter-set replacements for air purifiers, robot vacuums and floor-care equipment.",
    matching: "Reference number · appliance model · filter type",
    shape: "panel",
    image: "/assets/store/hepa.jpg",
    subcategories: ["Air Purifier Filters", "TRUE HEPA", "Blueair / Coway / Winix References", "Honeywell / Holmes References"],
  },
  {
    code: "04",
    slug: "appliance-filter-replacements",
    title: "Appliance Filter Replacements",
    kicker: "Home appliance parts",
    description: "Replacement filters and accessory sets for household appliances, organized by compatible reference.",
    matching: "Appliance type · model · reference number",
    shape: "panel",
    image: "/assets/store/appliance-filter.jpg",
    subcategories: ["Vacuum Cleaner Parts", "Vorwerk References", "Miele References", "Bissell References", "Dyson References"],
  },
  {
    code: "05",
    slug: "vacuum-dust-bags",
    title: "Vacuum Dust Bags",
    kicker: "Non-woven consumables",
    description: "Non-woven replacement dust bags structured around collar style, material, pack count and reference.",
    matching: "Collar · material · pack count · reference",
    shape: "bag",
    image: "/assets/store/vacuum-dust-bag.jpg",
    subcategories: ["Non-woven Dust Bags", "Foldable Vacuum Bags", "FJM / GN-type Programs", "Custom Pack Sets"],
  },
  {
    code: "06",
    slug: "aquarium-filter-cartridges",
    title: "Aquarium Filter Cartridges",
    kicker: "Aquarium filtration",
    description: "A separate catalog area for aquarium replacement cartridges and compatible filter media sets.",
    matching: "Filter model · cartridge size · media format",
    shape: "cartridge",
    subcategories: ["Aquarium Cartridges", "Replacement Media", "Custom Sets"],
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
