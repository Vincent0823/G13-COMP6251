import {
    CloseCircleOutlined,
} from '@ant-design/icons';
import { Collapse, Descriptions, Button, Form, Input, Tag, Divider } from 'antd';
const { Panel } = Collapse;
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
import styles from "./requestDescriptionShow.module.scss"
import ServiceDescription from '../ServiceDescription';



//props:{originRequest:{}, service={}}
function RequestDescriptionShow(props) {
    const originRequest = props.originRequest;
    const initialValues = {
        customername: originRequest.customername,
        customeraddress: originRequest.customeraddress,
        //timeRange: originRequest.starttime+" To "+originRequest.endtime,
        timerange: originRequest.starttime + "  ~  " + originRequest.endtime,
        description: originRequest.description
    };

    function ShowReason() {
        if (originRequest.status !== 2) {
            return;
        }
        return (
            <Form.Item
                className={styles.reason}>
                <Tag icon={<CloseCircleOutlined />} color="error">
                    Why rejected
                </Tag>
                <p className={styles.reason}>{originRequest.reason}</p>
            </Form.Item>
        )
    }

    return (
        <div className={styles.requestDescriptionShow}>

            <Descriptions layout="horizontal" size='small'>
                <Descriptions.Item label="Request Number">{originRequest.orderid}</Descriptions.Item>
            </Descriptions>

            <Collapse size="small">
                <Panel header="Service Detail" key="1">
                    <ServiceDescription
                        service={props.service}
                        categoryOptions={props.categoryOptions}
                        isFullDetail={true} />
                </Panel>
            </Collapse>

            <Form
                className={styles.form}
                initialValues={initialValues}
                autoComplete="off"
                labelCol={{ span: 5 }}
                labelAlign='left'
            >

                <ShowReason />

                <Form.Item
                    label="Your Name"
                    name="customername"
                >
                    <Input readOnly />
                </Form.Item>

                <Form.Item
                    label="Your Address"
                    name="customeraddress"
                >
                    <Input readOnly />
                </Form.Item>

                <Form.Item
                    label="Time Range"
                    name="timerange"
                >
                    <Input readOnly />
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="description"
                >
                    <Input.TextArea
                        autoSize={{ minRows: 3 }}
                        readOnly
                        showCount />
                </Form.Item>

            </Form>
            <Descriptions layout="horizontal" size='small'>
                <Descriptions.Item label="Request created at">{originRequest.createtime}</Descriptions.Item>
            </Descriptions>
        </div>
    )
}

export default RequestDescriptionShow