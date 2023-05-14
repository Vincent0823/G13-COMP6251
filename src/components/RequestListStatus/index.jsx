import React from 'react';
import {
    CheckCircleOutlined,
    ClockCircleOutlined,
    CloseCircleOutlined,
    ExclamationCircleOutlined,
    MinusCircleOutlined,
    SyncOutlined,
} from '@ant-design/icons';
import { Divider, Space, Tag } from 'antd';

//props:{status:number}
function RequestListStatus(props) {
    if (props.status === undefined || props.status === null) {
        return (<div>ERROR can't get status data</div>);
    }
    const status = props.status;
    switch (status) {
        case 0: return (
            <Tag icon={<ClockCircleOutlined />} color="default">
                pending
            </Tag>
        )
            break;
        case 1: return (
            <Tag icon={<SyncOutlined spin />} color="processing">
                accepted
            </Tag>
        )
            break;
        case 2: return (
            <Tag icon={<CloseCircleOutlined />} color="error">
                rejected
            </Tag>
        )
            break;
        case 3: return (
            <>
            <Tag icon={<ExclamationCircleOutlined />} color="warning">
                request further info
            </Tag>
            </>
        )
            break;
        case 4:
            return (
                <Tag icon={<CheckCircleOutlined />} color="success">
                    complete
                </Tag>
            );
            break;
        default: return (
            <Tag icon={<MinusCircleOutlined />} color="default">
                status数据错误
            </Tag>
        )
            break;
    }
}

export default RequestListStatus;