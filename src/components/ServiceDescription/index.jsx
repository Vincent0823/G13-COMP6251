import React, { useEffect, useState } from 'react';
import { message, Descriptions } from 'antd';
import { $categoryList } from '../../api/adminApi';
/*description={item.description} 
prices = {item.prices} 
city={item.city} 
arearscover={item.arearscover} 
availableservicetime={item.availableservicetime} 
categoryid={item.categoryid}
*/

//type props:{service:{}, categoryOptions:[{}], isFullDetail:boolean}
function ServiceDescription(props) {
    const [stateCategory, setCategory] = useState("");

    useEffect(() => {
        //加载category
        if (props.service.categoryid !== undefined && props.service.categoryid !== null) {
            setCategory(props.categoryOptions[props.service.categoryid.toString()]);
        }
    }, [props.categoryOptions])

    if (props.isFullDetail) {
        return (
            <div>
                {/* layout horizontal vertical */}
                <p>{props.service.servicename}</p>
                <Descriptions>
                    <Descriptions.Item label="service ID">{props.service.serviceid}</Descriptions.Item>
                    <Descriptions.Item label="provider ID">{props.service.providerid}</Descriptions.Item>
                </Descriptions>
                <Descriptions>
                    <Descriptions.Item label="prices">{props.service.prices}</Descriptions.Item>
                    <Descriptions.Item label="category">{stateCategory}</Descriptions.Item>
                </Descriptions>
                <Descriptions>
                    <Descriptions.Item label="Available Time">{props.service.availableservicetime}</Descriptions.Item>
                </Descriptions>
                <Descriptions>
                    <Descriptions.Item label="Description">{props.service.description}</Descriptions.Item>
                </Descriptions>
                <Descriptions>
                    <Descriptions.Item label="Arearscover">{props.service.arearscover}</Descriptions.Item>
                </Descriptions>
            </div>
        );
    }

    return (
        <div>
            {/* layout horizontal vertical */}
            <Descriptions>
                <Descriptions.Item label="prices">{props.service.prices}</Descriptions.Item>
                <Descriptions.Item label="category">{stateCategory}</Descriptions.Item>
            </Descriptions>
            <Descriptions>
                <Descriptions.Item label="Description">{props.service.description}</Descriptions.Item>
            </Descriptions>
            <Descriptions>
                <Descriptions.Item label="Arearscover">{props.service.arearscover}</Descriptions.Item>
            </Descriptions>
        </div>
    );
}

export default ServiceDescription;