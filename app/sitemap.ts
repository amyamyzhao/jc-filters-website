import type { MetadataRoute } from "next";
import { products } from "./product-data";
import { categories, menuSubcategories, services, siteUrl, slugifySubcategory } from "./site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/products", "/about", "/contact", "/blog", "/blog/how-to-choose-replacement-vacuum-dust-bags"];
  return [
    ...staticRoutes.map((path) => ({ url: `${siteUrl}${path}`, changeFrequency: path === "" ? "weekly" as const : "monthly" as const, priority: path === "" ? 1 : .8 })),
    ...categories.map((category) => ({ url: `${siteUrl}/products/${category.slug}`, changeFrequency: "weekly" as const, priority: .85 })),
    ...categories.flatMap((category) => menuSubcategories(category).map((subcategory) => ({ url: `${siteUrl}/products/${category.slug}/${slugifySubcategory(subcategory)}`, changeFrequency: "weekly" as const, priority: .8 }))),
    ...products.map((product) => ({ url: `${siteUrl}/products/${product.categorySlug}/${product.slug}`, changeFrequency: "monthly" as const, priority: .75 })),
    ...services.map((service) => ({ url: `${siteUrl}/services/${service.slug}`, changeFrequency: "monthly" as const, priority: .65 })),
  ];
}
