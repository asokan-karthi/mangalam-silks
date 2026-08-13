// Central data source for the whole site.
// Every navbar item, dropdown, and individual subtopic page is generated from this file.
// To ADD or EDIT a subtopic: just edit the arrays below. No other file needs to change
// for the subtopic to get its own page, route, and nav entry.

export const IMAGES = [
  "/media/product-01.jpg",
  "/media/product-02.jpg",
  "/media/product-03.jpg",
  "/media/product-04.jpg",
  "/media/product-05.jpg",
  "/media/product-06.jpg",
  "/media/product-07.jpg",
  "/media/product-08.jpg",
  "/media/product-09.jpg",
  "/media/product-10.jpg",
  "/media/product-11.jpg",
];

// Deterministic "repeat the uploaded photos" picker
export function imageFor(seedString) {
  let hash = 0;
  for (let i = 0; i < seedString.length; i++) {
    hash = (hash * 31 + seedString.charCodeAt(i)) >>> 0;
  }
  return IMAGES[hash % IMAGES.length];
}

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

// groups: [{ groupName, items: [subtopic names] }]
export const CATEGORIES = [
  {
    key: "women",
    label: "Women",
    slug: "women",
    groups: [
      { groupName: "Sarees", items: ["Kanchipuram Silk","Soft Silk","Banarasi","Cotton","Linen","Organza","Chiffon","Georgette","Tissue Silk","Mysore Silk","Tussar Silk","Designer Sarees","Party Wear Sarees","Bridal Sarees","Printed Sarees"] },
      { groupName: "Salwar", items: ["Churidar","Anarkali","Straight Cut","Palazzo","Patiala","Sharara","Gharara","Pakistani Suits","Readymade Sets"] },
      { groupName: "Kurtis", items: ["Cotton Kurtis","Rayon Kurtis","A-Line","Straight","Printed","Embroidered","Office Wear","Party Wear","Ethnic Wear"] },
      { groupName: "Ethnic Wear", items: ["Lehenga","Half Saree","Gowns","Dupatta Sets"] },
      { groupName: "Western Wear", items: ["Tops","Jeans","T-Shirts","Shirts","Dresses","Skirts","Co-ord Sets","Jackets"] },
    ],
  },
  {
    key: "men",
    label: "Men",
    slug: "men",
    groups: [
      { groupName: "Shirts", items: ["Formal Shirts","Casual Shirts","Linen Shirts","Cotton Shirts"] },
      { groupName: "T-Shirts", items: ["Polo","Round Neck","V-Neck","Printed"] },
      { groupName: "Bottom Wear", items: ["Jeans","Trousers","Chinos","Track Pants"] },
      { groupName: "Ethnic", items: ["Kurta","Kurta Pajama","Sherwani","Dhoti","Veshti"] },
      { groupName: "Winter Wear", items: ["Hoodies","Sweatshirts","Jackets"] },
    ],
  },
  {
    key: "kids",
    label: "Kids",
    slug: "kids",
    groups: [
      { groupName: "Girls", items: ["Frocks","Gowns","Choridar","Lehenga","Skirts","Tops"] },
      { groupName: "Boys", items: ["Shirts","T-Shirts","Jeans","Shorts","Ethnic Wear","Party Wear"] },
      { groupName: "Baby Wear", items: ["Rompers","Newborn Sets","Baby Frocks","Baby Shirts"] },
    ],
  },
  {
    key: "accessories",
    label: "Accessories",
    slug: "accessories",
    groups: [
      { groupName: "Accessories", items: ["Handbags","Dupattas","Shawls","Stoles","Belts"] },
    ],
  },
  {
    key: "bridal",
    label: "Bridal",
    slug: "bridal",
    groups: [
      { groupName: "Bride", items: ["Bridal Kanchipuram Sarees","Reception Sarees","Designer Sarees","Lehenga","Bridal Accessories"] },
      { groupName: "Groom", items: ["Sherwani","Kurta Set","Silk Dhoti","Blazer","Suit"] },
      { groupName: "Family Collection", items: ["Bridesmaid Sarees","Matching Couple Dress","Kids Wedding Collection"] },
    ],
  },
  {
    key: "new-arrivals",
    label: "New Arrivals",
    slug: "new-arrivals",
    groups: [
      { groupName: "New Arrivals", items: ["Latest Silk Sarees","Trending Kurtis","New Men's Fashion","Kids New Collection","Festival Collection","Seasonal Collection"] },
    ],
  },
  {
    key: "offers",
    label: "Offers",
    slug: "offers",
    groups: [
      { groupName: "Offers", items: ["Today's Deals","Festival Offers","Clearance Sale","Buy 1 Get 1","Combo Packs","Flat Discounts","Coupon Codes","Gift Cards"] },
    ],
  },
];

// Flat list of every subtopic with computed routing info — used for routes, search & sitemap.
export const ALL_SUBTOPICS = CATEGORIES.flatMap((cat) =>
  cat.groups.flatMap((g) =>
    g.items.map((item) => {
      const slug = slugify(item);
      return {
        category: cat.label,
        categorySlug: cat.slug,
        group: g.groupName,
        name: item,
        slug,
        path: `/${cat.slug}/${slugify(g.groupName)}/${slug}`,
      };
    })
  )
);

export function findSubtopic(categorySlug, groupSlug, itemSlug) {
  return ALL_SUBTOPICS.find(
    (s) =>
      s.categorySlug === categorySlug &&
      slugify(s.group) === groupSlug &&
      s.slug === itemSlug
  );
}

export { slugify };
