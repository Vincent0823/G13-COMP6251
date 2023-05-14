import { useLocation, useSearchParams } from "react-router-dom";
import styles from "./serviceDetailPage.module.scss"
import ServiceDetailTabs from "../../../components/ServiceDetailTabs";
import ServiceDetailIntro from "../../../components/ServiceDetailIntro";
import { LikeOutlined, MessageOutlined, StarOutlined, EnvironmentOutlined } from '@ant-design/icons';
import React from 'react';
import { message, Button, Space } from 'antd';
import { useState, useEffect } from "react";
import { $showOneService, $categoryList } from "../../../api/adminApi";
import ServiceDescription from "../../../components/ServiceDescription";
import CarouselBox from "../../../components/CarouselBox";
import PopUp from "../../../components/PopUp";

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

function ServiceDetailPage() {
    //stateLoad:boolean
    const [stateLoad, setLoad] = useState(false);
    const [stateCategoryOptions, setCategoryOptions] = useState([{}]);
    //stateData:{Service:{}, Review:[{}]}
    const [stateData, setData] = useState({});
    const location = useLocation();

    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (isError) {
            message.error('Server error!');
        }
    }, [isError]);

    //type serviceid:number
    const serviceid = location.state.serviceid;
    console.log("Clicked serviceid = ", serviceid);

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
            console.log("Service detail page categories = ", data);
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
        let params = { id: serviceid }
        console.log("Server Request = ", params);
        try {
            let { code, data, message } = await $showOneService(params);
            if (code != 200) {
                console.log("Server Request ERROR, code = ", code, ", message = ", message);
                return;
            }
            console.log("Server Request SUCCESS: data = ", data);

            // 遍历Review数组，将Review-Customer中的信息插入到对应的Review对象中
            const reviews = data.Review;
            const reviewCustomer = data['Review-Customer'];
            const newReviews = reviews.map(review => {
                const customerid = reviewCustomer[review.reviewid].customerid;
                const email = reviewCustomer[review.reviewid].email;

                return {
                    ...review,
                    customerid,
                    email
                }
            });

            // 将新的数组赋值给data
            data.Review = newReviews;

            console.log("Converted data = ", data);

            setData(data);
            setLoad(true);
        } catch (error) {
            setIsError(true);
            console.log("Server Request ERROR: error = ", error);
        }
    }

    //初次渲染时向后端请求数据
    useEffect(() => {
        fetchData();
    }, []);

    if (!stateLoad) {
        return (
            <div className={styles.serviceDetail}>
                Loading...
            </div>
        )
    }

    return (
        <div className={styles.serviceDetail}>

            {/* title */}
            <div className={styles.part}>
                <p className={styles.serviceName}>{stateData.Service.servicename}</p>
                <p className={styles.prociderId}>provider ID: {stateData.Service.providerid}</p>
            </div>

            <div className={styles.part}>
                <CarouselBox className={styles.imgs} autoplay={false} imgs={stateData.Service.photos} />
            </div>

            {/* ServiceDetail */}
            <div className={styles.part}>
                <ServiceDescription service={stateData.Service} categoryOptions={stateCategoryOptions} />
                <IconText icon={EnvironmentOutlined} text={stateData.Service.city} />
            </div>

            {/* Request */}
            <div className={styles.part}>
                <PopUp serviceid={serviceid} />
            </div>

            {/* Tabs: Detail, time, reviews */}
            <div className={styles.part}>
                <ServiceDetailTabs service={stateData.Service} reviews={stateData.Review} />
            </div>

        </div>
    );
}
export default ServiceDetailPage