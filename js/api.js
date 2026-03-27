// 汤姆的花园 - API客户端
// 环境ID: tomsgarden-4gxkxlst2166118e

const API_BASE = 'https://tomsgarden-4gxkxlst2166118e-1416641808.ap-shanghai.app.tcloudbase.com';

// 通用请求方法
async function request(endpoint, data = {}) {
  try {
    const response = await fetch(`${API_BASE}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    
    const result = await response.json();
    console.log(`📡 API: ${endpoint}`, result);
    return result;
  } catch (error) {
    console.error('❌ API请求失败:', error);
    return { success: false, message: error.message };
  }
}

// ========== 页面内容 API ==========
const pageAPI = {
  getPage: (slug) => request('/page', { action: 'getPage', data: { slug } }),
  getPages: () => request('/page', { action: 'getPages' }),
  createPage: (data) => request('/page', { action: 'createPage', data }),
  updatePage: (data) => request('/page', { action: 'updatePage', data })
};

// ========== 商品 API ==========
const productAPI = {
  getProducts: (type) => request('/product', { action: 'getProducts', data: { type } }),
  getProduct: (productId) => request('/product', { action: 'getProduct', data: { productId } }),
  getProductDetail: (productId) => request('/product', { action: 'getProduct', data: { productId } }),
  createProduct: (data) => request('/product', { action: 'createProduct', data }),
  updateProduct: (data) => request('/product', { action: 'updateProduct', data })
};

// ========== 活动 API ==========
const activityAPI = {
  getActivities: (status) => request('/activity', { action: 'getActivities', data: { status } }),
  getActivity: (activityId) => request('/activity', { action: 'getActivity', data: { activityId } }),
  getActivityDetail: (activityId) => request('/activity', { action: 'getActivity', data: { activityId } }),
  signUp: (data) => request('/activity', { action: 'signUp', data }),
  getBookings: (userId) => request('/activity', { action: 'getBookings', data: { userId } })
};

// ========== 线索 API ==========
const leadAPI = {
  submitDesign: (data) => request('/lead', { action: 'submitDesignLead', data }),
  submitMaintenance: (data) => request('/lead', { action: 'submitMaintenanceLead', data }),
  submitFranchise: (data) => request('/lead', { action: 'submitFranchiseLead', data }),
  getLeads: (type, status) => request('/lead', { action: 'getLeads', data: { type, status } }),
  updateLeadStatus: (type, leadId, status, remark) => request('/lead', { 
    action: 'updateLeadStatus', 
    data: { type, leadId, status, remark } 
  })
};

// ========== 门店 API ==========
const storeAPI = {
  getStores: () => request('/store', { action: 'getStores' }),
  getStoreDetail: (storeId) => request('/store', { action: 'getStoreDetail', data: { storeId } })
};

// ========== 客服 API ==========
const supportAPI = {
  createTicket: (data) => request('/support', { action: 'createTicket', data }),
  getTickets: (userId) => request('/support', { action: 'getTickets', data: { userId } }),
  getTicket: (ticketId) => request('/support', { action: 'getTicket', data: { ticketId } })
};

// ========== 用户 API ==========
const authAPI = {
  login: (phone, password) => request('/auth', { action: 'login', data: { phone, password } }),
  register: (phone, password, name) => request('/auth', { action: 'register', data: { phone, password, name } }),
  getUserInfo: (userId) => request('/auth', { action: 'getUserInfo', data: { userId } }),
  updateUserInfo: (userId, data) => request('/auth', { action: 'updateUserInfo', data: { userId, ...data } })
};

// ========== 购物车 API ==========
const cartAPI = {
  getCart: (userId) => request('/cart', { action: 'getCart', data: { userId } }),
  addToCart: (data) => request('/cart', { action: 'addToCart', data }),
  updateQuantity: (cartId, quantity) => request('/cart', { action: 'updateQuantity', data: { cartId, quantity } }),
  removeFromCart: (cartId) => request('/cart', { action: 'removeFromCart', data: { cartId } }),
  clearCart: (userId) => request('/cart', { action: 'clearCart', data: { userId } })
};

// ========== 订单 API ==========
const orderAPI = {
  createOrder: (data) => request('/order', { action: 'createOrder', data }),
  getOrders: (userId) => request('/order', { action: 'getOrders', data: { userId } }),
  getOrder: (orderId) => request('/order', { action: 'getOrder', data: { orderId } }),
  updateOrderStatus: (orderId, status) => request('/order', { action: 'updateOrderStatus', data: { orderId, status } }),
  cancelOrder: (orderId, reason) => request('/order', { action: 'cancelOrder', data: { orderId, reason } })
};

// ========== 管理后台 API ==========
const adminAPI = {
  login: (phone, password) => request('/admin', { action: 'login', data: { phone, password } }),
  getStats: () => request('/admin', { action: 'getStats' }),
  getOrders: (offset, limit) => request('/admin', { action: 'getOrders', data: { offset, limit } }),
  getUsers: (offset, limit) => request('/admin', { action: 'getUsers', data: { offset, limit } }),
  getCoupons: () => request('/admin', { action: 'getCoupons' }),
  createCoupon: (data) => request('/admin', { action: 'createCoupon', data }),
  getSiteSettings: () => request('/admin', { action: 'getSiteSettings' }),
  updateSiteSettings: (settings) => request('/admin', { action: 'updateSiteSettings', data: { settings } })
};

// 导出到全局
window.API = {
  page: pageAPI,
  product: productAPI,
  activity: activityAPI,
  lead: leadAPI,
  store: storeAPI,
  support: supportAPI,
  auth: authAPI,
  cart: cartAPI,
  order: orderAPI,
  admin: adminAPI
};

console.log('✅ API客户端已加载 - 包含page/product/activity/lead/store/support/auth/cart/order/admin');

// ========== 页面内容 API ==========
const pageAPI = {
  // 获取所有页面
  getPages: () => request('/page', { action: 'getPages' }),
  
  // 获取单个页面
  getPage: (slug) => request('/page', { action: 'getPage', data: { slug } }),
  
  // 创建页面
  createPage: (data) => request('/page', { action: 'createPage', data }),
  
  // 更新页面
  updatePage: (data) => request('/page', { action: 'updatePage', data }),
  
  // 删除页面
  deletePage: (pageId) => request('/page', { action: 'deletePage', data: { pageId } })
};

// ========== 商品 API ==========
const productAPI = {
  // 获取商品列表
  getProducts: (type) => request('/product', { action: 'getProducts', data: { type } }),
  
  // 获取商品详情
  getProduct: (productId) => request('/product', { action: 'getProduct', data: { productId } }),
  
  // 创建商品
  createProduct: (data) => request('/product', { action: 'createProduct', data }),
  
  // 更新商品
  updateProduct: (data) => request('/product', { action: 'updateProduct', data }),
  
  // 删除商品
  deleteProduct: (productId) => request('/product', { action: 'deleteProduct', data: { productId } })
};

// ========== 活动 API ==========
const activityAPI = {
  // 获取活动列表
  getActivities: (status) => request('/activity', { action: 'getActivities', data: { status } }),
  
  // 获取活动详情
  getActivity: (activityId) => request('/activity', { action: 'getActivity', data: { activityId } }),
  
  // 创建活动
  createActivity: (data) => request('/activity', { action: 'createActivity', data }),
  
  // 活动报名/订位
  signUp: (data) => request('/activity', { action: 'signUp', data }),
  
  // 获取用户的预约列表
  getBookings: (userId) => request('/activity', { action: 'getBookings', data: { userId } })
};

// ========== 线索 API ==========
const leadAPI = {
  // 提交设计咨询
  submitDesign: (data) => request('/lead', { action: 'submitDesignLead', data }),
  
  // 提交养护咨询
  submitMaintenance: (data) => request('/lead', { action: 'submitMaintenanceLead', data }),
  
  // 提交加盟咨询
  submitFranchise: (data) => request('/lead', { action: 'submitFranchiseLead', data }),
  
  // 获取线索列表(后台)
  getLeads: (type, status) => request('/lead', { action: 'getLeads', data: { type, status } }),
  
  // 更新线索状态(后台)
  updateLeadStatus: (type, leadId, status, remark) => request('/lead', { 
    action: 'updateLeadStatus', 
    data: { type, leadId, status, remark } 
  })
};

// ========== 用户 API ==========
const authAPI = {
  // 登录
  login: (phone, password) => request('/auth', { action: 'login', data: { phone, password } }),
  
  // 注册
  register: (phone, password, name) => request('/auth', { action: 'register', data: { phone, password, name } }),
  
  // 获取用户信息
  getUserInfo: (userId) => request('/auth', { action: 'getUserInfo', data: { userId } }),
  
  // 更新用户信息
  updateUserInfo: (userId, data) => request('/auth', { action: 'updateUserInfo', data: { userId, ...data } })
};

// ========== 购物车 API ==========
const cartAPI = {
  // 获取购物车
  getCart: (userId) => request('/cart', { action: 'getCart', data: { userId } }),
  
  // 添加到购物车
  addToCart: (data) => request('/cart', { action: 'addToCart', data }),
  
  // 更新数量
  updateQuantity: (cartId, quantity) => request('/cart', { action: 'updateQuantity', data: { cartId, quantity } }),
  
  // 移除商品
  removeFromCart: (cartId) => request('/cart', { action: 'removeFromCart', data: { cartId } }),
  
  // 清空购物车
  clearCart: (userId) => request('/cart', { action: 'clearCart', data: { userId } })
};

// ========== 订单 API ==========
const orderAPI = {
  // 创建订单
  createOrder: (data) => request('/order', { action: 'createOrder', data }),
  
  // 获取订单列表
  getOrders: (userId) => request('/order', { action: 'getOrders', data: { userId } }),
  
  // 获取订单详情
  getOrder: (orderId) => request('/order', { action: 'getOrder', data: { orderId } }),
  
  // 更新订单状态
  updateOrderStatus: (orderId, status) => request('/order', { action: 'updateOrderStatus', data: { orderId, status } }),
  
  // 取消订单
  cancelOrder: (orderId, reason) => request('/order', { action: 'cancelOrder', data: { orderId, reason } })
};

// ========== 管理后台 API ==========
const adminAPI = {
  // 管理员登录
  login: (phone, password) => request('/admin', { action: 'login', data: { phone, password } }),
  
  // 获取统计数据
  getStats: () => request('/admin', { action: 'getStats' }),
  
  // 获取所有订单
  getOrders: (offset, limit) => request('/admin', { action: 'getOrders', data: { offset, limit } }),
  
  // 获取用户列表
  getUsers: (offset, limit) => request('/admin', { action: 'getUsers', data: { offset, limit } }),
  
  // 获取优惠券列表
  getCoupons: () => request('/admin', { action: 'getCoupons' }),
  
  // 创建优惠券
  createCoupon: (data) => request('/admin', { action: 'createCoupon', data }),
  
  // 获取站点配置
  getSiteSettings: () => request('/admin', { action: 'getSiteSettings' }),
  
  // 更新站点配置
  updateSiteSettings: (settings) => request('/admin', { action: 'updateSiteSettings', data: { settings } })
};

// 导出到全局
window.API = {
  page: pageAPI,
  product: productAPI,
  activity: activityAPI,
  lead: leadAPI,
  auth: authAPI,
  cart: cartAPI,
  order: orderAPI,
  admin: adminAPI
};

console.log('✅ API客户端已加载');