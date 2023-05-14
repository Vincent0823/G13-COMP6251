import React, { useEffect, useState } from 'react';
import { message, Descriptions, DatePicker, Button, Form, Input, Result } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
import { $requestAService } from '../../api/adminApi'
import styles from "./requestDescription.module.scss"

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

//props:{serviceid:number, onSubmitStateChange:(submitState)=>void}
function ResuestASurveyForm(props) {
    //0-not submit, 1-submit waiting, 2-success, 3-fail
    const [stateSubmit, setSubmitState] = useState(0);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (isError) {
            message.error('Server error!');
        }
    }, [isError]);

    //向后端请求数据
    //values:{}
    async function fetchData(values) {
        const strStartTime = dayjs(values.timePicker[0]).format("YYYY-MM-DD HH:mm:ss");
        const strEndTime = dayjs(values.timePicker[1]).format("YYYY-MM-DD HH:mm:ss");
        console.log("Converted Time = ", strStartTime, strEndTime);
        let params = {
            customername: values.customername,
            customeraddress: values.customeraddress,
            //starttime: values.starttime,
            //endtime: values.endtime,
            starttime: strStartTime,
            endtime: strEndTime,
            description: values.description,
            serviceid: props.serviceid
        };
        console.log("Server Request = ", params);
        try {
            let { code, data, message } = await $requestAService(params);
            if (code != 200) {
                console.log("Server Request ERROR, code = ", code, ", message = ", message);
                setSubmitState(3);
                //props.onSubmitStateChange(stateSubmit);
                setTimeout(() => {
                    window.location.reload();
                    console.log("Times Up");
                }, 3000);
                return;
            }
            console.log("Server Request SUCCESS: data = ", data);
            setSubmitState(2);
            //props.onSubmitStateChange(stateSubmit);
            //Reload page in ...sec
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        } catch (error) {
            setIsError(true);
            console.log("Server Request ERROR: error = ", error);
            setFetchState(3);
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        }
    }


    //提交表单
    //values: any
    const onFinish = (values) => {
        console.log('Success:', values);
        setSubmitState(1);
        //props.onSubmitStateChange(stateSubmit);
        fetchData(values);
    };


    //刷新页面的搞法
    if (stateSubmit == 1) {
        return (
            <>Loading...</>
        )
    } else if (stateSubmit == 2) {
        return (
            <Result
                status="success"
                title="Submition Success"
                subTitle="Reload page in 3s..."
            />

        );
    } else if (stateSubmit == 3) {
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
                <Descriptions.Item label="Service ID">{props.serviceid}</Descriptions.Item>
            </Descriptions>

            <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                labelCol={{ span: 5 }}
                //wrapperCol={{span: 10}}
                labelAlign='left'
            >
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
                        placement="bottomLeft"
                        getPopupContainer={node => node.parentNode}
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

                <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default ResuestASurveyForm;