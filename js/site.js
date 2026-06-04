const siteData = {
    defaultProducts: {
        vodka01: { id: 'vodka01', name: '俄羅斯經典伏特加', price: 1200, img: 'image/drink1.jpg', desc: '經典伏特加，清爽回甘，適合純飲或調酒。', stock: 10, category: '伏特加' },
        vodka02: { id: 'vodka02', name: '波蘭高級伏特加', price: 950, img: 'image/drink2.jpg', desc: '波蘭製造，口感細緻柔順，酒體清澈透明。', stock: 8, category: '伏特加' },
        vodka03: { id: 'vodka03', name: '瑞典冰晶伏特加', price: 1400, img: 'image/drink3.jpg', desc: '採用北歐冰川純水，酒體乾淨富有香醇感。', stock: 6, category: '伏特加' },
        vodka04: { id: 'vodka04', name: '美國頂級伏特加', price: 1100, img: 'image/drink4.jpg', desc: '美國頂級穀物釀造，口感順口帶有些微甜味。', stock: 5, category: '伏特加' },
        whiskey01: { id: 'whiskey01', name: '蘇格蘭單一麥芽威士忌', price: 2500, img: 'image/cake1.jpg', desc: '典雅花香與煙燻風味同時存在，餘韻悠長。', stock: 4, category: '威士忌' },
        whiskey02: { id: 'whiskey02', name: '愛爾蘭威士忌', price: 1800, img: 'image/cake2.JPG', desc: '柔和香甜，適合初次嘗試威士忌的愛好者。', stock: 7, category: '威士忌' },
        whiskey03: { id: 'whiskey03', name: '美國波本威士忌', price: 2000, img: 'image/cake3.jpg', desc: '帶有香草、焦糖和香料味，口感濃郁。', stock: 3, category: '威士忌' },
        whiskey04: { id: 'whiskey04', name: '日本頂級威士忌', price: 3200, img: 'image/cake4.jpg', desc: '精緻平衡、果香優雅，是收藏級選擇。', stock: 2, category: '威士忌' },
        rum01: { id: 'rum01', name: '古巴黑朗姆酒', price: 850, img: 'image/bread1.JPG', desc: '經典古巴朗姆，帶有成熟水果與香料味。', stock: 9, category: '朗姆酒' },
        rum02: { id: 'rum02', name: '牙買加金朗姆酒', price: 920, img: 'image/bread2.JPG', desc: '呈現濃郁焦糖與熱帶水果香，酒體飽滿。', stock: 11, category: '朗姆酒' },
        rum03: { id: 'rum03', name: '巴西白朗姆酒', price: 750, img: 'image/bread3.JPG', desc: '清新爽口，適合調製各式雞尾酒。', stock: 10, category: '朗姆酒' },
        rum04: { id: 'rum04', name: '委內瑞拉頂級朗姆', price: 1500, img: 'image/bread4.jpg', desc: '香草與蜂蜜香氣，尾韻柔和細緻。', stock: 6, category: '朗姆酒' },
        tea01: { id: 'tea01', name: '水之森玄米抹茶', price: 65, img: 'image/drink1.jpg', desc: '嚴選靜岡抹茶搭配焙煎玄米，茶湯翠綠，帶有濃郁的米香與抹茶回甘。', stock: 20, category: '飲品' },
        tea02: { id: 'tea02', name: '英倫伯爵紅茶', price: 55, img: 'image/drink2.jpg', desc: '特選錫蘭紅茶為基底，佐以佛手柑香氣，茶感醇厚。', stock: 20, category: '飲品' },
        tea03: { id: 'tea03', name: '珍珠鮮奶', price: 75, img: 'image/drink3.jpg', desc: 'Q彈手作珍珠搭配綠光牧場直送鮮乳，濃郁奶香與黑糖香氣完美融合。', stock: 20, category: '飲品' },
        tea04: { id: 'tea04', name: '手炒黑糖鮮奶', price: 80, img: 'image/drink1.jpg', desc: '職人每日手工慢炒黑糖，淋上醇厚鮮奶，甜而不膩。', stock: 20, category: '飲品' },
        cake01: { id: 'cake01', name: '草莓鮮奶油蛋糕', price: 120, img: 'image/cake1.jpg', desc: '綿密海綿蛋糕搭配新鮮草莓與特調鮮奶油。', stock: 12, category: '蛋糕' },
        cake02: { id: 'cake02', name: '芒果夏洛特', price: 130, img: 'image/cake2.jpg', desc: '外圍酥脆手指餅乾包裹芒果慕斯與鮮果。', stock: 10, category: '蛋糕' },
        cake03: { id: 'cake03', name: '經典黑森林', price: 110, img: 'image/cake1.jpg', desc: '濃郁巧克力蛋糕搭配酒漬櫻桃與鮮奶油。', stock: 10, category: '蛋糕' },
        cake04: { id: 'cake04', name: '法式檸檬塔', price: 100, img: 'image/cake2.jpg', desc: '酥脆塔皮與清新檸檬奶油餡，酸甜開胃。', stock: 10, category: '蛋糕' },
        bread01: { id: 'bread01', name: '法式經典長棍', price: 65, img: 'image/bread1.jpg', desc: '外皮酥脆內裡充滿麥香，適合搭配濃湯。', stock: 18, category: '麵包' },
        bread02: { id: 'bread02', name: '綜合雜糧麵包', price: 80, img: 'image/bread2.jpg', desc: '富含多種穀物與堅果，口感紮實。', stock: 15, category: '麵包' },
        bread03: { id: 'bread03', name: '奶油海鹽羅宋', price: 70, img: 'image/bread3.jpg', desc: '奶油香與海鹽微鹹完美融合，層次酥脆。', stock: 16, category: '麵包' },
        bread04: { id: 'bread04', name: '香蒜帕瑪森', price: 75, img: 'image/bread1.jpg', desc: '香蒜奶油與帕瑪森起司，烤至金黃酥脆。', stock: 14, category: '麵包' }
    }
};

