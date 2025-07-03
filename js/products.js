// js/products.js

const products = [
    {
        id: "21784",
        name: "Vainillas 6u",
        description: "Clásicas vainillas Bimbo, ideales para postres o disfrutar con el café. Paquete de 6 unidades.",
        image: "images/products/21784.jpg", // SKU 21784 (actualizado a .jpg)
        category: "Dulces",
        unit: "paquete",
        sku: "21784",
        vida_util: "180 días",
        brand: "Bimbo",
        featured: false
    },
    {
        id: "21148",
        name: "Vainillas 12u",
        description: "Vainillas Bimbo en presentación de 12 unidades, perfectas para compartir o tus recetas favoritas.",
        image: "images/products/21148.jpg", // SKU 21148
        category: "Dulces",
        unit: "paquete",
        sku: "21148",
        vida_util: "180 días",
        brand: "Bimbo",
        featured: false
    },
    {
        id: "2636",
        name: "Vainillas 36u",
        description: "Envase familiar de vainillas Bimbo con 36 unidades, para que nunca falten en tu hogar.",
        image: "images/products/2636.jpg", // SKU 2636
        category: "Dulces",
        unit: "paquete",
        sku: "2636",
        vida_util: "180 días",
        brand: "Bimbo",
        featured: false
    },
    {
        id: "2086",
        name: "Madalenas Chocolate Rellenas con Dulce de Leche 190g",
        description: "Madalenas de chocolate rellenas con el más delicioso dulce de leche Bimbo.",
        image: "images/products/2086.jpg", // SKU 2086
        category: "Dulces",
        unit: "unidad",
        sku: "2086",
        vida_util: "180 días",
        brand: "Bimbo",
        featured: true
    },
    {
        id: "2006",
        name: "Madalenas Rellenas con Dulce de Leche 190g",
        description: "Tiernas madalenas de vainilla rellenas con dulce de leche Bimbo, un clásico irresistible.",
        image: "images/products/2006.jpg", // SKU 2006
        category: "Dulces",
        unit: "unidad",
        sku: "2006",
        vida_util: "180 días",
        brand: "Bimbo",
        featured: true
    },
    {
        id: "2005",
        name: "Madalenas Marmoladas 200g",
        description: "Madalenas marmoladas de Bimbo, una combinación perfecta de vainilla y chocolate.",
        image: "images/products/2005.jpg", // SKU 2005
        category: "Dulces",
        unit: "unidad",
        sku: "2005",
        vida_util: "180 días",
        brand: "Bimbo",
        featured: false
    },
    {
        id: "2004",
        name: "Madalenas Vainilla 200g",
        description: "Las clásicas madalenas de vainilla Bimbo, suaves y esponjosas, ideales para tu desayuno o merienda.",
        image: "images/products/2004.jpg", // SKU 2004
        category: "Dulces",
        unit: "unidad",
        sku: "2004",
        vida_util: "180 días",
        brand: "Bimbo",
        featured: false
    },
    {
        id: "506419",
        name: "Madalenas Rellenas con Dulce de Leche 32g",
        description: "Mini madalenas individuales rellenas con dulce de leche, perfectas para llevar.",
        image: "images/products/506419.jpg", // SKU 506419
        category: "Dulces",
        unit: "unidad",
        sku: "506419",
        vida_util: "120 días",
        brand: "Bimbo",
        featured: false
    },
    {
        id: "506418",
        name: "Madalenas Chocolate Rellenas con Dulce de Leche 32g",
        description: "Mini madalenas de chocolate rellenas con dulce de leche, en su formato individual.",
        image: "images/products/506418.jpg", // SKU 506418
        category: "Dulces",
        unit: "unidad",
        sku: "506418",
        vida_util: "120 días",
        brand: "Bimbo",
        featured: false
    },
    {
        id: "504160",
        name: "Budín Chips de Chocolate 170g",
        description: "Delicioso budín con chips de chocolate, ideal para compartir en cualquier momento.",
        image: "images/products/504160.jpg", // SKU 504160
        category: "Dulces",
        unit: "unidad",
        sku: "504160",
        vida_util: "180 días",
        brand: "Bimbo",
        featured: true
    },
    {
        id: "504159",
        name: "Budín Chocolate 170g",
        description: "Budín sabor chocolate Bimbo, húmedo y con el intenso sabor que te encanta.",
        image: "images/products/504159.jpg", // SKU 504159
        category: "Dulces",
        unit: "unidad",
        sku: "504159",
        vida_util: "180 días",
        brand: "Bimbo",
        featured: false
    },
    {
        id: "504154",
        name: "Budín Relleno con Dulce de Leche 220g",
        description: "Budín de vainilla relleno con un generoso centro de dulce de leche, un placer para el paladar.",
        image: "images/products/504154.jpg", // SKU 504154
        category: "Dulces",
        unit: "unidad",
        sku: "504154",
        vida_util: "180 días",
        brand: "Bimbo",
        featured: true
    },
    {
        id: "504163",
        name: "Budín Marmolado 170g",
        description: "Budín marmolado, la combinación perfecta de vainilla y chocolate en cada rebanada.",
        image: "images/products/504163.jpg", // SKU 504163
        category: "Dulces",
        unit: "unidad",
        sku: "504163",
        vida_util: "180 días",
        brand: "Bimbo",
        featured: false
    },
    {
        id: "504162",
        name: "Budín Vainilla 170g",
        description: "Clásico budín de vainilla Bimbo, suave y esponjoso, ideal para acompañar tu té o café.",
        image: "images/products/504162.jpg", // SKU 504162
        category: "Dulces",
        unit: "unidad",
        sku: "504162",
        vida_util: "180 días",
        brand: "Bimbo",
        featured: false
    },
    {
        id: "504406",
        name: "Budín Marmolado Tipo Casero 250gr",
        description: "Budín marmolado con sabor y textura casera, perfecto para cualquier ocasión.",
        image: "images/products/504406.jpg", // SKU 504406
        category: "Dulces",
        unit: "unidad",
        sku: "504406",
        vida_util: "180 días",
        brand: "Bimbo",
        featured: false
    },
    {
        id: "504407",
        name: "Budín Chocolate con Chips Tipo Casero 250gr",
        description: "Budín casero de chocolate con chips, una delicia para los amantes del chocolate.",
        image: "images/products/504407.jpg", // SKU 504407
        category: "Dulces",
        unit: "unidad",
        sku: "504407",
        vida_util: "180 días",
        brand: "Bimbo",
        featured: false
    },
    {
        id: "504448",
        name: "Budín Carrot Cake 350g",
        description: "Exquisito budín de zanahoria Artesano, con especias y un toque de sabor único. Calidad premium.",
        image: "images/products/504448.jpg", // SKU 504448
        category: "Dulces",
        unit: "unidad",
        sku: "504448",
        vida_util: "90 días",
        brand: "Artesano",
        featured: true
    },
    {
        id: "504450",
        name: "Budín Banana 350g",
        description: "Budín de banana Artesano, suave y aromático, elaborado con ingredientes selectos.",
        image: "images/products/504450.jpg", // SKU 504450
        category: "Dulces",
        unit: "unidad",
        sku: "504450",
        vida_util: "90 días",
        brand: "Artesano",
        featured: true
    },
    {
        id: "2529",
        name: "Vainillas 6u",
        description: "Vainillas Valente, paquete de 6 unidades, perfectas para tus postres caseros o un capricho dulce.",
        image: "images/products/2529.jpg", // SKU 2529
        category: "Dulces",
        unit: "paquete",
        sku: "2529",
        vida_util: "180 días",
        brand: "Valente",
        featured: false
    },
    {
        id: "2697",
        name: "Vainillas 36u",
        description: "Pack económico de vainillas Valente con 36 unidades, para tener siempre a mano.",
        image: "images/products/2697.jpg", // SKU 2697
        category: "Dulces",
        unit: "paquete",
        sku: "2697",
        vida_util: "180 días",
        brand: "Valente",
        featured: false
    },
    {
        id: "2845",
        name: "Vainillas  12u",
        description: "Vainillas Valente de 12 unidades, ideales para disfrutar en familia o en tus recetas.",
        image: "images/products/2845.jpg", // SKU 2845
        category: "Dulces",
        unit: "paquete",
        sku: "2845",
        vida_util: "180 días",
        brand: "Valente",
        featured: false
    },
    {
        id: "7245",
        name: "Madalenas Chocolate con Dulce de Leche 200g",
        description: "Madalenas Valente con un rico sabor a chocolate y rellenas con dulce de leche.",
        image: "images/products/7245.jpg", // SKU 7245
        category: "Dulces",
        unit: "unidad",
        sku: "7245",
        vida_util: "180 días",
        brand: "Valente",
        featured: false
    },
    {
        id: "7249",
        name: "Madalenas Marmoladas 200g",
        description: "Madalenas marmoladas Valente, una deliciosa mezcla de vainilla y chocolate.",
        image: "images/products/7249.jpg", // SKU 7249
        category: "Dulces",
        unit: "unidad",
        sku: "7249",
        vida_util: "180 días",
        brand: "Valente",
        featured: false
    },
    {
        id: "7171",
        name: "Madalenas Rellenas con Dulce de Leche 200g",
        description: "Madalenas Valente rellenas con abundante dulce de leche, para endulzar tu día.",
        image: "images/products/7171.jpg", // SKU 7171
        category: "Dulces",
        unit: "unidad",
        sku: "7171",
        vida_util: "180 días",
        brand: "Valente",
        featured: false
    },
    {
        id: "7138",
        name: "Madalenas Vainilla 200g",
        description: "Las clásicas madalenas de vainilla Valente, suaves y perfectas para la merienda.",
        image: "images/products/7138.jpg", // SKU 7138
        category: "Dulces",
        unit: "unidad",
        sku: "7138",
        vida_util: "180 días",
        brand: "Valente",
        featured: false
    },
    {
        id: "504155",
        name: "Budín con Frutas 170g",
        description: "Budín Valente con frutas confitadas, un sabor tradicional que no puede faltar.",
        image: "images/products/504155.jpg", // SKU 504155
        category: "Dulces",
        unit: "unidad",
        sku: "504155",
        vida_util: "180 días",
        brand: "Valente",
        featured: false
    },
    {
        id: "504158",
        name: "Budín Chips de Chocolate 170g",
        description: "Budín Valente con deliciosos chips de chocolate, la combinación perfecta de sabor y textura.",
        image: "images/products/504158.jpg", // SKU 504158
        category: "Dulces",
        unit: "unidad",
        sku: "504158",
        vida_util: "180 días",
        brand: "Valente",
        featured: false
    },
    {
        id: "504156",
        name: "Budín Relleno con Dulce de Leche 220g",
        description: "Budín Valente relleno con dulce de leche, un bocado lleno de dulzura.",
        image: "images/products/504156.jpg", // SKU 504156
        category: "Dulces",
        unit: "unidad",
        sku: "504156",
        vida_util: "180 días",
        brand: "Valente",
        featured: false
    },
    {
        id: "504161",
        name: "Budín Marmolado 170g",
        description: "Budín marmolado Valente, una opción clásica para los amantes de la vainilla y el chocolate.",
        image: "images/products/504161.jpg", // SKU 504162
        category: "Dulces",
        unit: "unidad",
        sku: "504161",
        vida_util: "180 días",
        brand: "Valente",
        featured: false
    },
    {
        id: "504157",
        name: "Budín Vainilla  170g",
        description: "El tradicional budín de vainilla Valente, suave y esponjoso, ideal para acompañar tus mañanas.",
        image: "images/products/504157.jpg", // SKU 504157
        category: "Dulces",
        unit: "unidad",
        sku: "504157",
        vida_util: "180 días",
        brand: "Valente",
        featured: false
    },
    {
        id: "3725",
        name: "Vainillas 12u",
        description: "Vainillas Briosh en paquete de 12 unidades, con la calidad y sabor que te encantan.",
        image: "images/products/3725.jpg", // SKU 3725
        category: "Dulces",
        unit: "paquete",
        sku: "3725",
        vida_util: "180 días",
        brand: "Briosh",
        featured: false
    },
    {
        id: "1646",
        name: "Brownie Mini 35g",
        description: "Pequeño y delicioso brownie individual de SabeBien!, ideal para un antojo dulce.",
        image: "images/products/57793890261646.jpg", // No se proporciona SKU, usar nombre descriptivo
        category: "Dulces",
        unit: "unidad",
        sku: "57793890261646", // El SKU del PDF es para Salmas, no para este producto. Usar uno de ejemplo o dejar vacío.
        vida_util: "100 días",
        brand: "SabeBien!",
        featured: false
    },
    {
        id: "1530",
        name: "Braunichoc 35gr",
        description: "Snack de chocolate SabeBien! con todo el sabor del brownie en un formato práctico.",
        image: "images/products/braunichoc-sabebien.jpg", // No se proporciona SKU, usar nombre descriptivo
        category: "Dulces",
        unit: "unidad",
        sku: "1530", // El SKU del PDF es para Salmas, no para este producto. Usar uno de ejemplo o dejar vacío.
        vida_util: "100 días",
        brand: "SabeBien!",
        featured: false
    },
    {
        id: "1578",
        name: "Brownie Chips 62gr",
        description: "Brownie con chips de chocolate SabeBien!, una explosión de sabor en cada mordisco.",
        image: "images/products/brownie-chips-sabebien.jpg", // No se proporciona SKU, usar nombre descriptivo
        category: "Dulces",
        unit: "unidad",
        sku: "1578", // El SKU del PDF es para Salmas, no para este producto. Usar uno de ejemplo o dejar vacío.
        vida_util: "100 días",
        brand: "SabeBien!",
        featured: false
    },
    {
        id: "504587",
        name: "Salmas Horneadas 90g",
        description: "Galletas de maíz horneadas Salmas, crujientes y saludables, ideales para acompañar tus comidas o como snack.",
        image: "images/products/504587.jpg", // SKU 504587
        category: "Galletas",
        unit: "paquete",
        sku: "504587",
        vida_util: "No especificado en PDF", // No se especifica en el PDF [cite: 187]
        brand: "Salmas",
        featured: false
    },

];

// === DEBUG: Mostrar marcas únicas en consola ===
(function() {
  const brands = products.map(p => p.brand).filter(Boolean);
  const uniqueBrands = [...new Set(brands)].sort();
  console.log('[DEBUG] Marcas únicas encontradas en products.js:', uniqueBrands);
})();

// Exporta el array de productos
export default products;