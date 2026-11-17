// BASE DE DATOS DE PRODUCTOS
const products = [
    {
        id: 1,
        title: "Top Minimal Seamless",
        category: "mujer",
        price: 45.00,
        imgPrimary: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80",
        imgSecondary: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80",
        description: "Diseño ergonómico sin costuras con sujeción media y tejido ultra transpirable."
    },
    {
        id: 2,
        title: "Leggings Alto Rendimiento",
        category: "mujer",
        price: 75.00,
        imgPrimary: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80",
        imgSecondary: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=600&q=80",
        description: "Compresión inteligente de 360 grados con cintura reforzada y efecto segunda piel."
    },
    {
        id: 3,
        title: "Camiseta Dry-Elite Tech",
        category: "hombre",
        price: 50.00,
        imgPrimary: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=600&q=80",
        imgSecondary: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80",
        description: "Tejido técnico con tratamiento antibacteriano y evacuación rápida del sudor."
    },
    {
        id: 4,
        title: "Shorts de Compresión Pro",
        category: "hombre",
        price: 60.00,
        imgPrimary: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
        imgSecondary: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80",
        description: "Liguero interior técnico y bolsillos laterales de seguridad para entrenamiento intenso."
    },
    {
        id: 5,
        title: "Mochila Minimalista Sport",
        category: "accesorio",
        price: 90.00,
        imgPrimary: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
        imgSecondary: "https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&w=600&q=80",
        description: "Compartimento impermeable para ordenador y ropa húmeda con diseño estético limpio."
    },
    {
        id: 6,
        title: "Gorra Dry-Sport Ultraligera",
        category: "accesorio",
        price: 30.00,
        imgPrimary: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=600&q=80",
        imgSecondary: "https://images.unsplash.com/photo-1533867617858-e7d97e0afd8b?auto=format&fit=crop&w=600&q=80",
        description: "Protección solar UV y microperforaciones láser para ventilación superior."
    }
];

// DATOS DE TECNOLOGÍA
const techData = [
    {
        title: "Tejido Termoregulador Inteligente",
        desc: "Nuestras fibras adaptativas responden a la temperatura corporal liberando calor en esfuerzo intenso o reteniéndolo en momentos de descanso.",
        img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Costuras de Ultrasonido Fusionado",
        desc: "Eliminamos por completo las rozaduras mediante sellado térmico de alta precisión, garantizando confort absoluto y durabilidad extrema.",
        img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Elasticidad Multidireccional 360°",
        desc: "Estructura de tejido con memoria elástica que acompaña cada rango de movimiento sin deformarse tras múltiples lavados.",
        img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80"
    }
];

// CARRUSEL STATE
let currentSlideIndex = 0;
let slideInterval;

function initCarousel() {
    startSlideTimer();
}

function moveCarousel(direction) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    
    slides[currentSlideIndex].classList.remove('active');
    dots[currentSlideIndex].classList.remove('active');
    
    currentSlideIndex = (currentSlideIndex + direction + slides.length) % slides.length;
    
    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
    resetSlideTimer();
}

function currentSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    
    slides[currentSlideIndex].classList.remove('active');
    dots[currentSlideIndex].classList.remove('active');
    
    currentSlideIndex = index;
    
    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
    resetSlideTimer();
}

function startSlideTimer() {
    slideInterval = setInterval(() => moveCarousel(1), 5000);
}

function resetSlideTimer() {
    clearInterval(slideInterval);
    startSlideTimer();
}

// NAVEGACIÓN ENTRE VISTAS
function switchView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(`view-${viewId}`).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// MENÚ DESPLEGABLE
function toggleMenu() {
    document.getElementById('dropdownMenu').classList.toggle('open');
}

// RENDERIZAR PRODUCTOS
function renderProducts(containerId, list) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = list.map(p => `
        <div class="product-card">
            <div class="product-img-wrapper">
                <img src="${p.imgPrimary}" alt="${p.title}" class="img-primary">
                <img src="${p.imgSecondary}" alt="${p.title} - Vista alternativa" class="img-secondary">
                <div class="product-actions">
                    <button onclick="openQuickView(${p.id})">Vista Rápida</button>
                    <button onclick="addToCart(${p.id})">+ Añadir</button>
                </div>
            </div>
            <div class="product-info">
                <span class="product-title">${p.title}</span>
                <span class="product-price">€${p.price.toFixed(2)}</span>
            </div>
        </div>
    `).join('');
}

// FILTROS DE COLECCIÓN
let currentCategory = 'all';

function filterProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filtered = products.filter(p => {
        const matchesCategory = currentCategory === 'all' || p.category === currentCategory;
        const matchesQuery = p.title.toLowerCase().includes(query) || p.description.toLowerCase().includes(query);
        return matchesCategory && matchesQuery;
    });
    renderProducts('collectionGrid', filtered);
}

function setCategory(category, btn) {
    currentCategory = category;
    document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    filterProducts();
}

// PESTAÑAS DE TECNOLOGÍA
function switchTechTab(index) {
    document.querySelectorAll('.tech-tab').forEach((tab, i) => {
        tab.classList.toggle('active', i === index);
    });
    const data = techData[index];
    document.getElementById('techDisplay').innerHTML = `
        <div class="tech-text">
            <h3>${data.title}</h3>
            <p>${data.desc}</p>
            <button class="btn-primary" onclick="switchView('collection')">Ver Prendas con esta Tecnología</button>
        </div>
        <div class="tech-image">
            <img src="${data.img}" alt="${data.title}">
        </div>
    `;
}

// BOLSA DE COMPRAS (CARRITO)
let cart = [];

function toggleCart() {
    document.getElementById('cartDrawer').classList.toggle('open');
    document.getElementById('cartOverlay').classList.toggle('open');
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);
    
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartUI();
    showModal(`¡"${product.title}" añadido a tu bolsa!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateCartUI() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').innerText = count;
    document.getElementById('drawerCount').innerText = count;
    
    const listContainer = document.getElementById('cartItemsList');
    
    if (cart.length === 0) {
        listContainer.innerHTML = `<p class="empty-cart-msg">Tu bolsa está vacía.</p>`;
        document.getElementById('cartTotalPrice').innerText = '€0.00';
        return;
    }
    
    let total = 0;
    listContainer.innerHTML = cart.map(item => {
        total += item.price * item.quantity;
        return `
            <div class="cart-item-row">
                <img src="${item.imgPrimary}" alt="${item.title}">
                <div class="cart-item-details">
                    <h4>${item.title}</h4>
                    <p>Cant: ${item.quantity}</p>
                    <span class="cart-item-price">€${(item.price * item.quantity).toFixed(2)}</span>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">&times;</button>
            </div>
        `;
    }).join('');
    
    document.getElementById('cartTotalPrice').innerText = `€${total.toFixed(2)}`;
}

function checkout() {
    if (cart.length === 0) {
        showModal('Tu bolsa está vacía. Añade productos antes de finalizar.');
        return;
    }
    toggleCart();
    showModal('¡Pedido simulado con éxito! Gracias por confiar en ELITE SPORT.');
    cart = [];
    updateCartUI();
}

// MODAL DE VISTA RÁPIDA
function openQuickView(productId) {
    const p = products.find(prod => prod.id === productId);
    document.getElementById('quickViewContent').innerHTML = `
        <div class="quick-view-grid">
            <img src="${p.imgPrimary}" alt="${p.title}">
            <div class="quick-view-info">
                <h3>${p.title}</h3>
                <div class="price">€${p.price.toFixed(2)}</div>
                <p>${p.description}</p>
                <div class="size-selector">
                    <button class="size-btn selected" onclick="selectSize(this)">S</button>
                    <button class="size-btn" onclick="selectSize(this)">M</button>
                    <button class="size-btn" onclick="selectSize(this)">L</button>
                    <button class="size-btn" onclick="selectSize(this)">XL</button>
                </div>
                <button class="btn-primary full-width" onclick="addToCart(${p.id}); closeQuickView();">Añadir a la Bolsa</button>
            </div>
        </div>
    `;
    document.getElementById('quickViewModal').classList.add('open');
}

function closeQuickView() {
    document.getElementById('quickViewModal').classList.remove('open');
}

function selectSize(btn) {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
}

// MODAL DE ALERTAS
function showModal(message, title = 'Aviso') {
    document.getElementById('alertTitle').innerText = title;
    document.getElementById('alertMessage').innerText = message;
    document.getElementById('alertModal').classList.add('open');
}

function closeAlertModal() {
    document.getElementById('alertModal').classList.remove('open');
}

// CONTACTO SUBMIT
function handleContactSubmit(event) {
    event.preventDefault();
    showModal('Hemos recibido tu mensaje correctamente. Te responderemos en menos de 24 horas.');
    event.target.reset();
}

// INICIALIZACIÓN AL CARGAR LA PÁGINA
window.addEventListener('DOMContentLoaded', () => {
    initCarousel();
    renderProducts('featuredGrid', products.slice(0, 4));
    renderProducts('collectionGrid', products);
    switchTechTab(0);
});