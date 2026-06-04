/**
 * site.js - 全局網站邏輯處理
 * 處理成功頁面、購物車圖示更新等功能
 */

/**
 * 初始化成功頁面
 * 根據 type 參數顯示不同的成功訊息
 * @param {string} type - 成功類型: 'login', 'signup', 'checkout'
 * @param {string} name - 用戶名稱（登入/註冊時）
 * @param {string} orderId - 訂單編號（結帳時）
 */
function initSuccessPage(type, name, orderId) {
    const titleEl = document.getElementById('display-title');
    const welcomeEl = document.getElementById('display-welcome');
    const actionLink = document.getElementById('action-link');
    const orderInfoEl = document.getElementById('order-info');

    if (!titleEl || !welcomeEl) return;

    // 根據類型設定不同的訊息和跳轉連結
    switch (type) {
        case 'login':
            titleEl.innerText = "會員登入成功";
            welcomeEl.innerHTML = `歡迎 <span style="color:#006241;">${name || '會員'}</span> 回來`;
            if (actionLink) {
                actionLink.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> 前往購物車`;
                actionLink.href = "cart.html";
            }
            break;

        case 'checkout':
            titleEl.innerText = "交易成功";
            welcomeEl.innerHTML = `感謝您的購買！<br><span style="color:#006241; font-size: 1.1em;">訂單編號: ${orderId || 'N/A'}</span>`;
            if (actionLink) {
                actionLink.innerHTML = `<i class="fa-solid fa-list"></i> 查看訂單`;
                actionLink.href = `order.html`;
            }
            // 顯示訂單相關資訊
            if (orderInfoEl) {
                orderInfoEl.innerHTML = `
                    <div style="margin-top: 20px; padding: 15px; background: #f0f8ff; border-radius: 10px; text-align: left;">
                        <p><strong>訂單編號:</strong> ${orderId || 'N/A'}</p>
                        <p><strong>訂單日期:</strong> ${new Date().toLocaleDateString('zh-TW')}</p>
                        <p><strong>預計運送:</strong> 3-5 個工作天</p>
                    </div>
                `;
            }
            break;

        case 'signup':
        case 'register':
        default:
            titleEl.innerText = "會員註冊成功";
            welcomeEl.innerHTML = `歡迎 <span style="color:#006241;">${name || '新會員'}</span> 成為會員`;
            if (actionLink) {
                actionLink.innerHTML = `<i class="fa-solid fa-arrow-right-to-bracket"></i> 前往登入`;
                actionLink.href = "login.html";
            }
            break;
    }
}

/**
 * 初始化自動跳轉倒數計時
 * @param {number} seconds - 倒數秒數（預設 3 秒）
 * @param {string} redirectUrl - 跳轉目標 URL（預設首頁）
 */
function initAutoRedirect(seconds = 3, redirectUrl = 'index.html') {
    const secEl = document.getElementById('sec');
    let count = seconds;

    const timer = setInterval(() => {
        count--;
        if (secEl) {
            secEl.innerText = count;
        }
        if (count <= 0) {
            clearInterval(timer);
            window.location.href = redirectUrl;
        }
    }, 1000);
}

/**
 * 產品資料庫 - 完整的商品數據
 */
const productsDB = {
    // 香水系列
    "perfume01": { name: "香奈兒 No.5", price: 3200, img: "image/drink1.jpg" },
    "perfume02": { name: "Coco Mademoiselle", price: 2800, img: "image/drink2.jpg" },
    "perfume03": { name: "Allure 香水", price: 2600, img: "image/drink3.jpg" },
    "perfume04": { name: "Gabrielle 香水", price: 3000, img: "image/drink4.jpg" },
    
    // 彩妝系列
    "makeup01": { name: "Coco Rouge 唇膏", price: 1280, img: "image/cake1.jpg" },
    "makeup02": { name: "Les Beiges 粉底", price: 2080, img: "image/cake2.JPG" },
    "makeup03": { name: "Ombre Première 眼影", price: 980, img: "image/cake3.jpg" },
    "makeup04": { name: "Powder Blush 腮紅", price: 1380, img: "image/cake4.jpg" },
    
    // 護膚品系列
    "skincare01": { name: "No.5 精粹乳液", price: 2480, img: "image/bread1.JPG" },
    "skincare02": { name: "Blue Serum 精華液", price: 3200, img: "image/bread2.JPG" },
    "skincare03": { name: "Hydra Beauty 面膜", price: 1680, img: "image/bread3.JPG" },
    "skincare04": { name: "Gentle Eye Cream 眼霜", price: 1980, img: "image/bread4.jpg" },
    
    // 舊數據（保留相容性）
    "tea01": { name: "水之森玄米抹茶", price: 65, img: "image/drink1.jpg" },
    "tea02": { name: "英倫伯爵紅茶", price: 55, img: "image/drink2.jpg" },
    "tea03": { name: "珍珠鮮奶", price: 75, img: "image/drink3.jpg" },
    "tea04": { name: "手炒黑糖鮮奶", price: 80, img: "image/drink1.jpg" },
    
    "cake01": { name: "草莓鮮奶油蛋糕", price: 120, img: "image/cake1.jpg" },
    "cake02": { name: "芒果夏洛特", price: 130, img: "image/cake2.jpg" },
    "cake03": { name: "經典黑森林", price: 110, img: "image/cake1.jpg" },
    "cake04": { name: "法式檸檬塔", price: 100, img: "image/cake2.jpg" },

    "bread01": { name: "法式經典長棍", price: 65, img: "image/bread1.jpg" },
    "bread02": { name: "綜合雜糧麵包", price: 80, img: "image/bread2.jpg" },
    "bread03": { name: "奶油海鹽羅宋", price: 70, img: "image/bread3.jpg" },
    "bread04": { name: "香蒜帕瑪森", price: 75, img: "image/bread1.jpg" }
};

/**
 * 獲取商品信息
 * @param {string} productId - 商品 ID
 * @returns {object|null} 商品信息或 null
 */
function getProduct(productId) {
    return productsDB[productId] || null;
}

/**
 * 更新購物車圖示數字（即時更新）
 * @param {number} count - 購物車商品數量
 */
function updateCartBadge(count) {
    const badge = document.getElementById('cart-badge');
    if (badge) {
        if (count <= 0) {
            badge.style.display = 'none';
        } else {
            badge.style.display = 'inline-block';
            badge.innerText = count;
        }
    }
}

/**
 * 從 LocalStorage 獲取購物車完整數據
 * @returns {array} 購物車商品陣列
 */
function getCart() {
    try {
        // 優先使用新的 'cart' 鍵
        // 降級到舊的 'starbucks_cart' 或 'chanel_cart' 鍵以保持相容性
        let cart = JSON.parse(localStorage.getItem('cart')) || 
                  JSON.parse(localStorage.getItem('starbucks_cart')) ||
                  JSON.parse(localStorage.getItem('chanel_cart')) || [];
        return cart;
    } catch (e) {
        console.warn('無法解析購物車資料:', e);
        return [];
    }
}

/**
 * 保存購物車數據
 * @param {array} cart - 購物車數據
 */
function saveCart(cart) {
    try {
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('starbucks_cart', JSON.stringify(cart)); // 保留相容性
    } catch (e) {
        console.warn('無法保存購物車資料:', e);
    }
}

/**
 * 從 LocalStorage 獲取購物車計數
 * @returns {number} 購物車中的商品總數
 */
function getCartCount() {
    try {
        const cart = getCart();
        return cart.reduce((sum, item) => sum + (item.qty || item.quantity || 1), 0);
    } catch (e) {
        console.warn('無法解析購物車資料:', e);
        return 0;
    }
}

/**
 * 添加商品到購物車
 * @param {string} productId - 商品 ID
 * @param {number} quantity - 數量（預設 1）
 */
function addToCart(productId, quantity = 1) {
    const product = getProduct(productId);
    if (!product) {
        console.warn('商品不存在:', productId);
        return false;
    }
    
    const cart = getCart();
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.qty = (existingItem.qty || 1) + quantity;
    } else {
        cart.push({ id: productId, qty: quantity });
    }
    
    saveCart(cart);
    return true;
}

/**
 * 從購物車移除商品
 * @param {number} index - 購物車項目索引
 */
function removeFromCart(index) {
    const cart = getCart();
    if (index >= 0 && index < cart.length) {
        cart.splice(index, 1);
        saveCart(cart);
        return true;
    }
    return false;
}

/**
 * 清空購物車
 */
function clearCart() {
    localStorage.setItem('cart', '[]');
    localStorage.setItem('starbucks_cart', '[]');
}

/**
 * 初始化頁面時更新購物車圖示
 */
function initCartBadge() {
    const count = getCartCount();
    updateCartBadge(count);
}

/**
 * 當添加商品到購物車時呼叫此函數
 * @param {number} quantity - 要添加的數量（預設 1）
 */
function onAddToCart(quantity = 1) {
    const currentCount = getCartCount();
    updateCartBadge(currentCount + quantity);
}

/**
 * 當移除商品時呼叫此函數
 * @param {number} quantity - 要移除的數量（預設 1）
 */
function onRemoveFromCart(quantity = 1) {
    const currentCount = getCartCount();
    const newCount = Math.max(0, currentCount - quantity);
    updateCartBadge(newCount);
}

/**
 * 清空購物車時呼叫此函數
 */
function onClearCart() {
    updateCartBadge(0);
}

// 頁面載入時初始化
document.addEventListener('DOMContentLoaded', function() {
    // 初始化購物車圖示
    initCartBadge();

    // 檢查是否在成功頁面並初始化
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type');
    if (type && document.getElementById('display-title')) {
        const name = params.get('name');
        const orderId = params.get('orderId');
        initSuccessPage(type, name, orderId);
        initAutoRedirect(3, type === 'checkout' ? 'order.html' : 'index.html');
    }
});

// 導出函數供全局使用
window.SiteJS = {
    // 產品相關
    productsDB,
    getProduct,
    
    // 購物車相關
    getCart,
    saveCart,
    getCartCount,
    addToCart,
    removeFromCart,
    clearCart,
    
    // UI 相關
    updateCartBadge,
    initCartBadge,
    
    // 成功頁面相關
    initSuccessPage,
    initAutoRedirect,
    
    // 相容性
    onAddToCart,
    onRemoveFromCart,
    onClearCart
};
