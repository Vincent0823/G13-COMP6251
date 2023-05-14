import React, { JSXElementConstructor, lazy } from "react"//用于懒加载的组件
import CustomerHome from "../views/Layout/CustomerHome"
import AdminHome from "../views/Layout/AdminHome";
import ProviderHome from "../views/Layout/ProviderHome";
import Login from "../views/Login/Login"
const Page1 = lazy(() => import("../views/Customer/CustomerMainPage"))
const SearchResultPage = lazy(() => import("../views/Customer/SearchResultPage"))
const ServiceDetailPage = lazy(() => import("../views/Customer/ServiceDetailPage"))
const CustomerRequestPage = lazy(() => import("../views/Customer/CustomerRequestPage"))
import Admin from "../views/Admin/Admin";
import ProviderList from "../views/Admin/ProviderList/ProviderList";
import Register from "../views/Register/Register"
import ProviderRegister from "../views/Register/ProviderRegister"
import ProviderServicePage from "../views/Provider/ProviderServicePage";
import MyServiceRequestList from "../views/Provider/MyServiceRequestList";


import Service from "../views/Admin/Service/Service";

import { Navigate } from "react-router-dom"

//comp:JSX.Element
function componentWithSuspense(comp){
    return (
    <React.Suspense fallback={<div>loading</div>}>
            {comp}
        </React.Suspense>
    )
}

const routes = [//写为数组形式，这个routes相当于旧写法的<routes />
    //嵌套路由写法
    {
        path: "/",
        element: <Navigate to="/login" />
    },
    {
        path: "/admin",
        element: <AdminHome />,
        children: [
            {
                path:'/admin/Homepage',
                element:<Admin />
            },
            {
                path:"/admin/serviceList/ListPage",
                element: <Service />
            },
            {
                path:"/admin/ProviderListPage",
                element: <ProviderList />
            },
        ]
    },
    {
        path:"/servicesearch",
        element:<CustomerHome/>,//因为home是整个页面，写为根路由
        children:[
            {
                path:"/servicesearch",
                element:componentWithSuspense(<Page1 />)
            },
            {
                path:"/servicesearch/searchresult",
                element:componentWithSuspense(<SearchResultPage />)
            },
            {
                path:"/servicesearch/searchresult/serviceDetail",
                element:componentWithSuspense(<ServiceDetailPage />)
            },
            {
                path:"/servicesearch/requestlist",
                element:componentWithSuspense(<CustomerRequestPage />)
            },
        ]
    },
    {
        path: "/provider",
        element: <ProviderHome />,
        children: [
            {
                path:"/provider/serviceList/ListPage",
                element: <ProviderServicePage />
            },
            {
                path:"/provider/requestList",
                element: <MyServiceRequestList />
            },
        ]
    },
    {
        path:"/login",
        element: <Login />
    },
    {
        path:"/register",
        element: <Register />
    },

    {
        path:"/provider/registPage",
        element: <ProviderRegister />
    },

    {
        //用户输入未配置的地址，重定向到Page1
        path:"*",
        element: <Navigate to="/login" />
    }
    
]

export default routes