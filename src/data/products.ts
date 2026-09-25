export interface Product {
  id: string; // The SEO slug, e.g. "canned-mango"
  name: string;
  categoryId: string;
  images: string[]; // e.g. "/images/products/canned-mango.png"
}

export interface Category {
  id: string; // The SEO slug, e.g. "canned-fruits"
  name: string;
  description?: string;
}

export const categories: Category[] = [
  { id: "canned-fruits", name: "Canned Fruits" },
  { id: "canned-vegetables", name: "Canned Vegetables" },
  { id: "dried-fruits", name: "Dried Fruits" },
  { id: "frozen-fruits", name: "Frozen Fruits" },
  { id: "fruit-juice-concentrates", name: "Fruit Juice / Concentrates" },
  { id: "fresh-fruits", name: "Fresh Fruits" },
  { id: "canned-fish", name: "Canned Fish" },
];

export const products: Product[] = [
  // 1. Canned Fruits
  { id: "canned-pineapple", name: "Canned Pineapple in Syrup", categoryId: "canned-fruits", images: ["/images/products/canned-pineapple/canned-pineapple-1.png", "/images/products/canned-pineapple/canned-pineapple-2.png", "/images/products/canned-pineapple/canned-pineapple-3.png", "/images/products/canned-pineapple/canned-pineapple-4.png"] },
  { id: "canned-mango", name: "Canned Mango in Syrup", categoryId: "canned-fruits", images: ["/images/products/canned-mango/canned-mango-1.png", "/images/products/canned-mango/canned-mango-2.png", "/images/products/canned-mango/canned-mango-3.png", "/images/products/canned-mango/canned-mango-4.png"] },
  { id: "canned-lychee", name: "Canned Lychee in Syrup", categoryId: "canned-fruits", images: ["/images/products/canned-lychee/canned-lychee-1.png", "/images/products/canned-lychee/canned-lychee-2.png", "/images/products/canned-lychee/canned-lychee-3.png", "/images/products/canned-lychee/canned-lychee-4.png"] },
  { id: "canned-longan", name: "Canned Longan in Syrup", categoryId: "canned-fruits", images: ["/images/products/canned-longan/canned-longan-1.png", "/images/products/canned-longan/canned-longan-2.png", "/images/products/canned-longan/canned-longan-3.png", "/images/products/canned-longan/canned-longan-4.png"] },

  // 2. Canned Vegetables
  { id: "canned-mushroom", name: "Canned Mushroom", categoryId: "canned-vegetables", images: ["/images/products/canned-mushroom/canned-mushroom-1.png", "/images/products/canned-mushroom/canned-mushroom-2.png", "/images/products/canned-mushroom/canned-mushroom-3.png", "/images/products/canned-mushroom/canned-mushroom-4.png"] },
  { id: "canned-cucumber", name: "Canned Cucumber", categoryId: "canned-vegetables", images: ["/images/products/canned-cucumber/canned-cucumber-1.png", "/images/products/canned-cucumber/canned-cucumber-2.png", "/images/products/canned-cucumber/canned-cucumber-3.png", "/images/products/canned-cucumber/canned-cucumber-4.png"] },
  { id: "canned-sweet-corns", name: "Canned Sweet Corns", categoryId: "canned-vegetables", images: ["/images/products/canned-sweet-corns/canned-sweet-corns-1.png", "/images/products/canned-sweet-corns/canned-sweet-corns-2.png", "/images/products/canned-sweet-corns/canned-sweet-corns-3.png", "/images/products/canned-sweet-corns/canned-sweet-corns-4.png"] },

  // 3. Dried Fruits
  { id: "dried-mango", name: "Dried Mango (Keaw / Cat Chu)", categoryId: "dried-fruits", images: ["/images/products/dried-mango/dried-mango-1.png", "/images/products/dried-mango/dried-mango-2.png", "/images/products/dried-mango/dried-mango-3.png", "/images/products/dried-mango/dried-mango-4.png"] },

  // 4. Frozen Fruits
  { id: "frozen-mango", name: "Frozen Mango", categoryId: "frozen-fruits", images: ["/images/products/frozen-mango/frozen-mango-1.png", "/images/products/frozen-mango/frozen-mango-2.png", "/images/products/frozen-mango/frozen-mango-3.png", "/images/products/frozen-mango/frozen-mango-4.png"] },
  { id: "frozen-pineapple", name: "Frozen Pineapple", categoryId: "frozen-fruits", images: ["/images/products/frozen-pineapple/frozen-pineapple-1.png", "/images/products/frozen-pineapple/frozen-pineapple-2.png", "/images/products/frozen-pineapple/frozen-pineapple-3.png", "/images/products/frozen-pineapple/frozen-pineapple-4.png"] },
  { id: "frozen-lychee", name: "Frozen Lychee", categoryId: "frozen-fruits", images: ["/images/products/frozen-lychee/frozen-lychee-1.png", "/images/products/frozen-lychee/frozen-lychee-2.png", "/images/products/frozen-lychee/frozen-lychee-3.png", "/images/products/frozen-lychee/frozen-lychee-4.png"] },
  { id: "frozen-dragon-fruits", name: "Frozen Dragon Fruits", categoryId: "frozen-fruits", images: ["/images/products/frozen-dragon-fruits/frozen-dragon-fruits-1.png", "/images/products/frozen-dragon-fruits/frozen-dragon-fruits-2.png", "/images/products/frozen-dragon-fruits/frozen-dragon-fruits-3.png", "/images/products/frozen-dragon-fruits/frozen-dragon-fruits-4.png"] },
  { id: "frozen-passion-fruits-half", name: "Frozen Passion Fruits - Half", categoryId: "frozen-fruits", images: ["/images/products/frozen-passion-fruits-half/frozen-passion-fruits-half-1.png", "/images/products/frozen-passion-fruits-half/frozen-passion-fruits-half-2.png", "/images/products/frozen-passion-fruits-half/frozen-passion-fruits-half-3.png", "/images/products/frozen-passion-fruits-half/frozen-passion-fruits-half-4.png"] },
  { id: "frozen-passion-fruits", name: "Frozen Passion Fruits", categoryId: "frozen-fruits", images: ["/images/products/frozen-passion-fruits/frozen-passion-fruits-1.png", "/images/products/frozen-passion-fruits/frozen-passion-fruits-2.png", "/images/products/frozen-passion-fruits/frozen-passion-fruits-3.png", "/images/products/frozen-passion-fruits/frozen-passion-fruits-4.png"] },

  // 5. Fruit Juice / Concentrates
  { id: "mango-puree", name: "Mango Puree", categoryId: "fruit-juice-concentrates", images: ["/images/products/mango-puree/mango-puree-1.png", "/images/products/mango-puree/mango-puree-2.png", "/images/products/mango-puree/mango-puree-3.png", "/images/products/mango-puree/mango-puree-4.png"] },
  { id: "pineapple-puree", name: "Pineapple Puree", categoryId: "fruit-juice-concentrates", images: ["/images/products/pineapple-puree/pineapple-puree-1.png", "/images/products/pineapple-puree/pineapple-puree-2.png", "/images/products/pineapple-puree/pineapple-puree-3.png", "/images/products/pineapple-puree/pineapple-puree-4.png"] },
  { id: "passion-fruits-puree", name: "Passion Fruits Puree", categoryId: "fruit-juice-concentrates", images: ["/images/products/passion-fruits-puree/passion-fruits-puree-1.png", "/images/products/passion-fruits-puree/passion-fruits-puree-2.png", "/images/products/passion-fruits-puree/passion-fruits-puree-3.png", "/images/products/passion-fruits-puree/passion-fruits-puree-4.png"] },
  { id: "mango-juice", name: "Mango Juice", categoryId: "fruit-juice-concentrates", images: ["/images/products/mango-juice/mango-juice-1.png", "/images/products/mango-juice/mango-juice-2.png", "/images/products/mango-juice/mango-juice-3.png", "/images/products/mango-juice/mango-juice-4.png"] },
  { id: "pineapple-juice", name: "Pineapple Juice", categoryId: "fruit-juice-concentrates", images: ["/images/products/pineapple-juice/pineapple-juice-1.png", "/images/products/pineapple-juice/pineapple-juice-2.png", "/images/products/pineapple-juice/pineapple-juice-3.png", "/images/products/pineapple-juice/pineapple-juice-4.png"] },
  { id: "passion-fruits-juice", name: "Passion Fruits Juice", categoryId: "fruit-juice-concentrates", images: ["/images/products/passion-fruits-juice/passion-fruits-juice-1.png", "/images/products/passion-fruits-juice/passion-fruits-juice-2.png", "/images/products/passion-fruits-juice/passion-fruits-juice-3.png", "/images/products/passion-fruits-juice/passion-fruits-juice-4.png"] },
  { id: "mango-concentrates", name: "Mango Concentrates", categoryId: "fruit-juice-concentrates", images: ["/images/products/mango-concentrates/mango-concentrates-1.png", "/images/products/mango-concentrates/mango-concentrates-2.png", "/images/products/mango-concentrates/mango-concentrates-3.png", "/images/products/mango-concentrates/mango-concentrates-4.png"] },
  { id: "pineapple-concentrates", name: "Pineapple Concentrates", categoryId: "fruit-juice-concentrates", images: ["/images/products/pineapple-concentrates/pineapple-concentrates-1.png", "/images/products/pineapple-concentrates/pineapple-concentrates-2.png", "/images/products/pineapple-concentrates/pineapple-concentrates-3.png", "/images/products/pineapple-concentrates/pineapple-concentrates-4.png"] },
  { id: "passion-fruits-concentrates", name: "Passion Fruits Concentrates", categoryId: "fruit-juice-concentrates", images: ["/images/products/passion-fruits-concentrates/passion-fruits-concentrates-1.png", "/images/products/passion-fruits-concentrates/passion-fruits-concentrates-2.png", "/images/products/passion-fruits-concentrates/passion-fruits-concentrates-3.png", "/images/products/passion-fruits-concentrates/passion-fruits-concentrates-4.png"] },

  // 6. Fresh Fruits
  { id: "fresh-coconut", name: "Fresh Coconut", categoryId: "fresh-fruits", images: ["/images/products/fresh-coconut/fresh-coconut-1.png", "/images/products/fresh-coconut/fresh-coconut-2.png", "/images/products/fresh-coconut/fresh-coconut-3.png", "/images/products/fresh-coconut/fresh-coconut-4.png"] },
  { id: "fresh-mango", name: "Fresh Mango", categoryId: "fresh-fruits", images: ["/images/products/fresh-mango/fresh-mango-1.png", "/images/products/fresh-mango/fresh-mango-2.png", "/images/products/fresh-mango/fresh-mango-3.png", "/images/products/fresh-mango/fresh-mango-4.png"] },
  { id: "sweet-potatoes", name: "Sweet Potatoes", categoryId: "fresh-fruits", images: ["/images/products/sweet-potatoes/sweet-potatoes-1.png", "/images/products/sweet-potatoes/sweet-potatoes-2.png", "/images/products/sweet-potatoes/sweet-potatoes-3.png", "/images/products/sweet-potatoes/sweet-potatoes-4.png"] },
  { id: "fresh-lime-seedless", name: "Fresh Lime Seedless", categoryId: "fresh-fruits", images: ["/images/products/fresh-lime-seedless/fresh-lime-seedless-1.png", "/images/products/fresh-lime-seedless/fresh-lime-seedless-2.png", "/images/products/fresh-lime-seedless/fresh-lime-seedless-3.png", "/images/products/fresh-lime-seedless/fresh-lime-seedless-4.png"] },
  { id: "fresh-pineapple-md2", name: "Fresh Pineapple MD2", categoryId: "fresh-fruits", images: ["/images/products/fresh-pineapple-md2/fresh-pineapple-md2-1.png", "/images/products/fresh-pineapple-md2/fresh-pineapple-md2-2.png", "/images/products/fresh-pineapple-md2/fresh-pineapple-md2-3.png", "/images/products/fresh-pineapple-md2/fresh-pineapple-md2-4.png"] },
  { id: "pomelo", name: "Pomelo", categoryId: "fresh-fruits", images: ["/images/products/pomelo/pomelo-1.png", "/images/products/pomelo/pomelo-2.png", "/images/products/pomelo/pomelo-3.png", "/images/products/pomelo/pomelo-4.png"] },
  { id: "muskmelon", name: "Muskmelon", categoryId: "fresh-fruits", images: ["/images/products/muskmelon/muskmelon-1.png", "/images/products/muskmelon/muskmelon-2.png", "/images/products/muskmelon/muskmelon-3.png", "/images/products/muskmelon/muskmelon-4.png"] },
  { id: "fresh-carrots", name: "Fresh Carrots", categoryId: "fresh-fruits", images: ["/images/products/fresh-carrots/fresh-carrots-1.png", "/images/products/fresh-carrots/fresh-carrots-2.png", "/images/products/fresh-carrots/fresh-carrots-3.png", "/images/products/fresh-carrots/fresh-carrots-4.png"] },

  // 7. Canned Fish
  { id: "canned-tuna", name: "Canned Tuna", categoryId: "canned-fish", images: ["/images/products/canned-tuna/canned-tuna-1.png", "/images/products/canned-tuna/canned-tuna-2.png", "/images/products/canned-tuna/canned-tuna-3.png", "/images/products/canned-tuna/canned-tuna-4.png"] },
  { id: "canned-sardine-tomato", name: "Canned Sardine With Tomato Sauces", categoryId: "canned-fish", images: ["/images/products/canned-sardine-tomato/canned-sardine-tomato-1.png", "/images/products/canned-sardine-tomato/canned-sardine-tomato-2.png", "/images/products/canned-sardine-tomato/canned-sardine-tomato-3.png", "/images/products/canned-sardine-tomato/canned-sardine-tomato-4.png"] },
  { id: "canned-sardine-black-bean", name: "Canned Sardine With Black Bean Sauces", categoryId: "canned-fish", images: ["/images/products/canned-sardine-black-bean/canned-sardine-black-bean-1.png", "/images/products/canned-sardine-black-bean/canned-sardine-black-bean-2.png", "/images/products/canned-sardine-black-bean/canned-sardine-black-bean-3.png", "/images/products/canned-sardine-black-bean/canned-sardine-black-bean-4.png"] },
];

export const getCategoryById = (id: string) => categories.find(c => c.id === id);
export const getProductsByCategory = (categoryId: string) => products.filter(p => p.categoryId === categoryId);
export const getProductById = (id: string) => products.find(p => p.id === id);


