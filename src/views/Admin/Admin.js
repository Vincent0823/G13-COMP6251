import React,{useState, useEffect} from "react"
import './Admin.scss'
import {Modal, Drawer, Row, Col, Divider, Select, Table, Space, Button, Form, Input, Pagination} from 'antd';

import {$loadTable} from "../../api/adminApi";
import {$agree} from "../../api/adminApi";
import {$reject} from "../../api/adminApi";
import {$moreInfoPlz} from "../../api/adminApi";
import {$fetchDetailedApplication} from "../../api/adminApi";
import MyNotification from "../../components/MyNotification/MyNotification";

const DescriptionItem = ({ title, content }) => (
    <div className="site-description-item-profile-wrapper">
        <p className="site-description-item-profile-p-label">{title}:</p>
        {content}
    </div>
);

export default function Admin() {
    const [loading, setLoading] = useState(false);
    // notifications states
    let [notiMsg,setNotiMsg] = useState({type:'',description:''})
    const [open, setOpen] = useState(false);
    const [doubleCheckID, setDoubleCheckID] = useState('');
    const [pageSize, setPageSize] = useState(6);

    //打开预览框
    const [roleList, setRoleList] = useState([])
    const [detailList, setDetailList] = useState([])
    const [openRej, setopenRej] = useState(false);
    const [openMoreInfo, setOpenMoreInfo] = useState(false)

    const [count, setCount] = useState(1);
    const [pageIndex, setPageIndex] = useState(1);
    const [applicationStatus, setApplicationStatus] = useState(0);


    const showDrawer = async (ret) => {
        let data = await $fetchDetailedApplication(ret)
        data.data.data.status = 'waiting for verifying'
        setDetailList(data.data.data)
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const [formRej] = Form.useForm();
    const [formMoreInfo] = Form.useForm();

    const onFinish = async () => {
        // formRef.current?.getFieldsValue() 的值即为 form 表单中的数据
        //console.log('Success:', formRef.current?.getFieldsValue());
    };

    const selectItems = [
        {
            value: '0',
            label: 'New Applications',
        },
        {
            value: '1',
            label: 'Approved',
        },
        {
            value: '2',
            label: 'Rejected',
        },
        {
            value: '3',
            label: 'Require More Information',
        }
    ]

    const columnsDetailed = [
        {
            title: 'requestId',
            dataIndex: 'requestid',
            key: 'requestid',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'EmailAddress',
            dataIndex: 'email',
            key: 'email',
        },

        {
            title: 'status',
            key: 'status',
            dataIndex: 'status',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },

        {
            title: 'Descriptioon',
            key: 'description',
            dataIndex: 'description',
        },
        {
            title: 'Request Time',
            key: 'requesttime',
            dataIndex: 'requesttime',
        },
        {
            title: 'Service Type',
            key: 'servicetype',
            dataIndex: 'servicetype',
        },
        {
            title: 'Reason',
            key: 'reason',
            dataIndex: 'reason',
        }

    ]

    const columnBrief = [
        {
            title: 'requestId',
            dataIndex: 'requestid',
            key: 'requestid',
            render: (ret) => (
                <a onClick={()=>showDrawer(ret)}>{ret}</a>
            )
        },
        {
            title: 'EmailAddress',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Service Type',
            dataIndex: 'servicetype',
            key: 'servicetype',
        },
        {
            title: 'Request Time',
            dataIndex: 'requesttime',
            key: 'requesttime',
        },
        {
            title: 'Action',
            key: 'action',
            render: (ret) => (
                <Space size="middle">
                    <Button type="primary" className='table-button-agree' onClick={()=>{agree(ret)}}>
                        Agree
                    </Button>
                    <Button type="primary" className='table-button-delete' onClick={()=>{showRejModal(ret)}} danger>
                        Reject
                    </Button>
                    <Button type="primary" className='table-button-update' onClick={()=>{showMoreInfoModal(ret)}}>
                        Require Update
                    </Button>
                </Space>
            )
        }
    ]
    const [columns, setColumns] = useState(columnBrief);

    const showRejModal = (ret) => {
        setDoubleCheckID(ret.requestid)
        setopenRej(true);
    };

    const showMoreInfoModal = (ret) => {
        setDoubleCheckID(ret.requestid)
        setOpenMoreInfo(true);
    };

    const agree = (ret)=>{
        $agree({ret}).then(data=>{
            if(data.data.code == 200) {
                setNotiMsg({type: 'success', description: data.data.data})
            }else{
                setNotiMsg({type: 'error', description: data.data.data})
            }
            }
        )
    }

    const reject = (ret)=>{
        $reject({ret}).then(data=>{
            if(ret.id == doubleCheckID){
                if(data.data.code == 200) {
                    setNotiMsg({type: 'success', description: "Application Rejected"})
                }else{
                    setNotiMsg({type: 'error', description: data.data.data})
                }
            }else{
                setNotiMsg({type: 'error', description: 'Woops...Seems you have input a different ID that you wish to reject'})
            }
            }
        )
    }

    const moreInfoPlz = (ret)=> {
        $moreInfoPlz({ret}).then(data => {
            if(ret.id == doubleCheckID){
                if(data.data.code == 200) {
                    setNotiMsg({type: 'success', description: data.data.data})
                }else{
                    setNotiMsg({type: 'error', description: data.data.data})
                }
            }else{
                setNotiMsg({type: 'error', description: 'Woops...Seems you have input a different ID that you wish to update'})
            }


            }
        )
    }

    const handleOkForRejection = async () => {
        const fieldsValue = await formRej.validateFields();
        reject(fieldsValue)
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setopenRej(false);
        }, 3000);
    };

    const handleOkForMoreInfo = async () => {
        const fieldsValue = await formMoreInfo.validateFields();
        moreInfoPlz(fieldsValue)
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setOpenMoreInfo(false);
        }, 3000);
    };

    const handleRejCancel = () => {
        setopenRej(false);
    };

    const handleMoreInfoCancel = () => {
        setOpenMoreInfo(false);
    };

    const rejectReasonForm = () => {
        return (
            <Form
                name="rejectReasonForm"
                onFinish={onFinish}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                form={formRej}
            >
                <Form.Item
                    label="Application ID Confirm"
                    name="id"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Reason"
                    name="reason"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>
            </Form>
        )
    }

    const moreInfoRequiredForm = () => {
        return (
            <Form
                name="moreInfoRequiredForm"
                onFinish={onFinish}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                form={formMoreInfo}
            >
                <Form.Item
                    label="Application ID Confirm"
                    name="id"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Reason"
                    name="reason"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>
            </Form>
        )
    }

    //加载表格数据
    useEffect(()=>{
        $loadTable(pageIndex,pageSize,applicationStatus).then((data)=>{
            let sumRecords = data.data.total
            setCount(sumRecords)
            if(applicationStatus == 0){
                setColumns(columnBrief)
            }else{
                setColumns(columnsDetailed)
            }

            data = data.data.records.map(r=>{
                if(r.status == 0){
                    r.status = 'wait for verifying'
                }else if(r.status == 1){
                    r.status = 'Approved'
                }else if(r.status == 2){
                    r.status = 'Rejected'
                }else if(r.status == 3){
                    r.status = 'Request more information'
                }
                return {
                    ...r,
                    key: r.requestId,
                }
            })
            setRoleList(data)
        })

    },[applicationStatus, pageIndex, count])


    return (
        <div>
            <div style={{marginBottom: 16,}}/>
            <Select
                defaultValue="New Applications"
                style={{
                    width: 220,
                }}
                onChange={(value)=>{
                    setPageIndex(1)
                    setApplicationStatus(value)
                }}
                options={selectItems}
            />
            <Modal
                open={openRej}
                title="Rejections"
                onOk={handleOkForRejection}
                onCancel={handleRejCancel}
            >
                {rejectReasonForm()}
            </Modal>

            <Modal
                open={openMoreInfo}
                title="Require an update"
                onOk={handleOkForMoreInfo}
                onCancel={handleMoreInfoCancel}
            >
                {moreInfoRequiredForm()}
            </Modal>
            <Drawer width={640} placement="right" closable={false} onClose={onClose} open={open}>
                <p
                    className="site-description-item-profile-p"
                    style={{
                        marginBottom: 24,
                    }}
                >
                    Provider Application Details
                </p>
                <Divider />
                <Row>
                    <Col span={12}>
                        <DescriptionItem title="Request ID" content={detailList.requestid} />
                    </Col>
                    <Col span={12}>
                        <DescriptionItem title="E-mail Address" content={detailList.email} />
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <DescriptionItem title="Serveice Type" content={detailList.servicetype} />
                    </Col>
                    <Col span={12}>
                        <DescriptionItem title="Request Time" content={detailList.requesttime} />
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <DescriptionItem title="Application Status" content={detailList.status} />
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <DescriptionItem
                            title="Description"
                            content={detailList.description}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col span={12}>
                        <DescriptionItem
                            title="ID Profile"
                            content={<img className='service-proof-file-ID' src={detailList.idphotourl}/>}
                        />
                    </Col>
                    <Col span={12}>
                        <DescriptionItem
                            title="Service Proof Profile"
                            content={<img className='service-proof-file-Service' src={detailList.proofphoto}/>}
                        />
                    </Col>
                </Row>
                <Divider />
            </Drawer>
            <Table style={{marginTop: 16}} columns={columns} dataSource={roleList} pagination={false}/>
            <Pagination size={'default'} style={{marginTop:"10px",}} defaultCurrent={pageIndex}
                        total={count} pageSize={pageSize} onChange={(page)=>{
                            console.log(page)

                            setPageIndex(page)}}/>
            <MyNotification type={notiMsg.type} description={notiMsg.description}/>

        </div>
    )
}