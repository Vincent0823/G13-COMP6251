import React from 'react';
import {Breadcrumb, Button} from 'antd';
import { Link, useLocation } from 'react-router-dom';

const breadcrumbNameMap = {
    '/servicesearch': 'Service Search',
    '/servicesearch/searchresult': 'Search Result',
    '/servicesearch/searchresult/serviceDetail': 'Service Detail',
    '/servicesearch/requestlist': 'Request List',
    // 可以添加更多的路径和对应的名称
};
const BreadcrumbByLocation = () => {
    const location = useLocation();
    const { pathname } = location;

    // 根据当前路径生成面包屑的数据结构
    const pathSnippets = pathname.split('/').filter((i) => i);
    const pathList = pathSnippets.map((_, index) => `/${pathSnippets.slice(0, index + 1).join('/')}`);

    return (
        <Breadcrumb
            separator=">"
            style={{ lineHeight: '46px' }}
        >
            <span>{">"}&nbsp;&nbsp;</span>
            {pathList.map((path, index) => {
                const breadcrumbName = breadcrumbNameMap[path];
                const isLast = index === pathList.length - 1;
                const link = isLast ? null : (
                    <Link to={path}>{breadcrumbName}</Link>
                );
                return (
                    <Breadcrumb.Item key={path}>
                        {link}
                        {!link && breadcrumbName}
                    </Breadcrumb.Item>
                );
            })}
        </Breadcrumb>
    );
};

export default BreadcrumbByLocation;