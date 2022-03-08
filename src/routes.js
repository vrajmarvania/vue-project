// --user
import index from "./views/index.vue";
import collections from "./views/collections.vue";
import Product from "./views/product.vue";
import login from "./views/login.vue";
import register from "./views/register.vue";
import search from "./views/search.vue";
import cart from "./views/cart.vue";
import Checkout from "./views/checkout.vue";
import viewOrderDetails from "./views/viewOrderDetails.vue";
import NotFound from "./views/404.vue";
import Orderdetails from "./views/orderDetails.vue";
import collectionHome from "./views/collection-Home.vue";
import verifys from "./views/verify.vue";
import demo from "./views/demo.vue";


// --admin

import Dashboard from "./views/admin/Dashboard.vue";
import dindex from "./views/admin/index.vue";

// import Dashboard2 from "./views/admin/Dashboard2.vue";

// Product
import ManageProduct from "./views/admin/Product/Manage-Product.vue";
import AddProduct from "./views/admin/Product/Add-product.vue";
import EditProduct from "./views/admin/Product/Edit-Product.vue";
import Productinfo from "./views/admin/Product/Product-info.vue";
// Offers
import ManageOffer from "./views/admin/Offers/manage-offer.vue";
import EditOffer from "./views/admin/Offers/Edit-Offer.vue";
import Createoffer from "./views/admin/Offers/Create-offer.vue";


// Category
import Categorytable from "./views/admin/Category/Categorytable.vue";
import CreateCategory from "./views/admin/Category/Create-Category.vue";
import ManageCategory from "./views/admin/Category/Manage-Category.vue";
import EditCategory from "./views/admin/Category/Edit-Category.vue";


//order
import manageOrder from "./views/admin/Order/manage-Order.vue";

// routing  guard-------------------------->
// check login ---->
function guardMyroute(to, from, next) {
    var isAuthenticated = false;
    if (localStorage.getItem('token'))
        isAuthenticated = true;
    else
        isAuthenticated = false;
    if (isAuthenticated) {
        next(); // allow to enter route
    } else {
        next('/login');
    }
}

// check login ---->
function nouser(to, from, next) {
    var isAuthenticated = false;

    if (localStorage.getItem('token'))
        isAuthenticated = true;
    else
        isAuthenticated = false;
    if (!isAuthenticated) {
        next(); // not allow to enter login
    } else {
        next('/')
    }
}

//check user type---------------->
function usercheck(to, from, next) {
    var isAuthenticated = false;

    if (localStorage.getItem('user')) {
        if (localStorage.getItem('user') == '2') {
            isAuthenticated = true;
        } else
            isAuthenticated = false;
        if (isAuthenticated) {
            next(); // not allow to enter login
        } else {
            next('/')
        }
    } else {
        next('/')
    }
}


const routes = [{
        path: "/",
        name: "index",
        component: index,
    }, {
        path: "/admin",
        name: "dindex",
        component: dindex,
        beforeEnter: usercheck,
        children: [{
                path: '',
                component: Dashboard,
            }, {
                path: 'Manage-Product',
                component: ManageProduct
            }, {
                path: 'Manage-Category',
                name: 'ManageCategory',
                component: ManageCategory
            },
            {
                path: 'CreateCategory',
                name: 'CreateCategory',
                component: CreateCategory
            },
            {
                path: 'AddProduct',
                name: 'AddProduct',
                component: AddProduct
            }, {
                path: 'EditCategory',
                name: "EditCategory",
                component: EditCategory,
                props: true,

            }, {
                path: 'EditProduct',
                name: "EditProduct",
                component: EditProduct,
                props: true,

            }, {
                path: 'Categorytable',
                name: 'Categorytable',
                component: Categorytable
            }, {

                path: 'ManageOffer',
                name: "ManageOffer",
                component: ManageOffer,
            }, {
                path: 'EditOffer',
                name: "EditOffer",
                component: EditOffer,
                props: true,

            }, {
                path: 'Createoffer',
                name: "Createoffer",
                component: Createoffer,

            },
            {
                path: 'manageOrder',
                component: manageOrder,
                name: 'manageOrder'
            }, {
                path: 'Productinfo',
                name: 'Product-info',
                component: Productinfo,
            }
        ]
    }, {
        path: "/login",
        name: "login",
        component: login,
        beforeEnter: nouser
    }, {
        path: "/demo",
        name: "demo",
        component: demo,
    },
    {
        path: '/verify/:id/:token',
        name: "verify",
        component: verifys,
        props: true,

    }

    , {
        path: "/register",
        name: "register",
        component: register,
        beforeEnter: nouser
    }, {
        path: "/cart",
        name: "cart",
        beforeEnter: guardMyroute,
        component: cart,
    },
    {
        path: "/Orderdetails",
        name: "Orderdetails",
        beforeEnter: guardMyroute,
        component: Orderdetails,
    }, {
        path: "/collection/:id",
        name: "collections",
        component: collections,
        props: true,
    }, {
        path: "/collection",
        name: "collection-Home",
        component: collectionHome,

    }, {
        path: "/Product/:id",
        name: "Product",
        component: Product,
        props: true,
    }, {
        path: "/viewOrderDetails",
        name: "viewOrderDetails",
        component: viewOrderDetails,
        props: true,

    }, {
        path: "/search/:q",
        name: "search",
        component: search,
        props: true,
    },
    {
        path: '/Checkout',
        name: 'Checkout',
        beforeEnter: guardMyroute,
        component: Checkout
    },
    {
        path: "/:catchAll(.*)",
        component: NotFound
    }

]
export default routes;