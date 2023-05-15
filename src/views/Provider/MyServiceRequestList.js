import React, {useEffect, useState} from "react"
import {Carousel, Pagination, Upload} from 'antd';
import {Modal, Card, Row, Col, Divider, Select, Table, Space, Button, Form, Input, List, Drawer} from 'antd';
import './ProviderServicePage.scss'
import {StarOutlined, UploadOutlined} from "@ant-design/icons";
import {
    $handleServiceRequest,
    $fetchRequestDetails,
    $fetchServiceType,
    $fetchServiceRequestList
} from '../../api/adminApi'
import MyNotification from "../../components/MyNotification/MyNotification";
import axios from "../../utils/request";
import {baseURL} from "../../config";

const DescriptionItem = ({ title, content }) => (
    <div className="site-description-item-profile-wrapper">
        <p className="site-description-item-profile-p-label">{title}:</p>
        {content}
    </div>
);

const requestStatusList = [
    {
        value: '',
        label: '--Select--',
    },
    {
        value: '0',
        label: 'Pending'
    },
    {
        value: '1',
        label: 'Accepted',
    },
    {
        value: '2',
        label: 'Rejected',
    },
    {
        value: '3',
        label: 'Require Further Details',
    },
    {
        value: '4',
        label: 'Completed'
    }
]


