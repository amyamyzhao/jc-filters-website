export type ProductRecord = {
  slug: string;
  categorySlug: string;
  subcategorySlug?: string;
  name: string;
  reference: string;
  description: string;
  productType: string;
  material: string;
  primaryImage?: string;
  imageAlt?: string;
  gallery?: string[];
  compatibleBrands: string[];
  compatibleModels: string[];
  replacementNumbers: string[];
  compatibilityNote: string;
  readyStock: boolean;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
};

const dustBagDefaults = {
  categorySlug: "vacuum-filters-and-dust-bags",
  subcategorySlug: "vacuum-dust-bags",
  readyStock: false,
} as const;

const dustBagImages = {
  gtechPro: {
    primaryImage: "/assets/jc/dust-bags/gtech-pro-01.png",
    imageAlt: "Green-collar replacement dust bag compatible with Gtech Pro vacuums",
    gallery: ["/assets/jc/dust-bags/gtech-pro-02.jpg", "/assets/jc/dust-bags/gtech-pro-03.jpg"],
  },
  fp140150: {
    primaryImage: "/assets/jc/dust-bags/fp140-150-01.jpg",
    imageAlt: "Green-collar FP140 replacement filter bag compatible with Vorwerk VK140 and VK150",
    gallery: ["/assets/jc/dust-bags/fp140-150-02.jpg", "/assets/jc/dust-bags/fp140-150-03.jpg"],
  },
  fp265300: {
    primaryImage: "/assets/jc/dust-bags/fp265-300-01.jpg",
    imageAlt: "Gray-collar FP265 replacement filter bag compatible with Vorwerk Tiger vacuums",
    gallery: ["/assets/jc/dust-bags/fp265-300-02.jpg", "/assets/jc/dust-bags/fp265-300-03.jpg"],
  },
  sBagFc8021: {
    primaryImage: "/assets/jc/dust-bags/sbag-fc8021-01.jpg",
    imageAlt: "s-bag FC8021 style replacement vacuum dust bag",
    gallery: ["/assets/jc/dust-bags/sbag-fc8021-02.jpg", "/assets/jc/dust-bags/sbag-fc8021-03.jpg"],
  },
  thomas787243: {
    primaryImage: "/assets/jc/dust-bags/thomas-787243-01.jpg",
    imageAlt: "Brown-card collar replacement dust bag compatible with Thomas vacuum cleaners",
    gallery: ["/assets/jc/dust-bags/thomas-787243-02.jpg", "/assets/jc/dust-bags/thomas-787243-03.jpg"],
  },
  fp135136: {
    primaryImage: "/assets/jc/dust-bags/fp135-136-01.jpg",
    imageAlt: "FP135-136 replacement filter bag compatible with Vorwerk VK135 and VK136",
    gallery: ["/assets/jc/dust-bags/fp135-136-02.jpg", "/assets/jc/dust-bags/fp135-136-03.jpg"],
  },
  rowentaZr200: {
    primaryImage: "/assets/jc/dust-bags/rowenta-zr200-01.jpg",
    imageAlt: "Blue-collar ZR200 hygiene replacement vacuum bag",
    gallery: ["/assets/jc/dust-bags/rowenta-zr200-02.jpg", "/assets/jc/dust-bags/rowenta-zr200-03.jpg"],
  },
  boschTypeG: {
    primaryImage: "/assets/jc/dust-bags/bosch-type-g-01.jpg",
    imageAlt: "Blue-collar Type G replacement vacuum bag compatible with Bosch GL30 and GL40",
    gallery: ["/assets/jc/dust-bags/bosch-type-g-02.jpg", "/assets/jc/dust-bags/bosch-type-g-03.jpg"],
  },
  kenmoreIb600: {
    primaryImage: "/assets/jc/dust-bags/kenmore-ib600-01.jpg",
    imageAlt: "Self-sealing IB600 replacement dust bag compatible with Kenmore Intuition vacuums",
    gallery: ["/assets/jc/dust-bags/kenmore-ib600-02.jpg", "/assets/jc/dust-bags/kenmore-ib600-03.jpg"],
  },
  karcherKfi487: {
    primaryImage: "/assets/jc/dust-bags/karcher-kfi487-01.jpg",
    imageAlt: "Black-collar KFI 487 fleece filter bag compatible with Karcher WD4, WD5 and WD6",
    gallery: ["/assets/jc/dust-bags/karcher-kfi487-02.jpg", "/assets/jc/dust-bags/karcher-kfi487-03.jpg"],
  },
  karcherKfi357: {
    primaryImage: "/assets/jc/dust-bags/karcher-kfi357-01.png",
    imageAlt: "Black-collar KFI 357 fleece filter bags compatible with Karcher WD2 and WD3",
    gallery: ["/assets/jc/dust-bags/karcher-kfi357-02.png", "/assets/jc/dust-bags/karcher-kfi357-03.png"],
  },
  fp200: {
    primaryImage: "/assets/jc/dust-bags/fp200-01.jpg",
    imageAlt: "Green-collar FP200 replacement filter bag compatible with Vorwerk VK200",
    gallery: ["/assets/jc/dust-bags/fp200-02.jpg", "/assets/jc/dust-bags/fp200-03.jpg"],
  },
  makitaVc4210: {
    primaryImage: "/assets/jc/dust-bags/makita-vc4210-01.jpg",
    imageAlt: "Black-collar fleece filter bag compatible with Makita VC4210 dust extractors",
    gallery: ["/assets/jc/dust-bags/makita-vc4210-02.jpg", "/assets/jc/dust-bags/makita-vc4210-03.jpg"],
  },
} as const;

