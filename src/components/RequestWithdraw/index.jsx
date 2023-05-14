import { Button, Modal, message, Result } from 'antd';
import styles from "./requestWithdraw.module.scss"
import { useState, useEffect } from 'react';
import { $requestWithdraw } from '../../api/adminApi';
//props:{orderid:number}
function RequestWithdraw(props) {
    const item = props.item;
    const [stateConfirmOpen, seteConfirmOpen] = useState(false);
    const [stateResultOpen, setResultOpen] = useState(false);
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
            orderId: props.orderid
        };
        console.log("Server Request = ", params);
        try {
            let { code, data, message } = await $requestWithdraw(params);
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

    //Click Withdraw button
    const handleWithdrawClick = () => {
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

    function WithdrawResult() {
        //刷新页面的搞法
        if (stateFetch == 1) {
            return (
                <>Loading...</>
            )
        } else if (stateFetch == 2) {
            return (
                <Result
                    status="success"
                    title="Withdraw Success"
                    subTitle="reload page in 3s..."
                />
            );
        } else if (stateFetch == 3) {
            return (
                <Result
                    status="error"
                    title="Withdraw Failed"
                    subTitle="Rload page in 3s..."
                />
            );
        }
    }

    return (
        <div className={styles.requestWithdraw}>
            <Modal
                title="Confirm Withdraw"
                open={stateConfirmOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p>Please confirm that you want to withdraw this service.</p>
                <p>The withdraw can not be undone.</p>
            </Modal>
            <Modal
                title="Withdraw Result"
                open={stateResultOpen}
                footer={null}
                closable={false}
            >
                <WithdrawResult />
            </Modal>
            <Button
                className={styles.button}
                type="primary"
                ghost
                danger
                onClick={handleWithdrawClick}
            >
                Withdraw
            </Button>
        </div>
    )
}
export default RequestWithdraw;