function initializeStock() {
    const stored = localStorage.getItem('product_stock');
    if (!stored) {
        const stock = {};
        Object.values(siteData.defaultProducts).forEach((product) => {
            stock[product.id] = product.stock;
        });
        localStorage.setItem('product_stock', JSON.stringify(stock));
        return stock;
    }
    try {
        return JSON.parse(stored);
    } catch (e) {
        console.error('product_stock parse error', e);
        localStorage.removeItem('product_stock');
        return initializeStock();
    }
}

function getStoredStock() {
    const stock = initializeStock();
    return stock;
}

function saveStock(stock) {
    localStorage.setItem('product_stock', JSON.stringify(stock));
}

function getProduct(id) {
    const product = siteData.defaultProducts[id];
    if (!product) return null;
    const stock = getStoredStock();
    return { ...product, stock: stock[id] ?? product.stock };
}

function getAllProducts() {
    const stock = getStoredStock();
    return Object.values(siteData.defaultProducts).map((product) => ({ ...product, stock: stock[product.id] ?? product.stock }));
}

function getCart() {
    try {
        return JSON.parse(localStorage.getItem('starbucks_cart')) || [];
    } catch (e) {
        return [];
    }
}

function setCart(cart) {
    localStorage.setItem('starbucks_cart', JSON.stringify(cart));
    renderCartBadge();
}

function getCartCount() {
    return getCart().reduce((sum, item) => sum + Number(item.qty || 0), 0);
}

function renderCartBadge() {
    const count = getCartCount();
    document.querySelectorAll('[data-cart-count]').forEach((el) => {
        el.innerText = count;
        el.style.display = count > 0 ? 'inline-flex' : 'none';
    });
}

function addToCart(itemId, options = {}) {
    const product = getProduct(itemId);
    if (!product) {
        alert('找不到商品，請稍後再試。');
        return false;
    }
    if (product.stock <= 0) {
        alert('此商品已售完，請選擇其他商品。');
        return false;
    }
    const qty = Number(options.qty || 1);
    const sugar = options.sugar || '--';
    const ice = options.ice || '--';
    const cart = getCart();
    const existingIndex = cart.findIndex((item) => item.id === itemId && item.sugar === sugar && item.ice === ice);
    if (existingIndex > -1) {
        cart[existingIndex].qty += qty;
    } else {
        cart.push({ id: itemId, qty, sugar, ice });
    }
    setCart(cart);
    return true;
}

function getOrders() {
    try {
        return JSON.parse(localStorage.getItem('starbucks_orders')) || [];
    } catch (e) {
        return [];
    }
}

function saveOrders(orders) {
    localStorage.setItem('starbucks_orders', JSON.stringify(orders));
}

function generateOrderId() {
    return `ORD${Date.now()}`;
}

function formatCurrency(value) {
    return Number(value).toLocaleString('zh-TW');
}

function formatOrderDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString('zh-TW', { hour12: false });
}

function createOrder(cartItems) {
    const items = cartItems.map((item) => {
        const product = getProduct(item.id);
        return {
            id: item.id,
            name: product?.name || item.id,
            img: product?.img || '',
            price: product?.price || 0,
            qty: Number(item.qty),
            sugar: item.sugar || '--',
            ice: item.ice || '--'
        };
    });
    const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);
    return {
        orderId: generateOrderId(),
        createdAt: new Date().toISOString(),
        items,
        total,
        status: '已完成'
    };
}

function deductStock(cartItems) {
    const stock = getStoredStock();
    cartItems.forEach((item) => {
        const current = Number(stock[item.id] || 0);
        stock[item.id] = Math.max(0, current - Number(item.qty || 0));
    });
    saveStock(stock);
}

function getQueryParam(name) {
    return new URLSearchParams(window.location.search).get(name);
}

function setOrderLinkVisibility() {
    document.querySelectorAll('[data-order-link]').forEach((el) => {
        el.style.display = 'inline-flex';
    });
}

window.addEventListener('DOMContentLoaded', () => {
    initializeStock();
    renderCartBadge();
    setOrderLinkVisibility();
});

window.addEventListener('storage', () => {
    renderCartBadge();
});
