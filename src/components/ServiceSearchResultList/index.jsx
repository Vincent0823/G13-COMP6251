import { LikeOutlined, MessageOutlined, StarOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { message, Avatar, List, Space } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react"
import styles from "./searchResultBox.module.scss"

import { $searchService, $categoryList } from '../../api/adminApi'
import ServiceDescription from '../ServiceDescription';

//{ icon, text }: { icon: React.FC; text: string }
const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

/*type sourceData = {
    id: number,
    title: string,
    rate: string,
    avatar: string,
    description:
    string,
    content:
    string,
    img: string
};*/

//props: { searchInput?: string, categoryid?: number, city?: string }
function SearchResultList(props) {
    const pageSize = 5;//每页展示的数据条数
    //stateCategoryOptions:{}
    const [stateCategoryOptions, setCategoryOptions] = useState([{}]);
    //stateLoad:boolean
    const [stateLoad, setLoad] = useState(false);
    const navigateTo = useNavigate();
    //useState<sourceData[]>
    const [stateData, setData] = useState([]);
    //stateTotal:number 总数据条数
    const [stateTotal, setTotal] = useState(1);
    //stateCurrentPage:number
    const [stateCurrentPage, setCurrentPage] = useState(1);

    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (isError) {
            message.error('Server error!');
        }
    }, [isError]);

    //向后端请求 category表 数据
    async function fetchCategoryData() {
        console.log("Server Request (no  param)");
        try {
            let { code, data, message } = await $categoryList();
            if (code != 200) {
                console.log("Server Request ERROR, code = ", code, ", message = ", message);
                return;
            }
            console.log("Server Request SUCCESS: data = ", data);
            console.log("Service result list categories = ", data);
            setCategoryOptions(data);
        } catch (error) {
            setIsError(true);
            console.log("Server Request ERROR: error = ", error);
        }
    }

    useEffect(() => {
        //加载category options
        fetchCategoryData();
    }, [])


    //向后端请求数据
    //isNewSearch:boolean
    async function fetchData(isNewSearch) {
        let params = {
            page: stateCurrentPage,
            limit: pageSize
        };
        if(isNewSearch) {
            params = {
                page: 1,
                limit: pageSize
            };
        }
        if (props.city !== null && props.city !== undefined) {
            params.city = props.city;
        }
        if (props.categoryid !== null && props.categoryid !== undefined) {
            params.id = props.categoryid;
        }
        console.log("Server Request = ", params);
        try {
            let { code, data, message } = await $searchService(params);
            if (code != 200) {
                console.log("Server Request ERROR, code = ", code, ", message = ", message);
                return;
            }
            console.log("Server Request SUCCESS: data = ", data);
            setTotal(data.total);
            setData(data.records);
            setLoad(true);
        } catch (error) {
            setIsError(true);
            console.log("Server Request ERROR: error = ", error);
        }
    }

    //搜索时，重新取数据并重置到第一页（ERRORXX 这里其实有个bug，重新搜索&&当前不在第一页时会取两遍数据）
    useEffect(() => {
        const isNewSearch = true;
        fetchData(isNewSearch);
        setCurrentPage(1);
    }, [props])

    //翻页时，重新取数据
    useEffect(() => {
        const isNewSearch = false;
        fetchData(isNewSearch);
    }, [stateCurrentPage])

    //page:number
    const handlePageChange = (page) => {
        setCurrentPage(page);
        console.log("flip over new page =", page);
        setLoad(false);
    }

    //点击某个service条目
    //itemId:number
    const handleClickItem = (serviceid) => {
        console.log("Click item id = ", serviceid);
        //useNavigate跳转到service详情页面，并传递id号
        navigateTo("/servicesearch/searchresult/serviceDetail", { state: { serviceid: serviceid } });
    }

    if (!stateLoad) {
        return (
            <div className={styles.searchResultBox}>
                <p>Loading...</p>
            </div>
        )
    }

    return (
        <div className={styles.searchResultBox}>
            <List
                className={styles.list}
                itemLayout="vertical"
                size="large"

                pagination={{
                    //分页器
                    onChange: handlePageChange,
                    current: stateCurrentPage,
                    pageSize: pageSize,//每页展示几条结果
                    total: stateTotal//数据总条数
                }}

                dataSource={stateData}//数据源：[{}]

                renderItem={(item) => (// 设置列表项的渲染方式，接收每个 item 作为参数
                    <List.Item
                        className={styles.item}
                        key={item.serviceid}
                        // 列表操作组
                        actions={[
                            <IconText icon={EnvironmentOutlined} text={item.city} key="list-vertical-city-o" />,
                        ]}
                        // 额外内容，在最右边显示（比如图片）
                        extra={
                            <img
                                width={272}
                                alt="service image"
                                src={
                                    item.photos
                                }
                            />
                        }
                        //划过事件

                        //点击事件
                        onClick={() => handleClickItem(item.serviceid)}
                    >
                        <List.Item.Meta
                            //avatar 列表元素的图标
                            avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${item.providerid}`} />}
                            //title 列表元素标题
                            title={<p>{`Service ID: ${item.serviceid}`}</p>}
                            //description 列表元素描述内容（provider介绍）
                            description={<p>{`Provider ID: ${item.providerid}`}</p>}
                        />

                        {/* 列表内容（service介绍） */}
                        {/* {<ServiceDescription description={item.description} prices={item.prices} arearscover={item.arearscover} availableservicetime={item.availableservicetime} categoryid={item.categoryid} />} */}
                        {<ServiceDescription service={item} categoryOptions={stateCategoryOptions} />}
                    </List.Item>
                )}
            />
        </div>
    );
}

export default SearchResultList;