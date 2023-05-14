import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import RequestDescription from '../RequestASurveyForm';
import styles from "./popUp.module.scss"

//props:{serviceid:number}
function PopUp(props) {
    let serviceid = props.serviceid
    //const [loading, setLoading] = useState(false);
    const [stateOpen, setOpen] = useState(false);

    //点击弹窗触发按钮时，弹出弹窗
    const handleOnClickShow = () => {
        setOpen(true);
    };

    //点击PopUp内的确认按钮时
    const handleOk = () => {
        //setLoading(true);
        setTimeout(() => {
            //setLoading(false);
            setOpen(false);
        }, 3000);
    };

    //点击PopUp内的取消按钮时
    const handleCancel = () => {
        setOpen(false);
    };

    return (
        <div className={styles.popUpBox}>
            <Button block type="primary" onClick={handleOnClickShow}>
                I WANT
            </Button>
            <Modal
                className={styles.popUp}
                open={stateOpen}
                title="Request a Service"
                // onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
                <RequestDescription serviceid={serviceid} />
            </Modal>
        </div >
    );
};

export default PopUp;