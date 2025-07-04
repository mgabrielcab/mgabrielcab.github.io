// js/catalogo.js

// Declara cart globalmente para que sea accesible por todas las funciones del carrito
let cart = [];

// Funciones del carrito (MOVIDAS AL ÁMBITO GLOBAL)
function addToCart(product, cantidad) {
    const idx = cart.findIndex(item => item.id === product.id);
    if (idx !== -1) {
        cart[idx].cantidad += cantidad;
    } else {
        cart.push({ id: product.id, sku: product.sku, name: product.name, cantidad, image: product.image });
    }
    saveCart();
    renderCartButton();
    showAddToCartFeedback(product.name);
    playAddToCartSound();
}

let addToCartAudio = null;
function playAddToCartSound() {
    if (!addToCartAudio) {
        addToCartAudio = new Audio('js/add-to-cart.mp3');
        addToCartAudio.volume = 0.25;
    }
    addToCartAudio.currentTime = 0;
    addToCartAudio.play();
}

function showAddToCartFeedback(nombre) {
    let feedback = document.createElement('div');
    feedback.textContent = `✔ ${nombre} agregado al carrito`;
    feedback.style.position = 'fixed';
    feedback.style.bottom = '90px';
    feedback.style.right = '32px';
    feedback.style.background = '#25d366';
    feedback.style.color = '#fff';
    feedback.style.fontWeight = '700';
    feedback.style.padding = '13px 28px';
    feedback.style.borderRadius = '30px';
    feedback.style.boxShadow = '0 2px 12px rgba(37,211,102,0.13)';
    feedback.style.fontSize = '1.08em';
    feedback.style.zIndex = '3000';
    feedback.style.opacity = '0';
    feedback.style.transition = 'opacity 0.18s, transform 0.18s';
    document.body.appendChild(feedback);
    setTimeout(() => {
        feedback.style.opacity = '1';
        feedback.style.transform = 'translateY(-10px)';
    }, 10);
    setTimeout(() => {
        feedback.style.opacity = '0';
        feedback.style.transform = 'translateY(0)';
        setTimeout(() => document.body.removeChild(feedback), 300);
    }, 1400);
}

function saveCart() {
    localStorage.setItem('catalogo_cart', JSON.stringify(cart));
}

function loadCart() {
    const data = localStorage.getItem('catalogo_cart');
    if (data) {
        try {
            cart = JSON.parse(data);
        } catch (e) {
            cart = [];
        }
    }
}

function renderCartButton() {
    let btn = document.getElementById('catalogo-cart-btn');
    if (!btn) {
        btn = document.createElement('button');
        btn.id = 'catalogo-cart-btn';
        btn.className = 'catalogo-cart-float';
        btn.innerHTML = '<i class="fas fa-shopping-cart"></i> <span id="catalogo-cart-count">0</span> Carrito';
        document.body.appendChild(btn);
    }
    // Asegúrate de que el evento onclick esté asignado a la función global
    btn.onclick = showCartModal;
    document.getElementById('catalogo-cart-count').textContent = cart.length;
}

