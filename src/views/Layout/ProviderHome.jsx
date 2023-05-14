import React, { useState } from 'react';
import {Breadcrumb, Button, Layout, theme} from 'antd';
import { Outlet, useNavigate } from "react-router-dom"
import ProviderMainMenu from "../../components/ProviderMainMenu";


const { Header, Content, Footer, Sider } = Layout;

export default function ProviderHome() {
    const [collapsed, setCollapsed] = useState(false);

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const themeColor = "lightgrey";

    const navigateTo = useNavigate();//接受一个path，然后跳转到path（必须在<BrowseRouter>树中使用）

    const Logout = ()=>{
        navigateTo('/login')
        window.sessionStorage.setItem('token',null)
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            {/* Sider 左边栏 */}
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
                {/* 我手动提取的MainMenu组件嘻嘻 */}
                <ProviderMainMenu />
            </Sider>
            {/* 右侧内容 */}
            <Layout className="site-layout">
                {/* Header 右侧页头 */}
                <Header style={{ padding: "0 0 0 16px" }}>
                    {/* 面包屑 */}
                    <Breadcrumb style={{ lineHeight: '64px' }}>
                        <Breadcrumb.Item>
                            <Button type='primary' onClick={()=>{Logout()}}>
                                Logout
                            </Button>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </Header>
                <Content style={{ margin: '16px 16px 0 16px', backgroundColor: 'pink' }}>
                    {/* 内容窗口*/}
                    <Outlet />
                    {/* WAITXX为什么这里直接写成组件而不是用钩子函数呢 */}
                </Content>
                {/* <Footer style={{ height: "48px", textAlign: 'center' }}>Southampton COMP WEB</Footer> */}
            </Layout>
        </Layout>
    );
};