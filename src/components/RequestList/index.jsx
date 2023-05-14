import { message, Avatar, List, Space, Modal, Button, Descriptions } from 'antd';
import React, { useEffect, useState } from 'react';
import RequestListStatus from '../RequestListStatus';
import styles from "./requestList.module.scss"
import { $showRequestList } from '../../api/adminApi';
import RequestListButtons from '../RequestListButtons';

//props:{filterValue:number}
function RequestList(props) {
    const pageSize = 5;//每页展示的数据条数
    const [stateLoad, setLoad] = useState(false);
    //stateData:[{}]
    const [stateData, setData] = useState([{}]);
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


    //向后端请求数据
    async function fetchData() {
        let params = {
            page: stateCurrentPage,
            limit: pageSize
        };
        console.log("Server Request = ", params);
        try {
            let { code, data, message } = await $showRequestList(params);
            if (code != 200) {
                console.log("Server Request ERROR, code = ", code, ", message = ", message);
                return;
            }
            console.log("Request List: Server Request SUCCESS: data = ", data);
            setTotal(data.total);
            setData(data.records);
            setLoad(true);
        } catch (error) {
            setIsError(true);
            console.log("Server Request ERROR: error = ", error);
        }
    }

    //初次渲染和翻页
    useEffect(() => {
        fetchData();
    }, [stateCurrentPage]);

    //翻页的回调函数
    const handlePageChange = (page) => {//page:number
        setCurrentPage(page);
        setLoad(false);
    }

    //数据尚未加载完
    if (!stateLoad) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div className={styles.requestList}>
            <List
                itemLayout="vertical"
                size="large"
                className={styles.list}
                pagination={{
                    //分页器
                    onChange: handlePageChange,
                    current: stateCurrentPage,
                    pageSize: pageSize,//每页展示几条结果
                    total: stateTotal//数据总条数
                }}

                dataSource={stateData}
                renderItem={(item) => {
                    if (props.filterValue !== -1 && item.status !== props.filterValue) {
                        return;
                    }
                    return (
                        <List.Item
                            className={styles.item}
                            key={item.orderid}
                            extra={
                                <RequestListButtons item={item} />
                            }
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${item.customerid}`} />}
                                title={
                                    <>
                                        <p>Request Number: {item.orderid}</p>

                                    </>
                                }
                                description={
                                    <Descriptions>
                                        <Descriptions.Item label="Service ID">{item.serviceid}</Descriptions.Item>
                                    </Descriptions>
                                }
                            />
                            <Descriptions>
                                <Descriptions.Item label="Description">{item.description}</Descriptions.Item>
                            </Descriptions>
                            <RequestListStatus status={item.status} />
                        </List.Item>
                    )

                }

                }
            />
        </div>
    );
}

export default RequestList;