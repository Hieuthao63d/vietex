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
  translations?: Record<string, { name: string; description?: string }>;
}

export const categories: Category[] = [
  {
    id: "canned-fruits",
    name: "Canned Fruits",
    translations: {
      en: { name: "Canned Fruits", description: "Premium canned tropical fruits sourced from Vietnam." },
      vi: { name: "Trái Cây Đóng Hộp", description: "Trái cây nhiệt đới đóng hộp thượng hạng xuất khẩu từ Việt Nam." },
      ko: { name: "과일 통조림", description: "베트남에서 엄선하여 가공한 프리미엄 열대 과일 통조림입니다." },
      th: { name: "ผลไม้กระป๋อง", description: "ผลไม้เมืองร้อนบรรจุกระป๋องคุณภาพพรีเมียมส่งออกจากเวียดนาม" },
      ms: { name: "Buah-buahan Dalam Tin", description: "Buah-buahan tropika dalam tin berkualiti tinggi dari Vietnam." },
      id: { name: "Buah Kaleng", description: "Buah-buahan tropis kalengan berkualitas premium dari Vietnam." }
    }
  },
  {
    id: "canned-vegetables",
    name: "Canned Vegetables",
    translations: {
      en: { name: "Canned Vegetables", description: "Crisp, farm-fresh canned vegetables processed at peak maturity." },
      vi: { name: "Rau Củ Đóng Hộp", description: "Rau củ tươi ngon đóng hộp giữ trọn độ giòn ngọt tự nhiên." },
      ko: { name: "야채 통조림", description: "산지의 신선함과 아삭한 식감을 그대로 담은 베트남산 야채 통조림입니다." },
      th: { name: "ผักกระป๋อง", description: "ผักสดจากฟาร์มบรรจุกระป๋อง คงความกรอบและคุณค่าทางอาหารครบถ้วน" },
      ms: { name: "Sayur-sayuran Dalam Tin", description: "Sayur-sayuran segar dari ladang yang ditinkan pada tahap kematangan terbaik." },
      id: { name: "Sayuran Kaleng", description: "Sayuran segar pilihan dari pertanian yang dikalengkan dengan standar mutu internasional." }
    }
  },
  {
    id: "dried-fruits",
    name: "Dried Fruits",
    translations: {
      en: { name: "Dried Fruits", description: "Naturally sweet soft-dried tropical fruits with rich flavor." },
      vi: { name: "Trái Cây Sấy", description: "Trái cây nhiệt đới sấy dẻo giữ nguyên hương vị thơm ngọt tự nhiên." },
      ko: { name: "건조 과일", description: "열대 과일 본연의 달콤한 맛과 영양을 살린 프리미엄 건과일입니다." },
      th: { name: "ผลไม้อบแห้ง", description: "ผลไม้เมืองร้อนอบแห้งเนื้อนุ่ม รสชาติหวานหอมตามธรรมชาติ" },
      ms: { name: "Buah-buahan Kering", description: "Buah-buahan tropika kering lembut yang manis semula jadi dan kaya rasa." },
      id: { name: "Buah Kering", description: "Buah tropis kering lembut dengan rasa manis alami khas Vietnam." }
    }
  },
  {
    id: "frozen-fruits",
    name: "Frozen Fruits",
    translations: {
      en: { name: "Frozen Fruits", description: "IQF quick-frozen tropical fruits locking in natural freshness and nutrition." },
      vi: { name: "Trái Cây Đông Lạnh (IQF)", description: "Trái cây cấp đông nhanh IQF giữ trọn độ tươi ngon và dinh dưỡng." },
      ko: { name: "냉동 과일 (IQF)", description: "수확 직후 급속 냉동(IQF)하여 과일의 신선도와 과즙을 그대로 보존했습니다." },
      th: { name: "ผลไม้แช่แข็ง (IQF)", description: "ผลไม้เมืองร้อนแช่แข็งด่วนแบบ IQF คงความสดใหม่และคุณค่าทางโภชนาการ" },
      ms: { name: "Buah-buahan Beku (IQF)", description: "Buah-buahan tropika sejuk beku pantas IQF yang mengekalkan kesegaran semula jadi." },
      id: { name: "Buah Beku (IQF)", description: "Buah tropis beku cepat (IQF) yang mengunci kesegaran dan nutrisi alami." }
    }
  },
  {
    id: "fruit-juice-concentrates",
    name: "Fruit Juice / Concentrates",
    translations: {
      en: { name: "Fruit Juice / Concentrates", description: "100% natural fruit purees, NFC juices, and concentrates for beverage & food manufacturing." },
      vi: { name: "Nước Ép & Trái Cây Cô Đặc", description: "Nước ép nguyên chất, Puree và nước cốt trái cây cô đặc phục vụ ngành thực phẩm & đồ uống." },
      ko: { name: "과일 주스 및 농축액", description: "식음료 제조 산업을 위한 100% 천연 과일 퓨레, 착즙 주스 및 고품질 농축액입니다." },
      th: { name: "น้ำผลไม้และน้ำผลไม้เข้มข้น", description: "เพียวเร่ผลไม้ น้ำผลไม้แท้ และน้ำผลไม้เข้มข้นสำหรับอุตสาหกรรมอาหารและเครื่องดื่ม" },
      ms: { name: "Jus Buah / Pati Pekat", description: "Puri buah asli, jus dan pati buah pekat untuk industri makanan dan minuman." },
      id: { name: "Jus Buah / Konsentrat", description: "Puree buah murni, jus, dan konsentrat buah untuk industri makanan dan minuman." }
    }
  },
  {
    id: "fresh-fruits",
    name: "Fresh Fruits",
    translations: {
      en: { name: "Fresh Fruits", description: "Export-grade fresh tropical fruits and agricultural produce harvested from GlobalGAP farms." },
      vi: { name: "Trái Cây & Nông Sản Tươi", description: "Trái cây và nông sản tươi đạt chuẩn GlobalGAP xuất khẩu trực tiếp từ nhà vườn." },
      ko: { name: "신선 과일 및 농산물", description: "인증된 농장에서 수확하여 산지 직송하는 수출 등급 신선 열대 과일 및 농산물입니다." },
      th: { name: "ผลไม้สดและผลผลิตทางการเกษตร", description: "ผลไม้เมืองร้อนและพืชผลทางการเกษตรสดเกรดส่งออกจากฟาร์มมาตรฐานสากล" },
      ms: { name: "Buah-buahan Segar", description: "Buah-buahan tropika segar gred eksport terus dari ladang yang disahkan." },
      id: { name: "Buah Segar", description: "Buah-buahan tropis segar mutu ekspor langsung dari perkebunan bersertifikat." }
    }
  },
  {
    id: "canned-fish",
    name: "Canned Fish",
    translations: {
      en: { name: "Canned Fish", description: "High-protein wild-caught canned tuna and sardines in premium sauces and oils." },
      vi: { name: "Cá Đóng Hộp", description: "Cá ngừ và cá mòi đại dương đóng hộp giàu dinh dưỡng theo tiêu chuẩn quốc tế." },
      ko: { name: "수산물 통조림", description: "엄선된 원양산 참치와 정어리로 만든 고단백 프리미엄 수산물 통조림입니다." },
      th: { name: "ปลากระป๋อง", description: "ปลาทูน่าและปลาซาร์ดีนกระป๋องคุณภาพสูงในซอสและน้ำมันเกรดพรีเมียม" },
      ms: { name: "Ikan Dalam Tin", description: "Tuna dan sardin laut dalam tin berkualiti tinggi untuk pasaran antarabangsa." },
      id: { name: "Ikan Kaleng", description: "Tuna dan sarden tangkapan laut lepas kalengan berkualitas ekspor." }
    }
  },
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
