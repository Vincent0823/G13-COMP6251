import React from 'react';
import { Tabs } from 'antd';
import ReviewList from "../ReviewList"

//key: string
const onChange = (key) => {
    console.log(key);
};

//props:{service:{}, reviews:[{}]}
function ServiceDetailTabs(props) {
    const tabItems = [{
        label: `Description`,
        key: 0,
        children: <div>{props.service.description}</div>,
    }, {
        label: `Available Time`,
        key: 1,
        children: <div>{props.service.availableservicetime}</div>,
    }, {
        label: `Reviews`,
        key: 2,
        children: <ReviewList reviews={props.reviews}/>,//ERRORXX 假数据
    }];

    return (
        <Tabs
            onChange={onChange}
            type="card"
            items={tabItems}
        />
    );
}

export default ServiceDetailTabs;