const dustBagProducts: ProductRecord[] = [
  {
    ...dustBagDefaults,
    ...dustBagImages.gtechPro,
    slug: "gtech-pro-atf301-atf303-atf305-dust-bags",
    name: "Replacement Dust Bags Compatible with Gtech Pro ATF301, ATF303 & ATF305",
    reference: "Pro / Pro K9 replacement bag",
    description: "Three-layer non-woven replacement dust bags compatible with the Gtech Pro ATF301, Pro K9 ATF303 and Pro ATF305 cordless vacuum families.",
    productType: "Cordless upright vacuum dust collection bag",
    material: "3-layer non-woven",
    compatibleBrands: ["Gtech"],
    compatibleModels: ["Pro ATF301", "Pro K9 ATF303", "Pro ATF305"],
    replacementNumbers: ["Pro / Pro K9 replacement bag"],
    compatibilityNote: "Confirm the bag collar against the current bag before ordering.",
    seo: {
      title: "Dust Bags Compatible with Gtech ATF301 ATF303 ATF305 | JC Filters",
      description: "Replacement dust bags compatible with Gtech Pro ATF301, Pro K9 ATF303 and Pro ATF305 cordless vacuums. Request fit, quantity and packaging confirmation.",
      keywords: ["Gtech Pro dust bags", "ATF301 dust bags", "ATF303 dust bags", "ATF305 dust bags", "cordless vacuum bags", "non-woven filter bags"],
    },
  },
  {
    ...dustBagDefaults,
    ...dustBagImages.fp140150,
    slug: "vorwerk-kobold-fp140-150-dust-bags",
    name: "FP140/150 Filter Bags Compatible with Vorwerk Kobold VK140 & VK150",
    reference: "FP140/150",
    description: "Non-woven replacement filter bags compatible with Vorwerk Kobold VK140 and VK150 upright vacuum cleaners, with a verified five-layer material option.",
    productType: "Upright vacuum filter bag",
    material: "Non-woven; 5-layer non-woven option",
    compatibleBrands: ["Vorwerk Kobold"],
    compatibleModels: ["VK140", "VK150"],
    replacementNumbers: ["FP140/150", "FP140", "FP150"],
    compatibilityNote: "FP140 and FP150 are bag references, not vacuum model numbers.",
    seo: {
      title: "FP140 FP150 Bags Compatible with Vorwerk VK140 VK150 | JC Filters",
      description: "Replacement FP140/150 filter bags compatible with Vorwerk Kobold VK140 and VK150 vacuums, including a verified five-layer non-woven option.",
      keywords: ["FP140 filter bags", "FP150 filter bags", "Vorwerk VK140 bags", "Vorwerk VK150 bags", "upright vacuum bags", "five layer filter bags"],
    },
  },
  {
    ...dustBagDefaults,
    ...dustBagImages.fp265300,
    slug: "vorwerk-tiger-fp265-300-dust-bags",
    name: "FP265-300 Filter Bags Compatible with Vorwerk Tiger VT265, VT270 & VT300",
    reference: "FP265/FP270 · FP265-300",
    description: "Non-woven replacement filter bags compatible with Vorwerk Tiger VT265, VT270 and VT300 canister vacuum cleaners.",
    productType: "Canister vacuum filter bag",
    material: "Non-woven",
    compatibleBrands: ["Vorwerk Tiger"],
    compatibleModels: ["VT265", "VT270", "VT300"],
    replacementNumbers: ["FP265/FP270", "FP265-300"],
    compatibilityNote: "Regional bag naming can vary; confirm the current bag reference before ordering.",
    seo: {
      title: "FP265 Bags Compatible with Vorwerk VT265 VT270 VT300 | JC Filters",
      description: "Replacement FP265-300 filter bags compatible with Vorwerk Tiger VT265, VT270 and VT300 canister vacuums. Request a fit and quotation check.",
      keywords: ["FP265 filter bags", "FP270 filter bags", "FP300 filter bags", "VT265 vacuum bags", "VT270 vacuum bags", "VT300 vacuum bags"],
    },
  },
  {
    ...dustBagDefaults,
    ...dustBagImages.sBagFc8021,
    slug: "s-bag-fc8021-vacuum-dust-bags",
    name: "s-bag FC8021 Replacement Vacuum Dust Bags",
    reference: "FC8021/03R1 · s-bag",
    description: "Four-layer non-woven replacement s-bags compatible with listed bagged vacuum models from Philips, Electrolux, AEG, Volta and Tornado.",
    productType: "Standard canister vacuum bag",
    material: "4-layer non-woven",
    compatibleBrands: ["Philips", "Electrolux", "AEG", "Volta", "Tornado"],
    compatibleModels: ["FC8202", "FC8204", "FC8206", "FC8208", "FC8312", "FC8382-FC8390", "EL200F", "EL202F", "EL4050", "EL4100", "EL4200", "EL5010", "EL5035", "EL6985", "EL6989", "EL7000", "EL7020", "EL8500"],
    replacementNumbers: ["FC8021/03R1", "s-bag"],
    compatibilityNote: "Confirm that the exact appliance model is a bagged variant before ordering.",
    seo: {
      title: "s-bag FC8021 Bags Compatible with Philips Electrolux | JC Filters",
      description: "Four-layer s-bag replacement vacuum bags compatible with listed Philips, Electrolux, AEG, Volta and Tornado bagged vacuum models.",
      keywords: ["s-bag replacement", "FC8021 vacuum bags", "Philips vacuum bags", "Electrolux vacuum bags", "AEG vacuum bags", "canister vacuum bags"],
    },
  },
  {
    ...dustBagDefaults,
    ...dustBagImages.thomas787243,
    slug: "thomas-787243-dust-bag-set-99",
    name: "787243 Dust Bag Set 99 Compatible with Thomas Vacuum Cleaners",
    reference: "787243 · Dust Bag Set 99",
    description: "Multi-layer dual-meltblown non-woven dry pickup bags compatible with the listed Thomas AQUA+, Perfect Air, Multi Clean, Cycloon Hybrid and DryBox families.",
    productType: "Dry pickup bag for wet and dry vacuum cleaners",
    material: "Multi-layer dual-meltblown non-woven",
    compatibleBrands: ["Thomas"],
    compatibleModels: ["AQUA+ Pet & Family", "Allergy & Family", "Multi Clean X7/X10", "Perfect Air", "Cycloon Hybrid", "DryBox Amfibia"],
    replacementNumbers: ["787243", "Dust Bag Set 99"],
    compatibilityNote: "Use this bag for dry pickup with the listed compatible vacuum families.",
    seo: {
      title: "787243 Dust Bags Compatible with Thomas Vacuums | JC Filters",
      description: "Replacement Dust Bag Set 99 compatible with listed Thomas AQUA+, Perfect Air, Multi Clean, Cycloon Hybrid and DryBox vacuum families.",
      keywords: ["Thomas 787243 bags", "Dust Bag Set 99", "Thomas AQUA Plus bags", "Thomas vacuum bags", "dry pickup bags", "non-woven vacuum bags"],
    },
  },
  {
    ...dustBagDefaults,
    ...dustBagImages.fp135136,
    slug: "vorwerk-kobold-fp135-136-dust-bags",
    name: "FP135-136 Filter Bags Compatible with Vorwerk Kobold VK135 & VK136",
    reference: "KS / FP135-136",
    description: "Non-woven replacement filter bags compatible with Vorwerk Kobold VK135 and VK136 upright vacuum cleaners.",
    productType: "Upright vacuum filter bag",
    material: "Non-woven",
    compatibleBrands: ["Vorwerk Kobold"],
    compatibleModels: ["VK135", "VK136"],
    replacementNumbers: ["KS", "FP135-136"],
    compatibilityNote: "The 135SC reference is not included on this page because it requires nameplate confirmation.",
    seo: {
      title: "FP135-136 Bags Compatible with Vorwerk VK135 VK136 | JC Filters",
      description: "Replacement KS and FP135-136 filter bags compatible with Vorwerk Kobold VK135 and VK136 upright vacuum cleaners.",
      keywords: ["FP135 filter bags", "FP136 filter bags", "Vorwerk VK135 bags", "Vorwerk VK136 bags", "Kobold vacuum bags", "upright vacuum bags"],
    },
  },
  {
    ...dustBagDefaults,
    ...dustBagImages.rowentaZr200,
    slug: "rowenta-zr200-vacuum-dust-bags",
    name: "ZR200 Hygiene Bags Compatible with Rowenta, Tefal & Moulinex Vacuums",
    reference: "ZR200520 · ZR200540 · ZR200720",
    description: "Five-layer non-woven replacement hygiene bags compatible with listed Rowenta, Tefal and Moulinex canister vacuum families.",
    productType: "High-filtration canister vacuum dust bag",
    material: "5-layer non-woven",
    compatibleBrands: ["Rowenta", "Tefal", "Moulinex"],
    compatibleModels: ["Compact Power", "Silence Force", "X-Trem Power", "RO39xx series", "RO63xx series", "RO64xx series", "RO68xx series"],
    replacementNumbers: ["ZR200520", "ZR200540", "ZR200720"],
    compatibilityNote: "Confirm the complete RO model suffix and current bag reference before ordering.",
    seo: {
      title: "ZR200 Bags Compatible with Rowenta Tefal Moulinex | JC Filters",
      description: "Five-layer replacement hygiene bags compatible with listed Rowenta, Tefal and Moulinex vacuums. Replaces ZR200520, ZR200540 and ZR200720.",
      keywords: ["ZR200520 vacuum bags", "ZR200540 vacuum bags", "ZR200720 vacuum bags", "Rowenta Silence Force bags", "Rowenta Compact Power bags", "canister filter bags"],
    },
  },
  {
    ...dustBagDefaults,
    ...dustBagImages.boschTypeG,
    slug: "bosch-type-g-bbz41fgall-dust-bags",
    name: "Type G Replacement Vacuum Bags Compatible with Bosch GL30 & GL40",
    reference: "BBZ41FGALL · 17003048",
    description: "Non-woven Type G replacement dust bags compatible with Bosch GL30 and GL40 bagged vacuum families.",
    productType: "Type G canister vacuum dust bag",
    material: "Non-woven",
    compatibleBrands: ["Bosch"],
    compatibleModels: ["Type G bagged vacuum cleaners", "GL30 series", "GL40 series"],
    replacementNumbers: ["BBZ41FGALL", "17003048"],
    compatibilityNote: "Confirm the complete Bosch E-Nr. before ordering.",
    seo: {
      title: "Type G Bags Compatible with Bosch GL30 GL40 | JC Filters",
      description: "Type G replacement vacuum bags compatible with Bosch GL30 and GL40 bagged vacuum families. Replaces BBZ41FGALL and 17003048.",
      keywords: ["Bosch Type G vacuum bags", "BBZ41FGALL bags", "17003048 vacuum bags", "Bosch GL30 bags", "Bosch GL40 bags", "canister vacuum bags"],
    },
  },
  {
    ...dustBagDefaults,
    ...dustBagImages.kenmoreIb600,
    slug: "kenmore-ib600-intuition-dust-bags",
    name: "IB600 Replacement Vacuum Bags Compatible with Kenmore Intuition",
    reference: "IB600",
    description: "Five-layer non-woven self-sealing replacement dust bags compatible with the listed Kenmore Intuition upright vacuum models.",
    productType: "Self-sealing upright vacuum dust bag",
    material: "5-layer non-woven",
    compatibleBrands: ["Kenmore"],
    compatibleModels: ["BU3040", "BU4018", "BU4019", "BU4020", "BU4021", "BU4022", "BU4023", "BU4050"],
    replacementNumbers: ["IB600"],
    compatibilityNote: "For the listed Kenmore Intuition No Touch bagged upright models.",
    seo: {
      title: "IB600 Bags Compatible with Kenmore Intuition | JC Filters",
      description: "Five-layer self-sealing IB600 replacement bags compatible with listed Kenmore Intuition BU3040, BU4018-BU4023 and BU4050 vacuums.",
      keywords: ["IB600 replacement bags", "Kenmore Intuition bags", "BU4022 vacuum bags", "BU4050 vacuum bags", "self sealing dust bags", "upright vacuum bags"],
    },
  },
  {
    ...dustBagDefaults,
    ...dustBagImages.karcherKfi487,
    slug: "karcher-kfi-487-fleece-filter-bags",
    name: "KFI 487 Fleece Filter Bags Compatible with Karcher WD4, WD5 & WD6",
    reference: "KFI 487 · 2.863-006.0",
    description: "Non-woven fleece replacement filter bags compatible with Karcher WD4, WD5, WD5 P and WD6 wet and dry vacuum cleaners.",
    productType: "Fleece filter bag for wet and dry vacuum cleaners",
    material: "Non-woven",
    compatibleBrands: ["Karcher"],
    compatibleModels: ["WD4", "WD5", "WD5 P", "WD6"],
    replacementNumbers: ["KFI 487", "2.863-006.0"],
    compatibilityNote: "Regional KWD and KNT extensions are not listed here because their collar fit requires a separate check.",
    seo: {
      title: "KFI 487 Bags Compatible with Karcher WD4 WD5 WD6 | JC Filters",
      description: "KFI 487 fleece filter bags compatible with Karcher WD4, WD5, WD5 P and WD6 wet and dry vacuums. Replaces 2.863-006.0.",
      keywords: ["KFI 487 filter bags", "2.863-006.0 bags", "Karcher WD4 bags", "Karcher WD5 bags", "Karcher WD6 bags", "wet dry vacuum bags"],
    },
  },
  {
    ...dustBagDefaults,
    ...dustBagImages.karcherKfi357,
    slug: "karcher-kfi-357-fleece-filter-bags",
    name: "KFI 357 Fleece Filter Bags Compatible with Karcher WD2 & WD3",
    reference: "KFI 357 · 2.863-314.0",
    description: "Non-woven fleece replacement filter bags compatible with the listed Karcher WD, KWD, MV and SE wet and dry vacuum models.",
    productType: "Fleece filter bag for wet and dry vacuum cleaners",
    material: "Non-woven",
    compatibleBrands: ["Karcher"],
    compatibleModels: ["WD1 Classic", "WD2", "WD2 Plus", "WD3", "WD3 Battery", "KWD1", "KWD2", "KWD3", "MV2", "MV3", "SE4", "SE4001", "SE4002"],
    replacementNumbers: ["KFI 357", "2.863-314.0"],
    compatibilityNote: "The KA40 reference is not included because it was not confirmed in the checked source.",
    seo: {
      title: "KFI 357 Bags Compatible with Karcher WD2 WD3 | JC Filters",
      description: "KFI 357 fleece filter bags compatible with listed Karcher WD, KWD, MV and SE wet and dry vacuums. Replaces 2.863-314.0.",
      keywords: ["KFI 357 filter bags", "2.863-314.0 bags", "Karcher WD2 bags", "Karcher WD3 bags", "Karcher KWD bags", "wet dry vacuum bags"],
    },
  },
  {
    ...dustBagDefaults,
    ...dustBagImages.fp200,
    slug: "vorwerk-kobold-fp200-dust-bags",
    name: "FP200 Filter Bags Compatible with Vorwerk Kobold VK200",
    reference: "FP200",
    description: "Non-woven FP200 3-in-1 replacement filter bags compatible with the Vorwerk Kobold VK200 upright vacuum cleaner.",
    productType: "Upright vacuum filter bag",
    material: "Non-woven",
    compatibleBrands: ["Vorwerk Kobold"],
    compatibleModels: ["VK200"],
    replacementNumbers: ["FP200"],
    compatibilityNote: "For the Vorwerk Kobold VK200 vacuum family using the FP200 bag reference.",
    seo: {
      title: "FP200 Bags Compatible with Vorwerk Kobold VK200 | JC Filters",
      description: "Non-woven FP200 3-in-1 replacement filter bags compatible with the Vorwerk Kobold VK200 upright vacuum cleaner.",
      keywords: ["FP200 filter bags", "Vorwerk VK200 bags", "Kobold VK200 vacuum bags", "3in1 premium filter bag", "upright vacuum bags", "non-woven bags"],
    },
  },
  {
    ...dustBagDefaults,
    ...dustBagImages.makitaVc4210,
    slug: "makita-w107418353-vc4210-dust-bags",
    name: "W107418353 Fleece Filter Bags Compatible with Makita VC4210",
    reference: "W107418353",
    description: "Non-woven fleece replacement filter bags compatible with Makita VC4210, VC4210L and VC4210M dust extractors.",
    productType: "Industrial dust extractor fleece filter bag",
    material: "Non-woven",
    compatibleBrands: ["Makita"],
    compatibleModels: ["VC4210", "VC4210L", "VC4210M"],
    replacementNumbers: ["W107418353"],
    compatibilityNote: "Use for dry debris collection with the listed dust extractor models.",
    seo: {
      title: "W107418353 Bags Compatible with Makita VC4210 | JC Filters",
      description: "W107418353 fleece filter bags compatible with Makita VC4210, VC4210L and VC4210M dust extractors for dry debris collection.",
      keywords: ["W107418353 filter bags", "Makita VC4210 bags", "VC4210L filter bags", "VC4210M filter bags", "dust extractor bags", "fleece filter bags"],
    },
  },
];

export const products: ProductRecord[] = [...dustBagProducts];

export function productsForCategory(categorySlug: string) {
  return products.filter((product) => product.categorySlug === categorySlug);
}

export function productsForSubcategory(categorySlug: string, subcategorySlug: string) {
  return products.filter((product) => product.categorySlug === categorySlug && product.subcategorySlug === subcategorySlug);
}

export function findProduct(categorySlug: string, productSlug: string) {
  return products.find((product) => product.categorySlug === categorySlug && product.slug === productSlug);
}
