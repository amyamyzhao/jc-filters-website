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
};

export const categories: Category[] = [
  {
    code: "01",
    slug: "pool-filter-cartridges",
    title: "Pool Filter Cartridges",
    kicker: "Pool & spa filtration",
    description: "A dedicated replacement-cartridge catalog built around cross-reference, dimensions and buyer part lists.",
    matching: "Part number · dimensions · cross reference",
    shape: "cartridge",
  },
  {
    code: "02",
    slug: "dryer-lint-filters",
    title: "Dryer Lint Filters",
    kicker: "Dryer replacement parts",
    description: "Lint-screen programs organized for clear compatibility checks, multipacks and marketplace replenishment.",
    matching: "Reference number · size · compatible model",
    shape: "screen",
  },
  {
    code: "03",
    slug: "vacuum-filters",
    title: "Vacuum Filters",
    kicker: "Floor-care filtration",
    description: "HEPA, foam and filter-set catalog space designed for easy visual comparison and part matching.",
    matching: "Reference number · filter type · dimensions",
    shape: "panel",
  },
  {
    code: "04",
    slug: "vacuum-dust-bags",
    title: "Vacuum Dust Bags",
    kicker: "Floor-care consumables",
    description: "Dust-bag programs structured around collar style, material, pack count and compatible references.",
    matching: "Collar · material · pack count · reference",
    shape: "bag",
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