function showCartModal() {
    let modal = document.getElementById('catalogo-cart-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'catalogo-cart-modal';
        modal.className = 'catalogo-modal';
        modal.innerHTML = `
            <div class="catalogo-modal-bg"></div>
            <div class="catalogo-modal-content">
                <div class="catalogo-modal-header">
                    <span><i class="fas fa-shopping-cart"></i> Carrito de compras</span>
                    <button class="catalogo-modal-close" aria-label="Cerrar">&times;</button>
                </div>
                <div id="catalogo-cart-list"></div>
                <div class="catalogo-modal-footer">
                    <div class="cart-total-row">
                        <span>Total de productos:</span>
                        <span id="cart-total-items">0</span>
                    </div>
                    <button id="catalogo-cart-whatsapp" class="catalogo-cart-btn">
                        <i class="fab fa-whatsapp"></i> Enviar pedido por WhatsApp
                    </button>
                    <button id="catalogo-cart-vaciar" class="catalogo-cart-vaciar">Vaciar carrito</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        modal.querySelector('.catalogo-modal-close').onclick = closeCartModal;
        modal.querySelector('.catalogo-modal-bg').onclick = closeCartModal;
    } else {
        // Asegura que los listeners se reasignen si el modal ya existe pero fueron perdidos
        modal.querySelector('.catalogo-modal-close').onclick = closeCartModal;
        modal.querySelector('.catalogo-modal-bg').onclick = closeCartModal;
    }
    renderCartList();
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeCartModal() {
    let modal = document.getElementById('catalogo-cart-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

function renderCartList() {
    const listDiv = document.getElementById('catalogo-cart-list');
    if (!listDiv) {
        console.error("El elemento #catalogo-cart-list no se encontró.");
        return;
    }

    if (!cart.length) {
        listDiv.innerHTML = '<div class="catalogo-cart-empty">El carrito está vacío.</div>';
        document.getElementById('cart-total-items').textContent = '0';
        document.getElementById('catalogo-cart-whatsapp').disabled = true;
        document.getElementById('catalogo-cart-vaciar').disabled = true;
        return;
    }
    let html = '<ul>' + cart.map((item, idx) => `
        <li>
            <img src="${item.image}" alt="${item.name}" onerror="this.src='images/placeholder.png'">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-sku">SKU: ${item.sku}</div>
                <div class="cart-item-cantidad">Cantidad: <input type="number" min="1" value="${item.cantidad}" data-idx="${idx}" class="cart-cantidad-input" style="width:48px;padding:2px 4px;border-radius:4px;border:1px solid #bbb;font-size:1em;text-align:center;"> </div>
            </div>
            <button class="cart-item-remove" title="Eliminar" onclick="removeFromCart(${idx})"><i class="fas fa-trash-alt"></i></button>
        </li>
    `).join('') + '</ul>';
    listDiv.innerHTML = html;
    document.getElementById('cart-total-items').textContent = cart.reduce((a, b) => a + b.cantidad, 0);
    document.getElementById('catalogo-cart-whatsapp').disabled = false;
    document.getElementById('catalogo-cart-vaciar').disabled = false;

    const whatsappBtn = document.getElementById('catalogo-cart-whatsapp');
    if (whatsappBtn) {
        whatsappBtn.onclick = function() {
            if (!cart.length) return;
            const msg = cart.map(item => `• ${item.name} (SKU: ${item.sku}) x ${item.cantidad}`).join('%0A');
            const url = `https://wa.me/5492635000318?text=Hola!%20Quiero%20hacer%20un%20pedido:%0A${msg}`;
            window.open(url, '_blank');
        };
    }

    const vaciarBtn = document.getElementById('catalogo-cart-vaciar');
    if (vaciarBtn) {
        vaciarBtn.onclick = showVaciarConfirm;
    }

    listDiv.querySelectorAll('.cart-cantidad-input').forEach(input => {
        input.addEventListener('change', function() {
            let val = parseInt(this.value, 10);
            if (isNaN(val) || val < 1) val = 1;
            cart[this.dataset.idx].cantidad = val;
            saveCart();
            renderCartList();
            renderCartButton();
        });
    });
}

