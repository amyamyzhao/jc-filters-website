export type ProductRecord = {
  slug: string;
  categorySlug: string;
  subcategorySlug?: string;
  name: string;
  sku: string;
  description: string;
  primaryImage: string;
  gallery: string[];
  compatibleBrands: string[];
  compatibleModels: string[];
  replacementNumbers: string[];
  dimensions: Array<{ label: string; value: string }>;
  packOptions: string[];
  readyStock: boolean;
};

export const products: ProductRecord[] = [];

export function productsForCategory(categorySlug: string) {
  return products.filter((product) => product.categorySlug === categorySlug);
}

export function productsForSubcategory(categorySlug: string, subcategorySlug: string) {
  return products.filter((product) => product.categorySlug === categorySlug && product.subcategorySlug === subcategorySlug);
}

export function findProduct(categorySlug: string, productSlug: string) {
  return products.find((product) => product.categorySlug === categorySlug && product.slug === productSlug);
}
