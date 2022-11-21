export const PATH = {
    main: '/',
    login: '/login',
    register: '/register',
    forgotpassword: '/forgot_password',
    changepassword: 'change_password',
    verifyemail: '/verify_email',
    verifyemail_checked: '/verify_email_checked',
    login_google: '/auths/google/*',
    login_facebook: '/auths/facebook/*',
    cart: '/cart',
    profile: {
        dashboard: "/profile",
        user_order_management: "/profile/user_order_management",
        user_review: "/profile/user_review",
        user_change_password: "/profile/user_change_password",
        user_order_detail: "/profile/user_order_detail",
    },
    terms: {
        using: "/terms/using",
        transport: "/terms/transport",
        user_infor_privacy: "terms/user_infor_privacy",
        payment_privacy: "terms/payment_privacy",
        wholesale_customer_policy: "terms/wholesale_customer_policy",
    },
    payment: '/payment',
    category: {
        dashboard: "/category",
    },
    detail_book: '/detail_book',
    new_book: './new_book',
    popular_book: './popular_book',
    bestseller_book: './bestseller_book',
   
    admin: {
        dashboard: "/admin",
        // Product
        product_management: "/admin/product_management",
        add_product: "/admin/add_product",
        update_product: "/admin/update_product/:id",
        product_statistics: "/admin/product_statistics",
        // User
        user_management: "/admin/user_management",
        user_statistics: "/admin/user_statistics",
        // Order
        order_management: "/admin/order_management",
        order_statistics: "/admin/order_statistics",
        // Category
        category: "/admin/category",
        // TypeOf 
        typeof: "/admin/typeof",
        // Turnover
        revenue_statistics: "/admin/revenue_statistics"

    },
    notfound: '*'
}
