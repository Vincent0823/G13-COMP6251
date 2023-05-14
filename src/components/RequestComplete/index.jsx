import { Button, Modal, message, Result } from 'antd';
import { useState, useEffect } from 'react';
import { $requestComplete } from '../../api/adminApi';
import styles from "./requestComplete.module.scss"
import RequestReviewForm from '../RequestReviewForm';


//props:{orderid:number}
function RequestComplete(props) {
    const [stateConfirmOpen, seteConfirmOpen] = useState(false);
    const [stateResultOpen, setResultOpen] = useState(false);
    const [stateReviewOpen, setReviewOpen] = useState(false);
    //1-waiting, 2-success, 3-fail
    const [stateFetch, setFetchState] = useState(1);
    const [messageApi, contextHolder] = message.useMessage();

    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (isError) {
            message.error('Server error!');
        }
    }, [isError]);



    //向后端请求数据
    async function fetchData() {
        let params = {
            orderid: props.orderid
        };
        console.log("Server Request = ", params);
        try {
            let { code, data, message } = await $requestComplete(params);
            if (code != 200) {
                console.log("Server Request ERROR, code = ", code, ", message = ", message);
                setFetchState(3);
                setTimeout(() => {
                    window.location.reload();
                }, 3000);
                return;
            }
            console.log("Server Request SUCCESS: data = ", data);
            setFetchState(2);
            setTimeout(() => {
                //window.location.reload();
                setResultOpen(false);
                setReviewOpen(true);
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

    //Click Complete button
    const handleCompleteClick = () => {
        seteConfirmOpen(true);
    }

    const handleCancel = () => {
        seteConfirmOpen(false);
    }

    const handleOk = () => {
        seteConfirmOpen(false);
        setResultOpen(true);
        fetchData();
    }

    function CompleteResult() {
        //刷新页面的搞法
        if (stateFetch == 1) {
            return (
                <>Loading...</>
            )
        } else if (stateFetch == 2) {
            return (
                <Result
                    status="success"
                    title="Complete Success"
                    subTitle="Pop up Review Input in 3s..."
                />
            );
        } else if (stateFetch == 3) {
            return (
                <Result
                    status="error"
                    title="Complete Failed"
                    subTitle="Rload page in 3s..."
                />
            );
        }
    }

    return (
        <div className={styles.requestComplete}>
            <Modal
                title="Confirm Complete Request"
                open={stateConfirmOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p>Please confirm that you want to complete this service.</p>
                <p>The complete can not be undone.</p>
            </Modal>
            <Modal
                title="Complete Request Result"
                open={stateResultOpen}
                footer={null}
                closable={false}
            >
                <CompleteResult />
            </Modal>
            <Modal
                title="Review"
                open={stateReviewOpen}
                footer={null}
                closable={false}
            >
                <RequestReviewForm orderid={props.orderid} />
            </Modal>
            <Button
                className={styles.button}
                type="primary"
                onClick={handleCompleteClick}
            >
                Complete
            </Button>
        </div>
    )
}
export default RequestComplete;