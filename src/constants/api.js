export const API = {
  LOGIN: 'auths/login',
  REGISTER: 'auths/register',
  SENDVERIFYEMAIL: 'auths/send-verification-email',
  AUTHVERIFYEMAIL: 'auths/verify-email',
  REFESHTOKEN: 'auths/refreshToken',
  LOGOUT: 'auths/logout',
  SENDEMAILRESETPASSWORD: 'auths/send-email-reset-password',
  RESETPASSWORD: 'auths/reset-password',
  CHANGEPASSWORD: 'auths/change_password',
  LOGIN_GOOGLE: 'auths/google',
  LOGIN_FACEBOOK: 'auths/facebook',
  AUTH_CALLBACK_GOOGLE: 'auths/google/callback',
  AUTH_CALLBACK_FACEBOOK: 'auths/facebook/callback',

  GET_LIST_USER_IN_PAGE: 'users/page',
  GET_LIST_ALL_USER: 'users',
  GET_LIST_ORDER_IN_PAGE: 'order/pages',
  GET_LIST_CATEGORY_IN_PAGE: 'category/pages',
  GET_PRODUCT_IN_PAGE: 'product/filter', //filter
  GET_LIST_ALL_CATEGORY: 'category',
  GET_LIST_ALL_TYPEOF_BOOK: 'kind_product/idcategory',
  GET_LIST_ALL_PUBLISHING: 'publishing',
  AUTHOR: 'author',
  GET_TYPEOF_BOOK_IN_PAGE: 'kind_product/idcategory',

  STATISTIC_USER_IN_WEEK: 'users/statistic',
  REVANUE_IN_WEEK: 'order/revanue',
  AMOUNT_ORDER_IN_WEEK: 'order/amount',
  ORDER_DETAIL: 'order/order_detail',
  ORDER: 'order',

  STATISTIC_USER_EVERY_DAY_IN_WEEK: 'users/statisticperday',
  STATISTIC_ORDER_EVERY_DAY_IN_WEEK: 'order/amountperday',
  STATISTIC_TOP_TEN_BEST_SELLER_PERDAY: 'product/toptenbestsellerperday',
  STATISTIC_REVANUE_EVERY_DAY_IN_WEEK: 'order/revanueperday',

  CREATE_PRODUCT: 'product',
  DELETE_PRODUCT: 'product',
  MANAGE_CATEGORY: 'category',
  MANAGE_ORDER: 'order',
  MANAGE_TYPEOF_BOOK: 'kind_product',

  SEARCH_ITEM: 'product/search',
  BEST_SELLER_ITEM: 'product/bestseller',
  NEW_ITEM: 'product/item',
  ALL_ITEM: 'product',
  PAGINATE_ITEM: 'product/pages',
  GET_LIST_PROVINCE: 'https://provinces.open-api.vn/api/p',
  GET_LIST_DISTRICT: 'https://provinces.open-api.vn/api/d',
  KIND_PRODUCT: 'kind_product',
  PUBLISHING: 'publishing',
  CATEGORY: 'category',
  GET_DETAIL_GENRE_ITEM: 'product/id_theloai',
}
