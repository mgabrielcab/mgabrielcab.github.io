// js/products.js

// Base de datos de productos para el catálogo
var products = [
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
        image: "images/products/504162.jpg", // SKU 504162
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
        image: "images/products/1646.jpg", // No se proporciona SKU, usar nombre descriptivo
        category: "Dulces",
        unit: "unidad",
        sku: "1646", // El SKU del PDF es para Salmas, no para este producto. Usar uno de ejemplo o dejar vacío.
        vida_util: "100 días",
        brand: "SabeBien!",
        featured: false
    },
    {
        id: "1530",
        name: "Braunichoc 35gr",
        description: "Snack de chocolate SabeBien! con todo el sabor del brownie en un formato práctico.",
        image: "images/products/1530.jpg", // No se proporciona SKU, usar nombre descriptivo
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
        image: "images/products/1578.jpg", // No se proporciona SKU, usar nombre descriptivo
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
      {
    id: "964511",
    name: "Rapiditas XXL 8u",
    description: "Tortillas Rapiditas XXL de 8 unidades, ideales para rellenar a tu gusto.",
    image: "images/products/964511.jpg",
    category: "Tortillas",
    unit: "paquete",
    sku: "964511",
    vida_util: "63 días",
    brand: "Bimbo",
    featured: false
  },
  {
    id: "23418",
    name: "Tortillas Integrales Rapiditas 10u",
    description: "Tortillas Integrales Rapiditas de 10 unidades.",
    image: "images/products/23418.jpg",
    category: "Tortillas",
    unit: "paquete",
    sku: "23418",
    vida_util: "63 días",
    brand: "Bimbo",
    featured: false
  },
  {
    id: "21483",
    name: "Tortillas Light Rapiditas 10u",
    description: "Tortillas Light Rapiditas de 10 unidades.",
    image: "images/products/21483.jpg",
    category: "Tortillas",
    unit: "paquete",
    sku: "21483",
    vida_util: "63 días",
    brand: "Bimbo",
    featured: false
  },
  {
    id: "21478",
    name: "Tortillas Clásicas Rapiditas 10u",
    description: "Tortillas Clásicas Rapiditas de 10 unidades.",
    image: "images/products/21478.jpg",
    category: "Tortillas",
    unit: "paquete",
    sku: "21478",
    vida_util: "63 días",
    brand: "Bimbo",
    featured: false
  },
  {
    id: "20896",
    name: "Tortillas Tía Rosa 10u",
    description: "Tortillas de Trigo Tía Rosa de 10 unidades.",
    image: "images/products/20896.jpg",
    category: "Tortillas",
    unit: "paquete",
    sku: "20896",
    vida_util: "60 días",
    brand: "Tía Rosa",
    featured: false
  },
  {
    id: "505798",
    name: "Burrera Tía Rosa 8u",
    description: "Tortillas Burrera Tía Rosa de 8 unidades.",
    image: "images/products/505798.jpg",
    category: "Tortillas",
    unit: "paquete",
    sku: "505798",
    vida_util: "63 días",
    brand: "Tía Rosa",
    featured: false
  },
  {
    id: "506549",
    name: "Fajitas Tía Rosa 10u",
    description: "Tortillas para Fajitas Tía Rosa de 10 unidades.",
    image: "images/products/506549.jpg",
    category: "Tortillas",
    unit: "paquete",
    sku: "506549",
    vida_util: "90 días",
    brand: "Tía Rosa",
    featured: false
  },
  {
    id: "964646",
    name: "Pan Integral Bimbo Cero Cero Open Top 430g",
    description: "Pan Integral Bimbo Cero Cero en formato Open Top de 430g.",
    image: "images/products/964646.jpg",
    category: "Pan de Molde",
    unit: "paquete",
    sku: "964646",
    vida_util: "28 días",
    brand: "Bimbo",
    featured: false
  },
  {
    id: "964638",
    name: "Pan Integral Bimbo Open Top 420g",
    description: "Pan Integral Bimbo en formato Open Top de 420g.",
    image: "images/products/964638.jpg",
    category: "Pan de Molde",
    unit: "paquete",
    sku: "964638",
    vida_util: "28 días",
    brand: "Bimbo",
    featured: false
  },
  {
    id: "964645",
    name: "Pan con Lino Bimbo Open Top 420g",
    description: "Pan con Lino Bimbo en formato Open Top de 420g.",
    image: "images/products/964645.jpg",
    category: "Pan de Molde",
    unit: "paquete",
    sku: "964645",
    vida_util: "28 días",
    brand: "Bimbo",
    featured: false
  },
  {
    id: "964641",
    name: "Pan Integral Bimbo Open Top 640g",
    description: "Pan Integral Bimbo en formato Open Top de 640g.",
    image: "images/products/964641.jpg",
    category: "Pan de Molde",
    unit: "paquete",
    sku: "964641",
    vida_util: "28 días",
    brand: "Bimbo",
    featured: false
  },
  {
    id: "964639",
    name: "Pan Blanco Bimbo Cero Cero Open Top 410g",
    description: "Pan Blanco Bimbo Cero Cero en formato Open Top de 410g.",
    image: "images/products/964639.jpg",
    category: "Pan de Molde",
    unit: "paquete",
    sku: "964639",
    vida_util: "28 días",
    brand: "Bimbo",
    featured: false
  },
  {
    id: "964647",
    name: "Pan Blanco Bimbo Open Top 400g",
    description: "Pan Blanco Bimbo en formato Open Top de 400g.",
    image: "images/products/964647.jpg",
    category: "Pan de Molde",
    unit: "paquete",
    sku: "964647",
    vida_util: "28 días",
    brand: "Bimbo",
    featured: false
  },
  {
    id: "964642",
    name: "Pan Blanco Bimbo Open Top 610g",
    description: "Pan Blanco Bimbo en formato Open Top de 610g.",
    image: "images/products/964642.jpg",
    category: "Pan de Molde",
    unit: "paquete",
    sku: "964642",
    vida_util: "28 días",
    brand: "Bimbo",
    featured: false
  },
  {
    id: "27028",
    name: "Pan para Hamburguesa con Sésamo Bimbo 4u",
    description: "Pan para Hamburguesa Bimbo con sésamo de 4 unidades.",
    image: "images/products/27028.jpg",
    category: "Pan de Hamburguesa",
    unit: "paquete",
    sku: "27028",
    vida_util: "28 días",
    brand: "Bimbo",
    featured: false
  },
  {
    id: "27233",
    name: "Pan para Pancho Bimbo 6u",
    description: "Pan para Pancho Bimbo de 6 unidades.",
    image: "images/products/27233.jpg",
    category: "Pan de Pancho",
    unit: "paquete",
    sku: "27233",
    vida_util: "28 días",
    brand: "Bimbo",
    featured: false
  },
  {
    id: "503994",
    name: "Pan Integral Artesano con Masa Madre 500g",
    description: "Pan Integral Artesano con Masa Madre de 500g.",
    image: "images/products/503994.jpg",
    category: "Pan de Molde",
    unit: "paquete",
    sku: "503994",
    vida_util: "28 días",
    brand: "Artesano",
    featured: false
  },
  {
    id: "503969",
    name: "Pan Blanco Artesano con Masa Madre 500g",
    description: "Pan Blanco Artesano con Masa Madre de 500g.",
    image: "images/products/503969.jpg",
    category: "Pan de Molde",
    unit: "paquete",
    sku: "503969",
    vida_util: "28 días",
    brand: "Artesano",
    featured: false
  },
  {
    id: "32571",
    name: "Pan Brioche de Hamburguesa Bimbo Artesano 4u",
    description: "Pan Brioche de Hamburguesa Bimbo Artesano de 4 unidades.",
    image: "images/products/32571.jpg",
    category: "Pan de Hamburguesa",
    unit: "paquete",
    sku: "32571",
    vida_util: "28 días",
    brand: "Artesano",
    featured: false
  },
  {
    id: "28585",
    name: "Pan de Papa de Hamburguesa Bimbo Artesano 4u",
    description: "Pan de Papa de Hamburguesa Bimbo Artesano de 4 unidades.",
    image: "images/products/28585.jpg",
    category: "Pan de Hamburguesa",
    unit: "paquete",
    sku: "28585",
    vida_util: "28 días",
    brand: "Artesano",
    featured: false
  },
  {
    id: "46327",
    name: "Pan de Hamburguesa Bimbo Artesano 4u",
    description: "Pan de Hamburguesa Bimbo Artesano de 4 unidades.",
    image: "images/products/46327.jpg",
    category: "Pan de Hamburguesa",
    unit: "paquete",
    sku: "46327",
    vida_util: "28 días",
    brand: "Artesano",
    featured: false
  },
  {
    id: "47723",
    name: "Pan de Pancho Bimbo Artesano 6u",
    description: "Pan de Pancho Bimbo Artesano de 6 unidades.",
    image: "images/products/47723.jpg",
    category: "Pan de Pancho",
    unit: "paquete",
    sku: "47723",
    vida_util: "28 días",
    brand: "Artesano",
    featured: false
  },
  {
    id: "504255",
    name: "Pan de Pancho Papa Bimbo Artesano 6u",
    description: "Pan de Pancho Papa Bimbo Artesano de 6 unidades.",
    image: "images/products/504255.jpg",
    category: "Pan de Pancho",
    unit: "paquete",
    sku: "504255",
    vida_util: "28 días",
    brand: "Artesano",
    featured: false
  },
  {
    id: "7609",
    name: "Pan con Cereales Oroweat 600g",
    description: "Pan con Cereales Oroweat de 600g.",
    image: "images/products/7609.jpg",
    category: "Pan de Molde",
    unit: "paquete",
    sku: "7609",
    vida_util: "28 días",
    brand: "Oroweat",
    featured: false
  },
  {
    id: "7606",
    name: "Pan con Semillas Oroweat 600g",
    description: "Pan con Semillas Oroweat de 600g.",
    image: "images/products/7606.jpg",
    category: "Pan de Molde",
    unit: "paquete",
    sku: "7606",
    vida_util: "28 días",
    brand: "Oroweat",
    featured: false
  },
  {
    id: "964712",
    name: "Pan con Cereales y Semillas Fargo Open Top 400g",
    description: "Pan con Cereales y Semillas Fargo en formato Open Top de 400g.",
    image: "images/products/964712.jpg",
    category: "Pan de Molde",
    unit: "paquete",
    sku: "964712",
    vida_util: "28 días",
    brand: "Fargo",
    featured: false
  },
  {
    id: "964709",
    name: "Pan Lacteado Fargo Open Top 370g",
    description: "Pan Lacteado Fargo en formato Open Top de 370g.",
    image: "images/products/964709.jpg",
    category: "Pan de Molde",
    unit: "paquete",
    sku: "964709",
    vida_util: "28 días",
    brand: "Fargo",
    featured: false
  },
  {
    id: "964705",
    name: "Pan Lacteado Fargo Open Top 585g",
    description: "Pan Lacteado Fargo en formato Open Top de 585g.",
    image: "images/products/964705.jpg",
    category: "Pan de Molde",
    unit: "paquete",
    sku: "964705",
    vida_util: "28 días",
    brand: "Fargo",
    featured: false
  },
  {
    id: "964706",
    name: "Pan Lacteado Rodajas Finas Fargo Open Top 585g",
    description: "Pan Lacteado Rodajas Finas Fargo en formato Open Top de 585g.",
    image: "images/products/964706.jpg",
    category: "Pan de Molde",
    unit: "paquete",
    sku: "964706",
    vida_util: "28 días",
    brand: "Fargo",
    featured: false
  },
  {
    id: "964708",
    name: "Pan Salvado Fargo Open Top 390g",
    description: "Pan Salvado Fargo en formato Open Top de 390g.",
    image: "images/products/964708.jpg",
    category: "Pan de Molde",
    unit: "paquete",
    sku: "964708",
    vida_util: "28 días",
    brand: "Fargo",
    featured: false
  },
  {
    id: "964707",
    name: "Pan Salvado Fargo Open Top 620g",
    description: "Pan Salvado Fargo en formato Open Top de 620g.",
    image: "images/products/964707.jpg",
    category: "Pan de Molde",
    unit: "paquete",
    sku: "964707",
    vida_util: "28 días",
    brand: "Fargo",
    featured: false
  },
  {
    id: "964711",
    name: "Pan Integral Fargo Open Top 400g",
    description: "Pan Integral Fargo en formato Open Top de 400g.",
    image: "images/products/964711.jpg",
    category: "Pan de Molde",
    unit: "paquete",
    sku: "964711",
    vida_util: "28 días",
    brand: "Fargo",
    featured: false
  },
  {
    id: "964710",
    name: "Pan Lacteado Rodajas Finas Fargo Open Top 370g",
    description: "Pan Lacteado Rodajas Finas Fargo en formato Open Top de 370g.",
    image: "images/products/964710.jpg",
    category: "Pan de Molde",
    unit: "paquete",
    sku: "964710",
    vida_util: "28 días",
    brand: "Fargo",
    featured: false
  },
  {
    id: "21711",
    name: "Pan para Hamburguesa con Sésamo Fargo 4u",
    description: "Pan para Hamburguesa Fargo con sésamo de 4 unidades.",
    image: "images/products/21711.jpg",
    category: "Pan de Hamburguesa",
    unit: "paquete",
    sku: "21711",
    vida_util: "28 días",
    brand: "Fargo",
    featured: false
  },
  {
    id: "21783",
    name: "Pan para Hamburguesa sin Sésamo Fargo 4u",
    description: "Pan para Hamburguesa Fargo sin sésamo de 4 unidades.",
    image: "images/products/21783.jpg",
    category: "Pan de Hamburguesa",
    unit: "paquete",
    sku: "21783",
    vida_util: "28 días",
    brand: "Fargo",
    featured: false
  },
  {
    id: "21707",
    name: "Pan de Pancho Fargo 6u",
    description: "Pan de Pancho Fargo de 6 unidades.",
    image: "images/products/21707.jpg",
    category: "Pan de Pancho",
    unit: "paquete",
    sku: "21707",
    vida_util: "28 días",
    brand: "Fargo",
    featured: false
  },
  {
    id: "504404",
    name: "Pan de Superpancho Fargo 6u",
    description: "Pan de Superpancho Fargo de 6 unidades.",
    image: "images/products/504404.jpg",
    category: "Pan de Pancho",
    unit: "paquete",
    sku: "504404",
    vida_util: "28 días",
    brand: "Fargo",
    featured: false
  },
  {
    id: "504142",
    name: "Pan con Semillas Lactal 330g",
    description: "Pan con Semillas Lactal de 330g.",
    image: "images/products/504142.jpg",
    category: "Pan de Molde",
    unit: "paquete",
    sku: "504142",
    vida_util: "28 días",
    brand: "Lactal",
    featured: false
  },
  {
    id: "4509",
    name: "Pan Salvado Lactal 560g",
    description: "Pan Salvado Lactal de 560g.",
    image: "images/products/4509.jpg",
    category: "Pan de Molde",
    unit: "paquete",
    sku: "4509",
    vida_util: "28 días",
    brand: "Lactal",
    featured: false
  },
  {
    id: "4462",
    name: "Pan Salvado Lactal 330g",
    description: "Pan Salvado Lactal de 330g.",
    image: "images/products/4462.jpg",
    category: "Pan de Molde",
    unit: "paquete",
    sku: "4462",
    vida_util: "28 días",
    brand: "Lactal",
    featured: false
  },
  {
    id: "4461",
    name: "Pan Blanco Lactal 315g",
    description: "Pan Blanco Lactal de 315g.",
    image: "images/products/4461.jpg",
    category: "Pan de Molde",
    unit: "paquete",
    sku: "4461",
    vida_util: "28 días",
    brand: "Lactal",
    featured: false
  },
  {
    id: "2927",
    name: "Pan Blanco Lactal 460g",
    description: "Pan Blanco Lactal de 460g.",
    image: "images/products/2927.jpg",
    category: "Pan de Molde",
    unit: "paquete",
    sku: "2927",
    vida_util: "28 días",
    brand: "Lactal",
    featured: false
  },
  {
    id: "5520",
    name: "Pan para Hamburguesa Lactal 4u",
    description: "Pan para Hamburguesa Lactal de 4 unidades.",
    image: "images/products/5520.jpg",
    category: "Pan de Hamburguesa",
    unit: "paquete",
    sku: "5520",
    vida_util: "28 días",
    brand: "Lactal",
    featured: false
  },
  {
    id: "5295",
    name: "Pan de Pancho Lactal 6u",
    description: "Pan de Pancho Lactal de 6 unidades.",
    image: "images/products/5295.jpg",
    category: "Pan de Pancho",
    unit: "paquete",
    sku: "5295",
    vida_util: "28 días",
    brand: "Lactal",
    featured: false
  },
  {
    id: "504147",
    name: "Pan con Semillas Briosh 330g",
    description: "Pan con Semillas Briosh de 330g.",
    image: "images/products/504147.jpg",
    category: "Pan de Molde",
    unit: "paquete",
    sku: "504147",
    vida_util: "28 días",
    brand: "Briosh",
    featured: false
  },
  {
    id: "504152",
    name: "Pan Salvado Briosh 330g",
    description: "Pan Salvado Briosh de 330g.",
    image: "images/products/504152.jpg",
    category: "Pan de Molde",
    unit: "paquete",
    sku: "504152",
    vida_util: "28 días",
    brand: "Briosh",
    featured: false
  },
  {
    id: "504145",
    name: "Pan Blanco Briosh 315g",
    description: "Pan Blanco Briosh de 315g.",
    image: "images/products/504145.jpg",
    category: "Pan de Molde",
    unit: "paquete",
    sku: "504145",
    vida_util: "28 días",
    brand: "Briosh",
    featured: false
  },
  {
    id: "504151",
    name: "Pan para Hamburguesa Briosh 4u",
    description: "Pan para Hamburguesa Briosh de 4 unidades.",
    image: "images/products/504151.jpg",
    category: "Pan de Hamburguesa",
    unit: "paquete",
    sku: "504151",
    vida_util: "28 días",
    brand: "Briosh",
    featured: false
  },
  {
    id: "504144",
    name: "Pan para Pancho Largo Briosh 6u",
    description: "Pan para Pancho Largo Briosh de 6 unidades.",
    image: "images/products/504144.jpg",
    category: "Pan de Pancho",
    unit: "paquete",
    sku: "504144",
    vida_util: "28 días",
    brand: "Briosh",
    featured: false
  },
  {
    id: "504148",
    name: "Pan para Pancho Briosh 6u",
    description: "Pan para Pancho Briosh de 6 unidades.",
    image: "images/products/504148.jpg",
    category: "Pan de Pancho",
    unit: "paquete",
    sku: "504148",
    vida_util: "28 días",
    brand: "Briosh",
    featured: false
  },

];

// === DEBUG: Mostrar marcas únicas en consola ===
(function() {
  const brands = products.map(p => p.brand).filter(Boolean);
  const uniqueBrands = [...new Set(brands)].sort();
  console.log('[DEBUG] Marcas únicas encontradas en products.js:', uniqueBrands);
})();