function showVaciarConfirm() {
    const modal = document.getElementById('catalogo-cart-modal');
    const confirmDiv = document.createElement('div');
    confirmDiv.style.position = 'fixed';
    confirmDiv.style.top = '0';
    confirmDiv.style.left = '0';
    confirmDiv.style.width = '100vw';
    confirmDiv.style.height = '100vh';
    confirmDiv.style.background = 'rgba(0,0,0,0.32)';
    confirmDiv.style.display = 'flex';
    confirmDiv.style.alignItems = 'center';
    confirmDiv.style.justifyContent = 'center';
    confirmDiv.style.zIndex = '2000';
    confirmDiv.innerHTML = `
      <div style="background:#fff;padding:2em 2.2em;border-radius:14px;box-shadow:0 4px 24px rgba(0,0,0,0.18);text-align:center;max-width:320px;">
        <div style="font-size:1.25em;font-weight:700;margin-bottom:1em;color:#d32f2f;"><i class='fas fa-exclamation-triangle'></i> Vaciar carrito</div>
        <div style="margin-bottom:1.2em;">¿Estás seguro que deseas vaciar el carrito?</div>
        <button id="confirm-vaciar-si" style="background:#d32f2f;color:#fff;font-weight:700;padding:8px 22px;border:none;border-radius:7px;margin-right:10px;cursor:pointer;">Sí, vaciar</button>
        <button id="confirm-vaciar-no" style="background:#eee;color:#222;font-weight:600;padding:8px 22px;border:none;border-radius:7px;cursor:pointer;">Cancelar</button>
      </div>
    `;
    document.body.appendChild(confirmDiv);
    document.getElementById('confirm-vaciar-si').onclick = function() {
        cart = [];
        saveCart();
        renderCartButton();
        renderCartList();
        document.body.removeChild(confirmDiv);
    };
    document.getElementById('confirm-vaciar-no').onclick = function() {
        document.body.removeChild(confirmDiv);
    };
}

// Hacer removeFromCart global para que los botones de eliminar puedan llamarla
window.removeFromCart = function(idx) {
    cart.splice(idx, 1);
    saveCart();
    renderCartButton();
    renderCartList();
};

// Accesibilidad: cerrar modales con Escape y navegación por teclado (Mover al ámbito global)
function setupModalAccessibility() {
    document.addEventListener('keydown', function(e) {
        const cartModal = document.getElementById('catalogo-cart-modal');
        const catalogModal = document.getElementById('catalog-modal'); // También para el modal del catálogo

        if (cartModal && cartModal.style.display === 'flex') {
            if (e.key === 'Escape' || e.key === 'Esc') closeCartModal();
            const focusable = cartModal.querySelectorAll('button, [tabindex]:not([tabindex="-1"])');
            if (e.key === 'Tab' && focusable.length) {
                const first = focusable[0];
                const last = focusable[focusable.length - 1];
                if (e.shiftKey && document.activeElement === first) {
                    last.focus();
                    e.preventDefault();
                } else if (!e.shiftKey && document.activeElement === last) {
                    first.focus();
                    e.preventDefault();
                }
            }
        } else if (catalogModal && catalogModal.style.display === 'flex') {
            if (e.key === 'Escape' || e.key === 'Esc') closeModal(); // Suponiendo que closeModal es global o accesible
            // Puedes añadir lógica de focus trap similar para el modal del catálogo si es necesario
        }
    });
}
setupModalAccessibility(); // Llama a la función para configurar la accesibilidad


