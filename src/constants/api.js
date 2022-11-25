export const API = {
    LOGIN: "auths/login",
    REGISTER: "auths/register",
    SENDVERIFYEMAIL: "auths/send-verification-email",
    AUTHVERIFYEMAIL: "auths/verify-email",
    REFESHTOKEN: "auths/refreshToken",
    LOGOUT: "auths/logout",
    SENDEMAILRESETPASSWORD: "auths/send-email-reset-password",
    RESETPASSWORD: "auths/reset-password",
    LOGIN_GOOGLE: "auths/google",
    LOGIN_FACEBOOK: "auths/facebook",
    AUTH_CALLBACK_GOOGLE: "auths/google/callback",
    AUTH_CALLBACK_FACEBOOK: "auths/facebook/callback",
    LOGOUT: "auths/logout",

    GET_LIST_USER_IN_PAGE: "users/page",
    GET_LIST_ALL_USER: "users",
    GET_LIST_ORDER_IN_PAGE: "order/pages",
    GET_LIST_CATEGORY_IN_PAGE: "category/pages",
    GET_PRODUCT_IN_PAGE: "product/filter", //filter
    GET_LIST_ALL_CATEGORY: "category",
    GET_LIST_ALL_TYPEOF_BOOK: "kind_product/idcategory",
    GET_LIST_ALL_PUBLISHING: "publishing",
    GET_LIST_ALL_AUTHOR: "author",

    STATISTIC_USER_IN_WEEK: "users/statistic",
    REVANUE_IN_WEEK: "order/revanue",
    AMOUNT_ORDER_IN_WEEK: "order/amount",
    ORDER_DETAIL: "order/order_detail",

    STATISTIC_USER_EVERY_DAY_IN_WEEK: "users/statisticperday",
    STATISTIC_ORDER_EVERY_DAY_IN_WEEK: "order/amountperday",
    STATISTIC_TOP_TEN_BEST_SELLER_PERDAY: "product/toptenbestsellerperday",
    STATISTIC_REVANUE_EVERY_DAY_IN_WEEK: "order/revanueperday",

    CREATE_PRODUCT: "product",
    DELETE_PRODUCT: "product",
    MANAGE_CATEGORY: "category",
    MANAGE_ORDER: "order"
}