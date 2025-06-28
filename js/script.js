// js/script.js

// 1. Importar los productos desde el archivo products.js
import products from './products.js';

document.addEventListener('DOMContentLoaded', () => {

    // =====================================
    // 1. Funcionalidad de la Barra de Promoción
    // =====================================
    const promoBar = document.getElementById('promo-bar');
    const closePromoBarBtn = document.querySelector('.close-promo-bar');

    if (promoBar && closePromoBarBtn) {
        // Muestra la promo bar después de un breve retraso para simular carga
        // Puedes quitar esto si quieres que siempre esté visible al cargar
        setTimeout(() => {
            promoBar.classList.add('active');
        }, 1000); // Muestra después de 1 segundo

        closePromoBarBtn.addEventListener('click', () => {
            promoBar.classList.remove('active');
        });
    }


    // =====================================
    // 2. Funcionalidad del Menú de Navegación Responsive (Hamburguesa)
    // =====================================
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active'); // Para la animación de la hamburguesa a cruz
        });

        // Cierra el menú si se hace clic fuera de él
        document.addEventListener('click', (event) => {
            if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                }
            }
        });

        // Cierra el menú al hacer clic en un enlace (para navegación interna)
        navMenu.querySelectorAll('a').forEach(link => {
            // Asegurarse de no cerrar el menú si se hace clic en el icono del carrito
            if (link.id !== 'open-cart-modal') {
                link.addEventListener('click', () => {
                    if (navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                        navToggle.classList.remove('active');
                    }
                });
            }
        });
    }


    // =====================================
    // 3. Funcionalidad del Carrusel de Imágenes
    // =====================================
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselImages = document.querySelectorAll('.carousel-slide img');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    const dotsContainer = document.querySelector('.carousel-dots');

    if (carouselSlide && carouselImages.length > 0 && carouselContainer && dotsContainer) {
        let currentIndex = 0;
        const totalImages = carouselImages.length;
        let autoSlideInterval;

        function getSlideWidth() { return carouselContainer.clientWidth; }
        function updateCarouselPosition() {
            const slideWidth = getSlideWidth();
            carouselSlide.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
            updateDots();
        }
        function goToNextSlide() {
            currentIndex = (currentIndex + 1) % totalImages;
            updateCarouselPosition();
        }
        function goToPrevSlide() {
            currentIndex = (currentIndex - 1 + totalImages) % totalImages;
            updateCarouselPosition();
        }
        function createDots() {
            dotsContainer.innerHTML = '';
            for (let i = 0; i < totalImages; i++) {
                const dot = document.createElement('span');
                dot.classList.add('dot');
                dot.dataset.index = i;
                dotsContainer.appendChild(dot);
                dot.addEventListener('click', (e) => {
                    currentIndex = parseInt(e.target.dataset.index);
                    updateCarouselPosition();
                    resetAutoSlide();
                });
            }
            updateDots();
        }
        function updateDots() {
            document.querySelectorAll('.carousel-dots .dot').forEach((dot, index) => {
                if (index === currentIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }
        function startAutoSlide() {
            stopAutoSlide();
            autoSlideInterval = setInterval(goToNextSlide, 4000);
        }
        function stopAutoSlide() {
            clearInterval(autoSlideInterval);
        }
        function resetAutoSlide() {
            stopAutoSlide();
            startAutoSlide();
        }

        function initCarousel() {
            createDots();
            updateCarouselPosition();
            startAutoSlide();
        }

        let imagesLoadedCount = 0;
        carouselImages.forEach(img => {
            if (img.complete) {
                imagesLoadedCount++;
            } else {
                img.addEventListener('load', () => {
                    imagesLoadedCount++;
                    if (imagesLoadedCount === totalImages) {
                        initCarousel();
                    }
                });
            }
        });
        // Si todas las imágenes ya están en caché (cargadas), inicializa inmediatamente
        if (imagesLoadedCount === totalImages) {
            initCarousel();
        }


        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                goToNextSlide();
                resetAutoSlide();
            });
        }
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                goToPrevSlide();
                resetAutoSlide();
            });
        }
        carouselContainer.addEventListener('mouseenter', stopAutoSlide);
        carouselContainer.addEventListener('mouseleave', startAutoSlide);
        window.addEventListener('resize', () => {
            updateCarouselPosition();
            resetAutoSlide();
        });
    }

    // =====================================
    // 4. Lógica del Carrito de Solicitud (WhatsApp)
    // =====================================
    const cartCountSpan = document.getElementById('cart-count');
    const openCartModalBtn = document.getElementById('open-cart-modal');
    const closeCartModalBtn = document.getElementById('close-cart-modal');
    const cartModalOverlay = document.getElementById('cart-modal-overlay');
    const cartItemsContainer = document.getElementById('cart-items');
    const clearCartBtn = document.getElementById('clear-cart-btn');
    const sendWhatsappBtn = document.getElementById('send-whatsapp-btn');

    // Número de WhatsApp al que se enviará el pedido
    const WHATSAPP_NUMBER = "+5492635000318"; // Reemplaza con tu número de WhatsApp real (código de país + número)

    let cart = JSON.parse(localStorage.getItem('whatsappCart')) || [];

    // Actualizar el contador del carrito en la navegación (por artículos distintos)
    function updateCartCount() {
        const totalItems = cart.length; // Solo cuenta artículos distintos
        cartCountSpan.textContent = totalItems;
        cartCountSpan.style.display = totalItems > 0 ? 'flex' : 'none';
        // Actualiza también el FAB
        const fabCartCount = document.getElementById('fab-cart-count');
        if (fabCartCount) {
            fabCartCount.textContent = totalItems;
            fabCartCount.style.display = totalItems > 0 ? 'flex' : 'none';
        }
    }

    // Guardar el carrito en localStorage
    function saveCart() {
        localStorage.setItem('whatsappCart', JSON.stringify(cart));
        updateCartCount();
    }

    // Añadir/Incrementar producto en el carrito
    function addToCart(productId, quantity) { // Ahora recibe la cantidad
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += quantity; // Suma la cantidad proporcionada
        } else {
            const product = products.find(p => p.id === productId);
            if (product) {
                cart.push({
                    id: product.id,
                    name: product.name,
                    image: product.image,
                    sku: product.sku, // <-- Agregar sku para que la miniatura funcione
                    unit: product.unit,
                    quantity: quantity // Usa la cantidad proporcionada
                });
            }
        }
        saveCart();
        renderCartItems(); // Re-renderiza el carrito cuando se añade un producto
    }


    // Cambiar la cantidad de un producto en el carrito
    function updateCartItemQuantity(productId, newQuantity) {
        const item = cart.find(item => item.id === productId);
        if (item) {
            if (newQuantity <= 0) {
                removeFromCart(productId);
            } else {
                item.quantity = newQuantity;
            }
        }
        saveCart();
        renderCartItems();
    }

    // Eliminar producto del carrito
    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        saveCart();
        renderCartItems();
    }

    // Vaciar todo el carrito
    function clearCart() {
        cart = [];
        saveCart();
        renderCartItems();
        // Cierra el modal después de vaciarlo
        cartModalOverlay.classList.remove('active');
    }

    // Utilidad para obtener la imagen de producto con fallback controlado
    function createProductImage(product, size = 'card') {
        let imgSrc = '';
        if (product.image && product.image.trim() !== '') {
            imgSrc = product.image;
        } else if (product.sku) {
            imgSrc = `images/products/${product.sku}.jpg`;
        } else {
            imgSrc = 'images/no-image.png';
        }
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = product.name;
        if (size === 'popup') {
            img.className = 'popup-product-img';
        } else {
            img.className = 'cart-product-img';
        }
        let triedJpg = imgSrc.endsWith('.jpg');
        let triedPng = false;
        let triedDefault = false;
        img.onerror = function () {
            // Si ya probó .jpg, prueba .png
            if (!triedPng && product.sku) {
                img.src = `images/products/${product.sku}.png`;
                triedPng = true;
            } else if (!triedDefault) {
                img.src = 'images/no-image.png';
                triedDefault = true;
            }
        };
        // Debug: mostrar en consola la ruta y el producto
        console.log('[createProductImage] Producto:', product, 'Intentando mostrar:', img.src);
        return img;
    }

    // Renderizar los productos dentro del modal del carrito
    function renderCartItems() {
        if (!cartItemsContainer) return;
        cartItemsContainer.innerHTML = '';
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-cart-message">Tu carrito está vacío.</p>';
            sendWhatsappBtn.disabled = true;
            clearCartBtn.disabled = true;
            return;
        }
        sendWhatsappBtn.disabled = false;
        clearCartBtn.disabled = false;
        cart.forEach(item => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.className = 'cart-item';
            cartItemDiv.style.display = 'flex';
            cartItemDiv.style.alignItems = 'center';
            // Imagen con fallback
            const img = createProductImage(item, 'cart');
            cartItemDiv.appendChild(img);
            cartItemDiv.innerHTML += `
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p>Unidad: ${item.unit}</p>
                </div>
                <div class="cart-item-quantity-control">
                    <button class="quantity-btn decrease-quantity" data-id="${item.id}">-</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-id="${item.id}">
                    <button class="quantity-btn increase-quantity" data-id="${item.id}">+</button>
                </div>
                <button class="remove-item-btn" data-id="${item.id}">Eliminar</button>
            `;
            cartItemsContainer.appendChild(cartItemDiv);
        });

        // Añadir event listeners para los controles de cantidad y eliminar
        cartItemsContainer.querySelectorAll('.decrease-quantity').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = e.target.dataset.id;
                const input = e.target.nextElementSibling;
                let newQuantity = parseInt(input.value) - 1;
                updateCartItemQuantity(productId, newQuantity);
            });
        });

        cartItemsContainer.querySelectorAll('.increase-quantity').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = e.target.dataset.id;
                const input = e.target.previousElementSibling;
                let newQuantity = parseInt(input.value) + 1;
                updateCartItemQuantity(productId, newQuantity);
            });
        });

        cartItemsContainer.querySelectorAll('.quantity-input').forEach(input => {
            input.addEventListener('change', (e) => {
                const productId = e.target.dataset.id;
                let newQuantity = parseInt(e.target.value);
                if (isNaN(newQuantity) || newQuantity < 1) { // Asegura que sea un número válido y positivo
                    e.target.value = cart.find(item => item.id === productId).quantity; // Restaura la cantidad anterior
                } else {
                    updateCartItemQuantity(productId, newQuantity);
                }
            });
        });

        cartItemsContainer.querySelectorAll('.remove-item-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = e.target.dataset.id;
                removeFromCart(productId);
            });
        });
    }

    // Abrir/Cerrar Modal del Carrito
    openCartModalBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Evita que el enlace de navegación haga scroll
        cartModalOverlay.classList.add('active');
        renderCartItems(); // Renderiza los items cada vez que se abre el modal
    });

    closeCartModalBtn.addEventListener('click', () => {
        cartModalOverlay.classList.remove('active');
    });

    // Cierra el modal si se hace clic fuera del contenido
    cartModalOverlay.addEventListener('click', (e) => {
        if (e.target === cartModalOverlay) {
            cartModalOverlay.classList.remove('active');
        }
    });

    // Vaciar carrito desde el modal
    clearCartBtn.addEventListener('click', clearCart);

    // Generar mensaje de WhatsApp
    sendWhatsappBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Tu carrito está vacío. Por favor, añade productos antes de enviar el pedido.');
            return;
        }

        let message = "¡Hola! Quisiera realizar el siguiente pedido de Grupo Ocampo:\n\n";
        cart.forEach((item, index) => {
            message += `${index + 1}. ${item.name} (${item.quantity} ${item.unit})\n`;
        });
        message += "\nPor favor, contáctenme para coordinar la entrega y el pago. ¡Gracias!";

        const encodedMessage = encodeURIComponent(message);
        // Para escritorio: web.whatsapp.com, para móvil: api.whatsapp.com
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank'); // Abre en una nueva pestaña
        clearCart(); // Opcional: Vaciar el carrito después de enviar el pedido
    });

    // Inicializar contador del carrito al cargar la página
    updateCartCount();

    // =====================================
    // 5. Catálogo de Productos Dinámico (con buscador y filtros)
    // =====================================
    const productGrid = document.getElementById('product-grid');
    const productSearchInput = document.getElementById('product-search');
    const categoryFilterSelect = document.getElementById('category-filter');

    let currentSearchTerm = '';
    let currentCategoryFilter = 'all';
    let currentBrandFilter = '';

    // Función para renderizar un solo producto
    function createProductCard(product) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.dataset.id = product.id;

        // Imagen: usa la utilidad para obtener el elemento img
        const img = createProductImage(product, 'card');
        const infoDiv = document.createElement('div');
        infoDiv.className = 'product-info';
        infoDiv.innerHTML = `
            <h4 class="product-brand">${product.brand}</h4>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-sku">SKU: ${product.sku || 'N/A'}</p>
            <p class="product-lifespan">Vida Útil: ${product.vida_util || 'No especificado'}</p>
            <div class="product-quantity-control">
                <input type="number" class="quantity-input-card" value="1" min="1" data-id="${product.id}">
            </div>
            <button class="add-to-cart-btn" data-product-id="${product.id}">Agregar a Solicitud</button>
        `;

        productCard.appendChild(img);
        productCard.appendChild(infoDiv);

        // Elimina listeners de + y -
        const quantityInput = productCard.querySelector('.quantity-input-card');
        const addToCartButton = productCard.querySelector('.add-to-cart-btn');
        if (quantityInput) {
            quantityInput.addEventListener('change', () => {
                let value = parseInt(quantityInput.value);
                if (isNaN(value) || value < 1) {
                    quantityInput.value = 1;
                }
            });
        }
        addToCartButton.addEventListener('click', () => {
            const quantity = parseInt(quantityInput.value);
            const productId = addToCartButton.dataset.productId;
            const productToAdd = products.find(p => p.id === productId);

            if (productToAdd) {
                // Llama a la función addToCart global con la cantidad
                addToCart(productId, quantity);

                alert(`Se agregaron ${quantity} ${productToAdd.unit} de "${productToAdd.name}" a tu solicitud.`);
                quantityInput.value = 1; // Resetear la cantidad a 1 después de agregar
            }
        });
        productCard.addEventListener('click', (e) => {
            if (e.target.closest('.add-to-cart-btn, .quantity-btn, .quantity-input-card')) return;
            showProductPopup(product);
        });
        return productCard;
    }

    // Función para renderizar todos los productos aplicando filtros y búsqueda
    function renderProducts() {
        if (!productGrid) return;
        productGrid.innerHTML = '';
        // Filtrar productos
        const filteredProducts = products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
                                  product.description.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
                                  product.brand.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
                                  (product.sku && product.sku.toLowerCase().includes(currentSearchTerm.toLowerCase()));
            const matchesCategory = currentCategoryFilter === 'all' || product.category === currentCategoryFilter;
            const matchesBrand = !currentBrandFilter || product.brand === currentBrandFilter;
            return matchesSearch && matchesCategory && matchesBrand;
        });
        if (filteredProducts.length === 0) {
            productGrid.innerHTML = '<p style="text-align: center; width: 100%; padding: 50px; color: #888;">No se encontraron productos que coincidan con tu búsqueda o filtros.</p>';
            return;
        }
        filteredProducts.forEach(product => {
            const card = createProductCard(product);
            productGrid.appendChild(card);
        });
    }

    // Generar opciones de categoría para el filtro
    function populateCategoryFilter() {
        const categories = [...new Set(products.map(product => product.category))].sort(); // Obtener categorías únicas y ordenar
        if (categoryFilterSelect) {
            // Ya tiene la opción "Todas las categorías"
            categories.forEach(category => {
                const option = document.createElement('option');
                option.value = category;
                option.textContent = category;
                categoryFilterSelect.appendChild(option);
            });
        }
    }

    // === FILTRO DE MARCA ===
    (function() {
      const brands = products.map(p => p.brand).filter(Boolean);
      const uniqueBrands = [...new Set(brands)].sort();
      const container = document.getElementById('brand-filter-container');
      if (!container) return;
      container.innerHTML = '';
      const allBtn = document.createElement('button');
      allBtn.className = 'brand-btn active';
      allBtn.textContent = 'Todas';
      allBtn.setAttribute('data-brand', '');
      container.appendChild(allBtn);
      uniqueBrands.forEach(brand => {
        const btn = document.createElement('button');
        btn.className = 'brand-btn';
        btn.textContent = brand;
        btn.setAttribute('data-brand', brand);
        container.appendChild(btn);
      });
      container.addEventListener('click', function(e) {
        if (e.target.classList.contains('brand-btn')) {
          document.querySelectorAll('.brand-btn').forEach(btn => btn.classList.remove('active'));
          e.target.classList.add('active');
          currentBrandFilter = e.target.getAttribute('data-brand') || '';
          renderProducts();
        }
      });
    })();

    // Event listener para el buscador
    if (productSearchInput) {
        productSearchInput.addEventListener('input', (e) => {
            currentSearchTerm = e.target.value;
            renderProducts();
        });
    }

    // Event listener para el filtro de categoría
    if (categoryFilterSelect) {
        categoryFilterSelect.addEventListener('change', (e) => {
            currentCategoryFilter = e.target.value;
            renderProducts();
        });
    }

    // Inicializar la página: poblar filtros y renderizar productos
    populateCategoryFilter();
    renderProducts(); // Primera renderización al cargar la página

    // --- Popup flotante para info de producto ---
    function showProductPopup(product) {
        if (document.querySelector('.product-popup-overlay')) return;
        const overlay = document.createElement('div');
        overlay.className = 'product-popup-overlay';
        const img = createProductImage(product, 'popup');
        const popup = document.createElement('div');
        popup.className = 'product-popup';
        popup.innerHTML = `
            <button class="product-popup-close" aria-label="Cerrar">&times;</button>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
        `;
        popup.insertBefore(img, popup.querySelector('h3'));
        overlay.appendChild(popup);
        document.body.appendChild(overlay);
        overlay.querySelector('.product-popup-close').onclick = () => overlay.remove();
        overlay.onclick = (e) => { if (e.target === overlay) overlay.remove(); };
    }

    // === FAB flotante del carrito ===
    const fabCartBtn = document.getElementById('fab-cart-btn');
    const fabCartCount = document.getElementById('fab-cart-count');

    function updateFabCartCount() {
        const totalItems = cart.length; // Solo cuenta artículos distintos
        fabCartCount.textContent = totalItems;
        fabCartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }

    if (fabCartBtn) {
        fabCartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            cartModalOverlay.classList.add('active');
            if (typeof renderCartItems === 'function') renderCartItems();
        });
    }

    // Actualiza el contador del FAB cada vez que se actualiza el carrito
    const originalUpdateCartCount = updateCartCount;
    updateCartCount = function() {
        originalUpdateCartCount();
        updateFabCartCount();
    };
    // Inicializa el contador del FAB al cargar
    updateFabCartCount();
});

// Eliminar bloque duplicado y logs de depuración del filtro de marca al final del archivo