document.addEventListener('DOMContentLoaded', function () {
    // La variable 'products' debe ser definida en 'products.js'
    // Con 'defer' en los scripts, products.js debería ejecutarse antes de DOMContentLoaded
    // pero siempre es buena práctica verificar.
    if (typeof products === 'undefined') {
        console.error('[ERROR] La variable products no está definida. Asegúrate de que products.js se cargue correctamente.');
        // No se puede continuar con la lógica del catálogo si products no está definido.
        // Las funciones del carrito sí pueden inicializarse sin products, pero renderCartList
        // usará los datos guardados si existen.
    }

    const grid = document.getElementById('catalog-grid');
    const modal = document.getElementById('catalog-modal');
    const modalBody = document.getElementById('catalog-modal-body');
    const modalClose = document.querySelector('.catalogo-modal-close');

    // Mover las definiciones de funciones del catálogo fuera de aquí si son globales.
    // Si openModal, closeModal, renderCatalog, etc. no son globales, se definen aquí.

    // Solo productos Bimbo y asociados
    const bimboBrands = ['Bimbo','Artesano','Tía Rosa','Oroweat','Fargo','Lactal','Briosh'];
    // Asegurarse de que products esté definido antes de usarlo para filtrar
    const bimboProducts = (typeof products !== 'undefined') ? products.filter(p => bimboBrands.includes(p.brand)) : [];

    // Categorías únicas
    const categories = Array.from(new Set(bimboProducts.map(p => p.category))).sort();
    const categoryButtonsContainer = document.getElementById('catalog-category-buttons');
    const categorySelect = document.getElementById('catalog-category-select');

    // Crear botones de categorías y llenar el select móvil
    function renderCategoryButtons(categories) {
        if (!categoryButtonsContainer) return; // Asegurar que el contenedor exista

        categoryButtonsContainer.innerHTML = '';
        const allBtn = document.createElement('button');
        allBtn.className = 'catalogo-cat-btn active';
        allBtn.textContent = 'Todas';
        allBtn.dataset.category = '';
        categoryButtonsContainer.appendChild(allBtn);

        if (categorySelect) {
            categorySelect.innerHTML = '';
            const allOpt = document.createElement('option');
            allOpt.value = '';
            allOpt.textContent = 'Todas';
            categorySelect.appendChild(allOpt);
        }
        categories.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = 'catalogo-cat-btn';
            btn.textContent = cat;
            btn.dataset.category = cat;
            categoryButtonsContainer.appendChild(btn);
            if (categorySelect) {
                const opt = document.createElement('option');
                opt.value = cat;
                opt.textContent = cat;
                categorySelect.appendChild(opt);
            }
        });
    }

    // Funciones del modal de producto (mantenerlas dentro de DOMContentLoaded si no son globales)
    function openModal(product) {
        modalBody.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="catalogo-modal-img">
            <div class="catalogo-modal-title">${product.name}</div>
            <div class="catalogo-modal-desc">${product.description}</div>
            <div class="catalogo-modal-meta">
                <span><i class="fas fa-tag"></i> Marca: ${product.brand}</span>
                <span><i class="fas fa-barcode"></i> SKU: ${product.sku}</span>
                <span><i class="fas fa-box"></i> Unidad: ${product.unit}</span>
                <span><i class="fas fa-hourglass-half"></i> Vida útil: ${product.vida_util}</span>
            </div>
            <div class="catalogo-modal-cart">
                <label for="catalogo-cantidad" style="font-weight:600;margin-right:8px;">Cantidad:</label>
                <input type="number" id="catalogo-cantidad" min="1" value="1" style="width:60px;padding:4px 6px;border-radius:5px;border:1px solid #bbb;">
                <button id="catalogo-add-cart" class="catalogo-cart-btn" style="margin-left:14px;padding:7px 18px;background:#007BFF;color:#fff;border:none;border-radius:6px;font-weight:700;cursor:pointer;">Agregar al carrito</button>
            </div>
        `;
        const modalImg = modalBody.querySelector('.catalogo-modal-img');
        modalImg.onerror = function() {
          this.onerror = null;
          this.src = 'images/placeholder.png';
          this.alt = 'Imagen no disponible';
        };
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        document.getElementById('catalogo-add-cart').onclick = function() {
            const cantidad = parseInt(document.getElementById('catalogo-cantidad').value, 10) || 1;
            addToCart(product, cantidad);
            closeModal();
        };
    }
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
    modalClose.addEventListener('click', closeModal);
    modal.querySelector('.catalogo-modal-bg').addEventListener('click', closeModal);
    document.addEventListener('keydown', function(e) {
        if (modal.style.display === 'flex' && (e.key === 'Escape' || e.key === 'Esc')) closeModal();
    });

    // Función para renderizar el catálogo (mantenerla aquí si es interna al DOMContentLoaded)
    function renderCatalog(list) {
        if (!grid) return; // Asegurar que el grid exista

        grid.innerHTML = '';
        if (!list.length) {
            grid.innerHTML = '<p>No se encontraron productos.</p>';
            return;
        }
        const catalogGrid = document.createElement('div');
        catalogGrid.className = 'catalogo-grid';
        list.forEach(product => {
            const card = document.createElement('div');
            card.className = 'catalogo-card';
            card.tabIndex = 0;
            card.setAttribute('role', 'button');
            card.setAttribute('aria-label', `Ver detalles de ${product.name}`);
            card.innerHTML = `
                <span class="catalogo-badge-marca" style="background:transparent;padding:0;margin:0;position:absolute;top:10px;left:10px;z-index:2;">
                    <img src="images/marca/${product.brand.toLowerCase().replace(/\s/g, '').normalize('NFD').replace(/[\u0300-\u036f]/g, '')}.png" alt="${product.brand}" class="catalogo-badge-marca-logo" onerror="this.style.display='none';this.parentNode.textContent='${product.brand}';" style="height:24px;width:auto;max-width:60px;display:block;" />
                </span>
                <div class="catalogo-img-block">
                    <img src="${product.image}" alt="${product.name}" class="catalogo-img" loading="lazy">
                </div>
                <div class="catalogo-info">
                    <h3 class="catalogo-title">${product.name}</h3>
                    <div class="catalogo-meta">
                        <span class="catalogo-sku"><i class="fas fa-barcode"></i> ${product.sku}</span>
                        <span class="catalogo-unit"><i class="fas fa-box"></i> ${product.unit}</span>
                        <span class="catalogo-vida"><i class="fas fa-hourglass-half"></i> ${product.vida_util}</span>
                    </div>
                </div>
            `;
            card.addEventListener('click', () => openModal(product));
            card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openModal(product); });
            catalogGrid.appendChild(card);
        });
        grid.appendChild(catalogGrid);
        addImageFallback();
    }

    // Funciones auxiliares del catálogo (mantenerlas aquí si son internas)
    function getBrandColor(brand) {
        switch (brand) {
            case 'Bimbo': return '#007BFF';
            case 'Artesano': return '#eab676';
            case 'Tía Rosa': return '#e53935';
            case 'Oroweat': return '#bfa14a';
            case 'Fargo': return '#e65100';
            case 'Lactal': return '#00bfae';
            case 'Briosh': return '#8e24aa';
            default: return '#888';
        }
    }

    function normalizeText(str) {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    }

    function levenshtein(a, b) {
        if (a.length === 0) return b.length;
        if (b.length === 0) return a.length;
        const matrix = [];
        for (let i = 0; i <= b.length; i++) matrix[i] = [i];
        for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
        for (let i = 1; i <= b.length; i++) {
            for (let j = 1; j <= a.length; j++) {
                if (b.charAt(i - 1) === a.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(
                        matrix[i - 1][j - 1] + 1, // sustitución
                        matrix[i][j - 1] + 1,     // inserción
                        matrix[i - 1][j] + 1      // borrado
                    );
                }
            }
        }
        return matrix[b.length][a.length];
    }

    let currentCategory = '';
    function filterByCategory(cat) {
        currentCategory = cat;
        if (categoryButtonsContainer) {
            categoryButtonsContainer.querySelectorAll('button').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.category === cat);
            });
        }
        if (categorySelect) categorySelect.value = cat;
        const filtered = cat ? bimboProducts.filter(p => p.category === cat) : bimboProducts;
        renderCatalog(filtered);
    }

    if (categoryButtonsContainer) {
        categoryButtonsContainer.addEventListener('click', function(e) {
            if (e.target.tagName === 'BUTTON') {
                filterByCategory(e.target.dataset.category);
            }
        });
    }

    if (categorySelect) {
        categorySelect.addEventListener('change', function() {
            filterByCategory(this.value);
        });
    }

    function addImageFallback() {
      document.querySelectorAll('.catalogo-img').forEach(img => {
        img.onerror = function() {
          this.onerror = null;
          this.src = 'images/placeholder.png';
          this.alt = 'Imagen no disponible';
        };
      });
    }

    // --- INICIALIZACIÓN AL CARGAR EL DOM ---

    // Inicializar botones de categoría (depende de products)
    renderCategoryButtons(categories);

    // Renderizar catálogo inicial (depende de products)
    renderCatalog(bimboProducts);

    // Inicializar y renderizar el botón del carrito
    loadCart(); // Carga el carrito desde localStorage
    renderCartButton(); // Renderiza el botón flotante con la cantidad

    // Sincronizar filtro al cargar (esto es parte del catálogo)
    filterByCategory('');
});