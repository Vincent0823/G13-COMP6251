import {
    ExclamationCircleOutlined,
} from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { Collapse, message, Descriptions, DatePicker, Button, Form, Input, Result, Tag, Space } from 'antd';
const { Panel } = Collapse;
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
import { $requestResubmit } from '../../api/adminApi'
import styles from "./requestResubmitForm.module.scss"
import ServiceDescription from '../ServiceDescription';

const { RangePicker } = DatePicker;

const rangeConfig = {
    rules: [{ type: 'array', required: true, message: 'Please select time!' }],
};



// customername
// customeraddress
// starttime
// endtime
// description
// serviceid

//props:{originRequest:{}}
function RequestResubmitForm(props) {
    const originRequest = props.originRequest;
    //0-not submit, 1-submit waiting, 2-success, 3-fail
    const [stateSubmit, setSubmitState] = useState(0);
    const [form] = Form.useForm();

    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (isError) {
            message.error('Server error!');
        }
    }, [isError]);

    const initialValues = {
        customername: originRequest.customername,
        customeraddress: originRequest.customeraddress,
        timePicker: [
            dayjs(originRequest.starttime, 'YYYY-MM-DD HH:mm:ss'),
            dayjs(originRequest.endtime, 'YYYY-MM-DD HH:mm:ss')
        ],
        //starttime: originRequest.starttime,
        //endtime: originRequest.endtime,
        description: originRequest.description
    };


    //向后端请求数据
    //values:{}
    async function fetchData(values) {
        let params = {
            //Same as originRequest
            orderid: originRequest.orderid,
            customerid: originRequest.customerid,
            providerid: originRequest.providerid,
            serviceid: originRequest.serviceid,
            categoryid: originRequest.categoryid,
            createtime: originRequest.createtime,
            //May be renewed by customer
            customername: originRequest.customername,
            customeraddress: originRequest.customeraddress,
            starttime: originRequest.starttime,
            endtime: originRequest.endtime,
            description: originRequest.description,

        };

        if (values.customername !== undefined) {
            params.customername = values.customername;
        }
        if (values.customeraddress !== undefined) {
            params.customeraddress = values.customeraddress;
        }
        if (values.timePicker !== undefined) {
            const strStartTime = dayjs(values.timePicker[0]).format("YYYY-MM-DD HH:mm:ss");
            const strEndTime = dayjs(values.timePicker[1]).format("YYYY-MM-DD HH:mm:ss");
            params.starttime = strStartTime;
            params.endtime = strEndTime;
        }
        if (values.description !== undefined) {
            params.description = values.description;
        }

        console.log("originRequest=", originRequest);
        console.log("values=", values);
        console.log("Server Request = ", params);
        try {
            let { code, data, message } = await $requestResubmit(params);
            if (code != 200) {
                console.log("Server Request ERROR, code = ", code, ", message = ", message);
                setSubmitState(3);
                setTimeout(() => {
                    window.location.reload();
                }, 3000);
                return;
            }
            console.log("Server Request SUCCESS: data = ", data);
            setSubmitState(2);
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        } catch (error) {
            setIsError(true);
            console.log("Server Request ERROR: error = ", error);
            setSubmitState(3);
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        }
    }


    //提交表单
    //values: any
    const onFinish = (values) => {
        //params-values, only get values that's changed.
        setSubmitState(1);
        //props.onSubmitStateChange(stateSubmit);
        fetchData(values);

    };

    //Disable if nothing changed
    const shouldUpdate = (prevValues, currentValues) => {
        return Object.keys(prevValues).some((key) => prevValues[key] !== currentValues[key]);
    };


    //刷新页面的搞法
    if (stateSubmit === 1) {
        return (
            <>Loading...</>
        )
    } else if (stateSubmit === 2) {
        return (
            <Result
                status="success"
                title="Submit Success"
                subTitle="reload page in 3s..."
            />
        );
    } else if (stateSubmit === 3) {
        return (
            <Result
                status="error"
                title="Submission Failed"
                subTitle="Rload page in 3s..."
            />
        );
    }


    //errorInfo: any
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className={styles.requestDescription}>

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
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                labelCol={{ span: 5 }}
                labelAlign='left'
            >
                <Form.Item>
                    <Tag icon={<ExclamationCircleOutlined />} color="warning">
                        Why request more info
                    </Tag>
                    <p className={styles.reason}>{originRequest.reason}</p>
                </Form.Item>

                <Form.Item
                    label="Your Name"
                    name="customername"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Time Range"
                    name="timePicker"
                    rules={[{ required: true, message: 'Please input the service time range!' }]}
                    {...rangeConfig}
                >
                    <RangePicker
                        getPopupContainer={node => node.parentNode || document.body}
                        showTime
                        format="YYYY-MM-DD HH:mm:ss"
                    />
                </Form.Item>

                <Form.Item
                    label="Address"
                    name="customeraddress"
                    rules={[{ required: true, message: 'Please input your address!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="description"
                    rules={[{ required: true, message: 'Please input description' }]}
                >
                    <Input.TextArea showCount maxLength={2000} />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button
                        type="primary"
                        htmlType="submit"
                    >
                        Submit Change
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default RequestResubmitForm;