export default function ProviderServicePage(){

    const [openModal, setOpenModal] = useState(false);
    const [openRejModal, setOpenRejModal] = useState(false);
    const [openInfoModal, setOpenInfoModal] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [orderId, setOrderId] = useState(false);
    const [detailList, setDetailList] = useState([])

    const [count, setCount] = useState(1);

    const [pageIndex, setPageIndex] = useState(1);
    const [pageSize, setPageSize] = useState(6);

    const [requestStatus, setRequestStatus] = useState({id:'',status:'',reason:''});

    const[serviceList, setServiceList] = useState(false)
    const[detailLIst222, setDetailList222] = useState(false)
    const[serviceTypeList, setServiceTypeList] = useState([])
    const[status, setStatus] = useState('')
    const[serviceID, setServiceID] = useState('')
    const[reviews, setReviews] = useState('')
    const[serviceDetails, setServiceDetails] = useState([])
    const [photoFileList, setPhotoFileList] = useState([]);
    let [notiMsg,setNotiMsg] = useState({type:'',description:''})


    const [formRej] = Form.useForm();
    const [formMoreInfo] = Form.useForm();
    const onFinish = async () => {

    }




    useEffect(()=>{
        $fetchServiceRequestList(pageIndex,pageSize,status,serviceID).then(data=>{
            setCount(data.data.total)
            data = data.data.records.map(r=>{
                if(r.status == 0){
                    r.status = 'Pending'
                }else if(r.status == 1){
                    r.status = 'Accepted'
                }else if(r.status == 2){
                    r.status = 'Rejected'
                }else if(r.status == 3){
                    r.status = 'Require Further Details'
                }else if(r.status == 4){
                    r.status = 'Completed'
                }
                return{
                    ...r,
                    key:r.orderid
                }
            }),

                setServiceList(data)
        })

        $fetchServiceType().then(data=>{
            //let typeList = {value:'',label:''}
            let typeList = data.data
            let res = [{value: '', label: '--Select--'}]
            for(let key in typeList){
                let optionItems = {value:key,label:typeList[key]}
                res.push(optionItems)
            }
            setServiceTypeList(res)
        })
    },[status,pageIndex])

    const showRequestDetailsModal = async (ret) => {
        setOpenDrawer(true);
        let data = await $fetchRequestDetails(ret)
        console.log(data)
        if(data.data.serviceRequest.status == 0){
            data.data.serviceRequest.status = 'Pending'
        }else if(data.data.serviceRequest.status == 1){
            data.data.serviceRequest.status = 'Accepted'
        }else if(data.data.serviceRequest.status == 2){
            data.data.serviceRequest.status = 'Rejected'
        }else if(data.data.serviceRequest.status == 3){
            data.data.serviceRequest.status = 'Require Further Details'
        }else if(data.data.serviceRequest.status == 4){
            data.data.serviceRequest.status = 'Completed'
        }

        setDetailList(data.data.serviceRequest)
        if(data.data.service.categoryid == 1){
            //Service status with id NUmber
            data.data.service.categoryid = 'cleaning'
        }else if(data.data.service.categoryid == 2){
            data.data.service.categoryid = 'babysitting'
        }else if(data.data.service.categoryid == 3){
            data.data.service.categoryid = 'pest control'
        }else if(data.data.service.categoryid == 4){
            data.data.service.categoryid = 'plumbing'
        }else if(data.data.service.categoryid == 5){
            data.data.service.categoryid = 'electrical repairs'
        }else if(data.data.service.categoryid == 6){
            data.data.service.categoryid = 'beauty'
        }
        setDetailList222(data.data.service)
    };

    useEffect(()=>{
            $handleServiceRequest(requestStatus.id,requestStatus.status,requestStatus.reason).then(data=>{
                if(data.code == 200){
                    setNotiMsg({type: 'success', description:data.data})
                    location.reload();
                }else{
                    setNotiMsg({type: 'error',description: data.data})
                }
            })


        },
    [requestStatus])

    const handleOkForRejection =async ()=>{
        console.log(orderId)
        setOpenRejModal(true)
        const fieldsValue = await formRej.validateFields();
        setRequestStatus({id:orderId,status:2,reason:fieldsValue.reason})
    }

    const handleOkForMoreInfo =async ()=>{
        setOpenInfoModal(true)
        const fieldsValue = await formMoreInfo.validateFields();
        setRequestStatus({id:orderId,status:3,reason:fieldsValue.reason})
    }

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
                    label="Reason for rejection"
                    name="reason"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>
            </Form>
        )
    }

    const moreInfoReasonForm = () => {
        return (
            <Form
                name="moreInfoReasonForm"
                onFinish={onFinish}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                form={formMoreInfo}
            >
                <Form.Item
                    label="Reason for an Update"
                    name="reason"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>
            </Form>
        )
    }


    const serviceColumns = [{
        title: 'Order ID',
        dataIndex: 'orderid',
        key: 'orderid',
        render: (ret) => (
            <a onClick={()=>{
                showRequestDetailsModal(ret)
            }}>{ret}</a>
        )},
        {
            title: 'Customer',
            dataIndex: 'customername',
            key: 'customername',
        },
        {
            title: 'Service ID',
            dataIndex: 'serviceid',
            key: 'serviceid',
        },
        {
            title: 'Create Time',
            dataIndex: 'createtime',
            key: 'createtime',
        },
        {
            title: 'Request Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Action',
            key: 'action',
            render: (ret) => (
                <Space size="middle">
                    <Button type="primary" className='table-button-agree' onClick={()=>{
                        setRequestStatus({id: ret.orderid,status: 1,reason: "Service Accepted"})

                    }}>
                        Agree
                    </Button>
                    <Button type="primary" className='table-button-delete' onClick={()=>{
                        setOrderId(ret.orderid)
                        setOpenRejModal(true)
                    }} danger>
                        Reject
                    </Button>
                    <Button type="primary" className='table-button-update' onClick={()=>{
                        setOrderId(ret.orderid)
                        setOpenInfoModal(true)}}>
                        Require Update
                    </Button>
                </Space>
            )
        }
    ]


    return(
        <div>
            <Row style={{marginTop:40}}>
                <Col span={4} style={{marginLeft:10}}>
                    <Select  style={{width:160}} className='service-status-selector' options={requestStatusList} defaultValue={'--Select Status--'} onSelect={(value)=>{
                        setStatus(value)
                        setPageIndex(1)
                    }} />
                </Col>
            </Row>
            <Table columns={serviceColumns} dataSource={serviceList} style={{marginTop:20}} pagination={false} />
            <Pagination size={'default'} style={{marginTop:"10px",}} defaultCurrent={pageIndex}
                        total={count} pageSize={pageSize} onChange={(page)=>{
                console.log(page)

                setPageIndex(page)}}/>
            <Modal
                open={openRejModal}
                title="Rejections"
                onOk={handleOkForRejection}
                onCancel={()=>{setOpenRejModal(false)}}
            >
                {rejectReasonForm()}
            </Modal>

            <Modal
                open={openInfoModal}
                title="More Informations"
                onOk={handleOkForMoreInfo}
                onCancel={()=>{setOpenInfoModal(false)}}
            >
                {moreInfoReasonForm()}
            </Modal>
            <Drawer width={440} placement="right" closable={false} onClose={()=>{setOpenDrawer(false)}} open={openDrawer}>
                <p
                    className="site-description-item-profile-p"
                    style={{
                        marginBottom: 24,
                    }}
                >
                    🇬🇧Service Request Details🇬🇧
                </p>
                <Divider />
                <Row>
                    <Col span={24}>
                        <DescriptionItem title="📌 Request ID" content={detailList.orderid} />
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <DescriptionItem title="📌 Create time" content={detailList.createtime} />
                    </Col>
                    <Col span={12}>
                        <DescriptionItem title="📌 Category" content={detailLIst222.categoryid} />
                    </Col>

                </Row>
                <Row>
                    <Col span={12}>
                        <DescriptionItem title="📌 Customer ID" content={detailList.customerid} />
                    </Col>
                    <Col span={12}>
                        <DescriptionItem title="📌 Customer Name" content={detailList.customername} />
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <DescriptionItem title="📌 Description" content={detailList.description} />
                    </Col>
                    <Col span={12}>
                        <DescriptionItem title="📌 Customer Address" content={detailList.customeraddress} />
                    </Col>
                </Row>
                <Divider />
                <Row>
                    <Col span={12}>
                        <DescriptionItem title="📌 Request Status" content={detailList.status} />
                    </Col>
                    <Col span={12}>
                        <DescriptionItem title="📌 Reason" content={detailList.reason} />
                    </Col>
                </Row>
            </Drawer>
            <MyNotification type={notiMsg.type} description={notiMsg.description}/>

        </div>
    )
}