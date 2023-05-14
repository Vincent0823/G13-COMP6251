import { useEffect } from 'react'
import { useLocation, useNavigate, useRoutes} from "react-router-dom";
import router from "../../router/router"

//路由守卫
function RouteGuard() {
    function ToMainPage() {//重定向至主页
        const NavigateTo = useNavigate();
        useEffect(() => {
            //第一次加载组件后
            NavigateTo("/servicesearch");
            alert("您已登录");//WAITXX 换成自动消失的message
        }, [])
        //WAITXX 为什么这里还要return一个空的东西？
        return (
            <></>
        )
    }

    function ToLogin() {//重定向至登录页
        const NavigateTo = useNavigate();
        useEffect(() => {
            //第一次加载组件后
            NavigateTo("/login");
            alert("您还没有登录");//WAITXX 换成自动消失的message
        }, [])
        //为什么这里还要return一个空的东西？
        return (
            <></>
        )
    }

    function BeforeRouterEnter() {
        //ERRORXX 假token
        const token = sessionStorage.token;

        const outlet = useRoutes(router);
        const currentURL = useLocation();

        //1. 如果访问的是登录页面 && 有token，跳转到首页
        if (currentURL.pathname === "/Login" && token) {
            //WAITXX 路由表里写的是/login但不知道为什么这里得写成大写才能生效？？？
            //不能直接用navigateTo，因为需要BeforeRouterEnter是一个正常的JSX组件
            return <ToMainPage />
        }

        //守卫 path==="/" (<Home />)下的所有子路由
        for(let oneRoute of router) {
            if(oneRoute.path != "/") {
                continue;
            }
            if(!oneRoute.children) {
                continue;
            }
            for(let oneChildren of oneRoute.children) {
                if(oneChildren.path === currentURL.pathname && !token) {
                    return <ToLogin />
                }
            }
        }


        return outlet;
    }

    return (
        < BeforeRouterEnter />
    )
}

export default RouteGuard
