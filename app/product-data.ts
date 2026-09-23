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

const dryerFilterDefaults = {
  categorySlug: "dryer-lint-filters",
  subcategorySlug: "dryer-lint-screens",
  readyStock: false,
  productType: "Dryer lint filter screen",
  material: "Molded frame with fine mesh screen",
} as const;

const dryerFilterProducts: ProductRecord[] = [
  {
    ...dryerFilterDefaults,
    slug: "lg-5231el1001c-dryer-lint-filter",
    name: "5231EL1001C Dryer Lint Filter Compatible with LG & Kenmore",
    reference: "5231EL1001C",
    description: "Replacement dryer lint filter compatible with listed LG and Kenmore 796-series dryers, organized around the 5231EL1001C reference and its earlier A and B revisions.",
    primaryImage: "/assets/jc/dryer-filters/lg-5231el1001c-01.jpg",
    imageAlt: "5231EL1001C replacement dryer lint filter compatible with LG and Kenmore dryers",
    gallery: [
      "/assets/jc/dryer-filters/lg-5231el1001c-02.png",
      "/assets/jc/dryer-filters/lg-5231el1001c-03.png",
      "/assets/jc/dryer-filters/lg-5231el1001c-04.png",
    ],
    compatibleBrands: ["LG", "Kenmore 796 series"],
    compatibleModels: [
      "DLE1101W", "DLE1501W", "DLE4970W", "DLE5001W", "DLE7000W", "DLE7100W",
      "DLE7200WE/VE", "DLE7300WE/VE", "DLE7400WE/VE", "DLEX5170W", "DLEX5680V/W",
      "DLEX7600WE", "DLG1102W", "DLG7101W", "DLG7301WE/VE", "Kenmore 796.71523210",
    ],
    replacementNumbers: ["5231EL1001A", "5231EL1001B", "5231EL1001C"],
    compatibilityNote: "Confirm the complete dryer model and compare the filter frame, handle and guide profile before ordering. The compatible-model list is representative rather than exhaustive.",
    seo: {
      title: "5231EL1001C Dryer Lint Filter Supplier | JC Filters",
      description: "5231EL1001C replacement dryer lint filters compatible with listed LG and Kenmore 796-series dryers. Request model matching, quantity and packaging confirmation.",
      keywords: ["5231EL1001C dryer lint filter", "5231EL1001A replacement", "5231EL1001B lint screen", "LG dryer filter supplier", "Kenmore dryer lint filter", "wholesale dryer lint filters"],
    },
  },
  {
    ...dryerFilterDefaults,
    slug: "lg-5231el1003b-dryer-lint-filter",
    name: "5231EL1003B Dryer Lint Filter Compatible with LG & Kenmore",
    reference: "5231EL1003B",
    description: "Replacement dryer lint filter compatible with listed LG and Kenmore dryers, with the curved frame and guide profile used by the 5231EL1003 family.",
    primaryImage: "/assets/jc/dryer-filters/lg-5231el1003b-01.jpg",
    imageAlt: "5231EL1003B curved replacement dryer lint filter compatible with LG and Kenmore",
    gallery: [
      "/assets/jc/dryer-filters/lg-5231el1003b-02.png",
      "/assets/jc/dryer-filters/lg-5231el1003b-03.png",
      "/assets/jc/dryer-filters/lg-5231el1003b-04.png",
    ],
    compatibleBrands: ["LG", "Kenmore"],
    compatibleModels: [
      "DLE2512W", "DLE2514W", "DLE2515S", "DLE3733S/W", "DLE3777W", "DLE5955G/W",
      "DLE5977B/S/SM/W", "DLE7177WM", "DLG3744D/S/U/W", "Kenmore 796.80021900",
      "Kenmore 796.81172210", "Kenmore 796.91172210",
    ],
    replacementNumbers: ["5231EL1002E", "5231EL1003A", "5231EL1003B", "5231EL1003C", "5231EL1003E", "1266857", "AP4440606"],
    compatibilityNote: "Several LG lint filters have a similar outline. Confirm the complete model number and the filter guide channel instead of matching by appearance alone.",
    seo: {
      title: "5231EL1003B Dryer Lint Filter Supplier | JC Filters",
      description: "5231EL1003B replacement dryer lint filters compatible with listed LG and Kenmore models. Compare the frame and guide profile before requesting a quotation.",
      keywords: ["5231EL1003B dryer lint filter", "5231EL1002E replacement", "LG dryer lint screen", "Kenmore dryer filter", "AP4440606", "dryer filter manufacturer"],
    },
  },
  {
    ...dryerFilterDefaults,
    slug: "lg-adq56656401-dryer-lint-filter",
    name: "ADQ56656401 Dryer Lint Filter Compatible with LG & Kenmore Elite",
    reference: "ADQ56656401",
    description: "Replacement lint screen compatible with listed LG and Kenmore Elite dryers using the ADQ56656401 filter and the corresponding guide version.",
    primaryImage: "/assets/jc/dryer-filters/lg-adq56656401-01.jpg",
    imageAlt: "ADQ56656401 replacement lint filter compatible with LG and Kenmore Elite dryers",
    gallery: [
      "/assets/jc/dryer-filters/lg-adq56656401-02.png",
      "/assets/jc/dryer-filters/lg-adq56656401-03.png",
      "/assets/jc/dryer-filters/lg-adq56656401-04.png",
    ],
    compatibleBrands: ["LG", "Kenmore Elite"],
    compatibleModels: [
      "DLE2601R/W", "DLE2701V", "DLE3050W", "DLE3075W", "DLE3170W", "DLE3180W",
      "DLE3500W", "DLEX2801L/R/W", "DLEX3001P/R/W", "DLEX3250R/V/W", "DLEX3370R/V/W",
      "DLEX3470V", "DLGX2802L", "DLGX3471V", "Kenmore 796.91182310",
    ],
    replacementNumbers: ["ADQ56656401", "ADQ56656403 (selected guide versions)"],
    compatibilityNote: "ADQ56656401 and ADQ56656403 are not universally interchangeable. Confirm the dryer model suffix and the installed filter guide or housing version.",
    seo: {
      title: "ADQ56656401 Dryer Lint Filter Supplier | JC Filters",
      description: "ADQ56656401 replacement dryer lint filters compatible with listed LG and Kenmore Elite dryers. Guide-version and model-suffix checks available before quotation.",
      keywords: ["ADQ56656401 dryer lint filter", "LG dryer lint filter", "Kenmore Elite lint screen", "DLE3500W filter", "DLEX3470V filter", "wholesale dryer filters"],
    },
  },
  {
    ...dryerFilterDefaults,
    slug: "lg-adq56656403-dryer-lint-filter",
    name: "ADQ56656403 Dryer Lint Filter Compatible with LG & WashTower",
    reference: "ADQ56656403",
    description: "Replacement dryer lint filter compatible with listed LG dryers and WashTower models using the ADQ56656403 filter-guide configuration.",
    primaryImage: "/assets/jc/dryer-filters/lg-adq56656403-01.jpg",
    imageAlt: "ADQ56656403 replacement dryer lint filter compatible with LG dryers and WashTower",
    gallery: [
      "/assets/jc/dryer-filters/lg-adq56656403-02.png",
      "/assets/jc/dryer-filters/lg-adq56656403-03.png",
      "/assets/jc/dryer-filters/lg-adq56656403-04.png",
    ],
    compatibleBrands: ["LG", "Kenmore selected models"],
    compatibleModels: [
      "DLE3050W", "DLE3075W", "DLE3090W", "DLE3170W", "DLE3180W", "DLE3400V/W",
      "DLE3450W", "DLE3470M/W", "DLE3500W", "DLE3600V/W", "DLEX3001P/R/W",
      "DLEX3250R/V/W", "DLEX3370R/V/W", "DLEX3470V", "WKE100HVA/HWA",
      "WKEX200HBA/HGA/HVA/HWA", "WKGX201HBA/HWA",
    ],
    replacementNumbers: ["ADQ56656403", "ADQ56656401 (selected guide versions)"],
    compatibilityNote: "Do not assume this filter fits every model listed for ADQ56656401. Confirm the complete appliance model and the filter-guide configuration before ordering.",
    seo: {
      title: "ADQ56656403 LG WashTower Dryer Filter Supplier | JC Filters",
      description: "ADQ56656403 replacement lint filters compatible with listed LG dryers and WashTower models. Request guide-version, quantity and packaging confirmation.",
      keywords: ["ADQ56656403 dryer lint filter", "LG WashTower filter", "WKE100HWA lint filter", "WKEX200HWA dryer filter", "LG dryer parts supplier", "dryer lint screen wholesale"],
    },
  },
  {
    ...dryerFilterDefaults,
    slug: "whirlpool-w10120998-dryer-lint-filter",
    name: "W10120998 Dryer Lint Filter Compatible with Whirlpool, Maytag & Kenmore",
    reference: "W10120998",
    description: "Replacement dryer lint screen compatible with listed Whirlpool, Maytag, Kenmore, Amana and related dryer families using the W10120998 reference.",
    primaryImage: "/assets/jc/dryer-filters/whirlpool-w10120998-01.jpg",
    imageAlt: "W10120998 replacement dryer lint filter compatible with Whirlpool Maytag and Kenmore",
    gallery: [
      "/assets/jc/dryer-filters/whirlpool-w10120998-02.png",
      "/assets/jc/dryer-filters/whirlpool-w10120998-03.png",
      "/assets/jc/dryer-filters/whirlpool-w10120998-04.png",
    ],
    compatibleBrands: ["Whirlpool", "Maytag", "Kenmore", "Amana", "Admiral", "Crosley", "KitchenAid"],
    compatibleModels: [
      "WED5100HC/HW", "WED6120HC/HW", "WED7120HC/HW", "WED7500GC/GW", "WGD6120HC/HW",
      "WGD7120HC/HW", "Kenmore 110.87892601", "Kenmore 110.78082701", "Kenmore 110.68002010",
      "Kenmore 110.97089601", "Kenmore 110.97761801",
    ],
    replacementNumbers: ["W10120998", "AP3967919", "PS1491676"],
    compatibilityNote: "Use W10120998 without the spacing found in some supplier files. Confirm the complete 110-series or WED/WGD model before ordering.",
    seo: {
      title: "W10120998 Dryer Lint Filter Supplier | JC Filters",
      description: "W10120998 replacement dryer lint filters compatible with listed Whirlpool, Maytag, Kenmore and Amana dryers. Request fit and wholesale quotation confirmation.",
      keywords: ["W10120998 dryer lint filter", "Whirlpool dryer filter", "Maytag lint screen", "Kenmore 110 dryer filter", "AP3967919", "PS1491676"],
    },
  },
  {
    ...dryerFilterDefaults,
    slug: "ge-we03x23881-dryer-lint-filter",
    name: "WE03X23881 Dryer Lint Filter Compatible with GE & Hotpoint",
    reference: "WE03X23881",
    description: "Replacement lint screen compatible with listed GE and Hotpoint dryers across selected GTD, GTX and HTX model families.",
    primaryImage: "/assets/jc/dryer-filters/ge-we03x23881-01.jpg",
    imageAlt: "WE03X23881 replacement dryer lint filter compatible with GE and Hotpoint",
    gallery: [
      "/assets/jc/dryer-filters/ge-we03x23881-02.png",
      "/assets/jc/dryer-filters/ge-we03x23881-03.png",
      "/assets/jc/dryer-filters/ge-we03x23881-04.png",
    ],
    compatibleBrands: ["GE", "Hotpoint"],
    compatibleModels: [
      "GTD33EASK0WW", "GTD42EASJ0/1/2WW", "GTD42GASJ0/1/2WW", "GTD45EASJ0/1/2WS",
      "GTD65EBSJ0/1/2/3/4WS", "GTX22EASK0WW", "GTX33EASK0WW", "HTX21EASK0WW",
      "HTX21GASK0WW", "HTX24EASK0WW/WS", "HTX24GASK0WW/WS",
    ],
    replacementNumbers: ["WE03X23881", "PS11763056"],
    compatibilityNote: "Confirm the complete GTD, GTX or HTX model number, including its revision digit and color suffix, before ordering.",
    seo: {
      title: "WE03X23881 GE Hotpoint Dryer Filter Supplier | JC Filters",
      description: "WE03X23881 replacement lint filters compatible with listed GE and Hotpoint GTD, GTX and HTX dryers. Request model matching and wholesale quotation.",
      keywords: ["WE03X23881 dryer lint filter", "GE dryer lint screen", "Hotpoint dryer filter", "GTD42EASJ2WW filter", "PS11763056", "dryer filter supplier"],
    },
  },
  {
    ...dryerFilterDefaults,
    slug: "samsung-dc97-16742a-dryer-lint-filter",
    name: "DC97-16742A Dryer Lint Filter with Flap Compatible with Samsung",
    reference: "DC97-16742A / DC61-03048A",
    description: "Replacement dryer lint filter assembly with flap compatible with listed Samsung dryer models and cross-referenced by the DC97-16742A and DC61-03048A numbers.",
    productType: "Dryer lint filter assembly with flap",
    primaryImage: "/assets/jc/dryer-filters/samsung-dc97-16742a-01.jpg",
    imageAlt: "DC97-16742A dryer lint filter assembly with flap compatible with Samsung dryers",
    gallery: [
      "/assets/jc/dryer-filters/samsung-dc97-16742a-02.png",
      "/assets/jc/dryer-filters/samsung-dc97-16742a-03.png",
      "/assets/jc/dryer-filters/samsung-dc97-16742a-04.png",
    ],
    compatibleBrands: ["Samsung"],
    compatibleModels: [
      "DV40J3000EW/GW", "DV45H7000EW/GW", "DV45H7200EW/GW", "DV45K7600EW/GW",
      "DV48H7400EP/EW/GP/GW", "DV48J7700EW/GW", "DV48J7770EP/EW/GP/GW",
      "DV50F9A7EVP/EVW/GVP/GVW", "DV400EWHDWR", "DV422EWHDWR/GWHDWR",
    ],
    replacementNumbers: ["DC97-16742A", "DC97-16742B", "DC61-03048A", "DC61-02610A", "AP5306681", "PS4221839"],
    compatibilityNote: "Confirm the full Samsung model suffix and revision, including /A2 or /A3 where applicable. Do not confuse this filter assembly with the separate DC61-02595A guide housing.",
    seo: {
      title: "DC97-16742A Samsung Dryer Lint Filter Supplier | JC Filters",
      description: "DC97-16742A dryer lint filter assemblies with flap compatible with listed Samsung dryers. Replaces DC61-03048A and selected cross references.",
      keywords: ["DC97-16742A dryer lint filter", "DC61-03048A lint screen", "Samsung dryer filter with flap", "AP5306681", "PS4221839", "dryer filter assembly supplier"],
    },
  },
  {
    ...dryerFilterDefaults,
    slug: "frigidaire-131359602-dryer-lint-filter",
    name: "131359602 Dryer Lint Filter Compatible with Frigidaire Laundry Centers",
    reference: "131359602 / 5304516871",
    description: "Replacement lint filter compatible with listed Frigidaire, Electrolux, Kenmore and related laundry-center or dryer models, including the later 5304516871 reference.",
    primaryImage: "/assets/jc/dryer-filters/frigidaire-131359602-01.jpg",
    imageAlt: "131359602 replacement dryer lint filter compatible with Frigidaire laundry centers",
    gallery: [
      "/assets/jc/dryer-filters/frigidaire-131359602-02.png",
      "/assets/jc/dryer-filters/frigidaire-131359602-03.png",
      "/assets/jc/dryer-filters/frigidaire-131359602-04.png",
    ],
    compatibleBrands: ["Frigidaire", "Electrolux", "Kenmore", "Sears", "GE", "Gibson", "Westinghouse", "Crosley", "Kelvinator", "Tappan"],
    compatibleModels: [
      "FEX831CS0/FS0", "GLET1031CS0/FS0", "GLET1041AS1/2", "FLEB8200DS0/FS0",
      "GLET1142CS0/FS0", "FLSE72GCSA/B/C", "GLEH1642DS0/FS0", "FFLE1011MW0/1/2",
      "FFLE2022MW0/1/2", "Kenmore 417.9870289", "Kenmore 417.9080299",
    ],
    replacementNumbers: ["131359600", "131359601", "131359602", "131359603", "5304516871", "WE18X53", "WE16X25594"],
    compatibilityNote: "This family carries several cross-brand references. Confirm the complete laundry-center or dryer model and compare the long frame and raised mesh profile before ordering.",
    seo: {
      title: "131359602 Frigidaire Dryer Lint Filter Supplier | JC Filters",
      description: "131359602 and 5304516871 replacement lint filters compatible with listed Frigidaire, Kenmore and related laundry centers. Request fit confirmation.",
      keywords: ["131359602 dryer lint filter", "5304516871 replacement filter", "Frigidaire laundry center filter", "Kenmore 417 lint filter", "WE18X53 lint screen", "dryer filter manufacturer"],
    },
  },
];

export const products: ProductRecord[] = [...dustBagProducts, ...dryerFilterProducts];

export function productsForCategory(categorySlug: string) {
  return products.filter((product) => product.categorySlug === categorySlug);
}

export function productsForSubcategory(categorySlug: string, subcategorySlug: string) {
  return products.filter((product) => product.categorySlug === categorySlug && product.subcategorySlug === subcategorySlug);
}

export function findProduct(categorySlug: string, productSlug: string) {
  return products.find((product) => product.categorySlug === categorySlug && product.slug === productSlug);
}
