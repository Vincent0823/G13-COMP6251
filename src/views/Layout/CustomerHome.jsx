import React, { useEffect, useState } from 'react';
import {message, Breadcrumb, Layout, theme, Button} from 'antd';
import { Outlet, useNavigate } from "react-router-dom"
import MainMenu from "../../components/MainMenu"
import BreadcrumbByLocation from '../../components/BreadcrumbByLocation';
import { $userInfo } from '../../api/adminApi';

const { Header, Content, Footer, Sider } = Layout;

function View() {
    const [collapsed, setCollapsed] = useState(false);
    const [stateUserInfo, setUserInfo] = useState("");
    const [isError, setIsError] = useState(false);

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const themeColor = "rgb(236, 236, 236)";

    const navigateTo = useNavigate();//接受一个path，然后跳转到path（必须在<BrowseRouter>树中使用）

    useEffect(() => {
        if (isError) {
            message.error('Server error!');
        }
    }, [isError]);


    //向后端请求 category表 数据
    async function fetchData() {
        console.log("Server Request (no  param)");
        try {
            let { code, data, message } = await $userInfo();
            if (code != 200) {
                console.log("Server Request ERROR, code = ", code, ", message = ", message);
                return;
            }
            console.log("Server Request SUCCESS: data = ", data);
            console.log("Service detail page categories = ", data);
            setUserInfo(data);
        } catch (error) {
            setIsError(true);
            console.log("Server Request ERROR: error = ", error);
        }
    }

    useEffect(() => {
        //加载category options
        fetchData();
    }, [])




    return (
        <Layout
            style={{ minHeight: '100vh' }}>
            {/* Sider 左边栏 */}
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
                zeroWidthTriggerStyle={{ display: "none" }}
            >
                <div style={{ height: 46, margin: 0, color: "cornflowerblue" }} >
                    <p style={{
                        textAlign: "center ", padding: "14px 0 14px 0",
                        whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"
                    }}>{stateUserInfo.email}</p>
                </div>
                <MainMenu />
            </Sider>
            {/* 右侧内容 */}
            <Layout className="site-layout">
                {/* Header 右侧页头 */}
                <Header style={{ height: "46px", padding: "0 0 0 16px", backgroundColor: themeColor }}>
                    <BreadcrumbByLocation />
                </Header>
                <Content style={{ margin: '16px 16px 0 16px', backgroundColor: themeColor }}>
                    {/* 内容窗口*/}
                    <Outlet />
                </Content>
                <Footer style={{ height: "48px", textAlign: 'center' }}>Southampton COMP WEB</Footer>
            </Layout>
        </Layout>
    );
};

export default View;