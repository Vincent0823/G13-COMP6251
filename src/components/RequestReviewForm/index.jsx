import React, { useEffect, useState } from 'react';
import { message, Button, Form, Input, Result, Rate } from 'antd';
import { $requestAddReview } from '../../api/adminApi'
import styles from "./requestReviewForm.module.scss"


//orderid
//comment
//rate

//props:{orderid:number}
function RequestReviewForm(props) {
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
        let params = {
            orderid: props.orderid,
            comment: values.comment,
            rate: values.rate,
        };
        console.log("Server Request = ", params);
        try{
        let { code, data, message } = await $requestAddReview(params);
        if (code != 200) {
            console.log("Server Request ERROR, code = ", code, ", message = ", message);
            setSubmitState(3);
            setTimeout(() => {
                window.location.reload();
                console.log("Times Up");
            }, 3000);
            return;
        }
        console.log("Server Request SUCCESS: data = ", data);
        setSubmitState(2);
        //Reload page in ...sec
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
        setSubmitState(1);
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
                title="Review Submition Success"
                subTitle="Reload page in 3s..."
            />

        );
    } else if (stateSubmit == 3) {
        return (
            <Result
                status="error"
                title="Review Submission Failed"
                subTitle="Rload page in 3s..."
            />
        );
    }


    //errorInfo: any
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className={styles.requestReviewForm}>
            <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >

                <Form.Item
                    label="Rate"
                    name="rate"
                    rules={[{ required: true, message: 'Please rate the service!' }]}
                >
                    <Rate />
                </Form.Item>

                <Form.Item
                    label="Comment"
                    name="comment"
                    rules={[{ required: true, message: 'Please input your comment!' }]}
                >
                    <Input.TextArea showCount maxLength={2000} />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default RequestReviewForm;