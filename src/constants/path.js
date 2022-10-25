export const PATH = {
    main: '/',
    login: '/login',
    register: '/register',
    forgotpassword: '/forgot_password',
    changepassword: 'change_password',
    verifyemail: '/verify_email',
    verifyemail_checked: '/verify_email_checked',
    login_google: '/auth/google/*',
    login_facebook: '/auth/facebook/*',
    cart: '/cart',
    profile: {
        dashboard: "/profile",
        user_order_management: "/profile/user_order_management",
        user_review: "/profile/user_review",
        user_payment_information: "/profile/user_payment_information",
        user_change_password: "/profile/user_change_password",
        user_order_detail: "/profile/user_order_detail",
    },
    payment: '/payment',

    new_book: '/new_book',
    bestseller_book: '/bestseller_book',
    popular_book: '/popular_book',
    category_book: '/category_book',
    publisher_book: '/publisher_book',
    author_book: '/author_book',
    detail_book: '/detail_book',
    novel_book: '/novel_book',
    economic_book: '/economic_book',
    short_story_prose_book: '/short_story_prose_book',
    kid_book: '/kid_book',
    mentality_lifeskill_book: '/mentality_lifeskill_book',
    text_reference_book: '/text_reference_book',
    biography_memoir_book: '/biography_memoir_book',
    foreign_book: '/foreign_book',
    admin: {
        dashboard: "/admin",
        // Product
        product_management: "/admin/product_management",
        add_product: "/admin/add_product",
        update_product: "/admin/update_product/",
        // User
        user_management: "/admin/user_management",
        update_user: "/admin/update_user/",
        // Order
        order_management: "/admin/order_management",
        update_order: "/admin/update_order/",
        order_statistics: "/admin/order_statistics",
        // Category
        category: "/admin/category",
        // TypeOf 
        // Turnover
        turnover_management: "/admin/turnover_management"

    },
    notfound: '*'
}
