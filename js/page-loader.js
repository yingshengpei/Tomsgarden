// 汤姆的花园 - 页面加载器
// 自动加载页面内容从后端API

// API基础配置
const API_BASE = 'https://tomsgarden-4gxkxlst2166118e-1416641808.ap-shanghai.app.tcloudbase.com';

// 通用请求
async function apiCall(endpoint, data = {}) {
  try {
    const res = await fetch(`${API_BASE}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await res.json();
  } catch (e) {
    console.error('API Error:', e);
    return { success: false, message: e.message };
  }
}

// 页面加载函数
async function loadPageContent(slug, options = {}) {
  const result = await apiCall('/page', { action: 'getPage', data: { slug } });
  
  if (result.success && result.page) {
    const { title, content, components } = result.page;
    
    // 更新页面标题
    if (title && options.updateTitle !== false) {
      document.title = title + (options.titleSuffix || ' | 汤姆的花园');
    }
    
    // 更新页面内容 - 查找特定元素并填充
    if (options.contentSelector) {
      const el = document.querySelector(options.contentSelector);
      if (el) el.innerHTML = components || content || '';
    }
    
    console.log(`✅ Loaded page: ${slug}`, result.page);
    return result.page;
  } else {
    console.warn(`⚠️ Page not found: ${slug}`, result.message);
    return null;
  }
}

// 线索提交函数
async function submitLead(type, data) {
  const actionMap = {
    design: 'submitDesignLead',
    maintenance: 'submitMaintenanceLead',
    franchise: 'submitFranchiseLead'
  };
  
  const result = await apiCall('/lead', { 
    action: actionMap[type], 
    data 
  });
  
  if (result.success) {
    alert('提交成功！我们的工作人员会尽快联系您。');
    return true;
  } else {
    alert('提交失败，请稍后重试。');
    return false;
  }
}

// 导出到全局
window.PageLoader = {
  loadPageContent,
  submitLead,
  apiCall
};

console.log('✅ PageLoader loaded');
// 导出各类API到全局
window.storeAPI = {
  getStores: () => apiCall('/store', { action: 'getStores' }),
  getStoreDetail: (storeId) => apiCall('/store', { action: 'getStoreDetail', data: { storeId } })
};

window.supportAPI = {
  createTicket: (data) => apiCall('/support', { action: 'createTicket', data }),
  getTickets: (userId) => apiCall('/support', { action: 'getTickets', data: { userId } })
};

window.cartAPI = {
  getCart: (userId) => apiCall('/cart', { action: 'getCart', data: { userId } }),
  addToCart: (data) => apiCall('/cart', { action: 'addToCart', data }),
  updateQuantity: (cartId, quantity) => apiCall('/cart', { action: 'updateQuantity', data: { cartId, quantity } }),
  removeFromCart: (cartId) => apiCall('/cart', { action: 'removeFromCart', data: { cartId } })
};

window.orderAPI = {
  createOrder: (data) => apiCall('/order', { action: 'createOrder', data }),
  getOrders: (userId) => apiCall('/order', { action: 'getOrders', data: { userId } }),
  getOrder: (orderId) => apiCall('/order', { action: 'getOrder', data: { orderId } }),
  cancelOrder: (orderId, reason) => apiCall('/order', { action: 'cancelOrder', data: { orderId, reason } })
};
