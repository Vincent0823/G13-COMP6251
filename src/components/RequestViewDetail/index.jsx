import { message, Avatar, List, Space, Modal, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import RequestDescriptionShow from '../RequestDescriptionShow';
import RequestResubmitForm from '../RequestResubmitForm';
import { $requestDetail, $categoryList } from '../../api/adminApi';
import styles from "./requestViewDetail.module.scss"


//props:{item:{}}
function RequestViewDetail(props) {
    const item = props.item;
    console.log("RequestViewDetail, item=", item);
    //弹窗
    const [stateOpenResubmit, setOpenResubmit] = useState(false);
    const [stateOpenDescription, setOpenDescription] = useState(false);
    const [stateClickedItem, setClickedItem] = useState({});
    const [stateButtonName, setButtonName] = useState("View Detail");
    const [stateService, setService] = useState({});
    const [stateCategoryOptions, setCategoryOptions] = useState([{}]);

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
    async function fetchData() {
        const params = {
            id: item.orderid
        };
        console.log("Server Request params = ", params);
        try {
            let { code, data, message } = await $requestDetail(params);
            if (code != 200) {
                console.log("Server Request ERROR, code = ", code, ", message = ", message);
                return;
            }
            console.log("Request View Data: Server Request SUCCESS: data = ", data);
            setService(data.service);
        } catch (error) {
            setIsError(true);
            console.log("Server Request ERROR: error = ", error);
        }
    }

    useEffect(() => {
        //加载service信息
        fetchData();
    }, [])


    useEffect(() => {
        if (item.status == 3) {
            //"request more info"
            setButtonName("Update Detail");
        }
    }, []);


    //点击View Detail按钮，弹出弹窗
    const handleViewClick = (item) => {
        console.log("Click item = ", item);
        setClickedItem(item);
        //if (true) {//ERRORXX 测试用
        if (item.status == 3) {
            //Click item is "request more info"
            setOpenResubmit(true);
        } else {
            setOpenDescription(true);
        }
    }

    //点击Resubmit PopUp内的取消按钮时
    const handleResubmitCancel = () => {
        setOpenResubmit(false);
    };

    //点击Description PopUp内的取消按钮时
    const handleDescriptionCancel = () => {
        setOpenDescription(false);
    };

    return (
        <div className={styles.requestViewDetail}>
            <Modal
                className={styles.popUp}
                open={stateOpenResubmit}
                title="Request Detail (Need more info)"
                // onOk={handleOk}
                onCancel={handleResubmitCancel}
                footer={null}
            >
                <RequestResubmitForm originRequest={stateClickedItem} service={stateService} categoryOptions={stateCategoryOptions} />
            </Modal>
            <Modal
                className={styles.popUp}
                open={stateOpenDescription}
                title="Request Detail"
                // onOk={handleOk}
                onCancel={handleDescriptionCancel}
                footer={null}
            >
                <RequestDescriptionShow originRequest={stateClickedItem} service={stateService} categoryOptions={stateCategoryOptions} />
            </Modal>

            <Button
                className={styles.button}
                ghost
                type="primary"
                onClick={() => handleViewClick(item)}
            >
                {stateButtonName}
            </Button>

        </div>
    );
}

export default RequestViewDetail;