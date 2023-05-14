import React, {useEffect, useState} from "react"
import {Carousel, Pagination, Upload} from 'antd';
import {Modal, Card, Row, Col, Divider, Select, Table, Space, Button, Form, Input, List, Drawer} from 'antd';
import './ProviderServicePage.scss'
import {StarOutlined, UploadOutlined} from "@ant-design/icons";
import {$fetchServiceList, $fetchDetailedServiceInfo, $fetchServiceType, $showCityList} from '../../api/adminApi'
import MyNotification from "../../components/MyNotification/MyNotification";
import {post} from "../../utils/post";
import {baseURL} from "../../config";
import axios from "../../utils/request";
import cityAxios from 'axios'
import cityJSON from './city.json'

const contentStyle = {
    height: '500px',
    width: '50vw',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    marginLeft:350
};

const DescriptionItem = ({ title, content }) => (
    <div className="site-description-item-profile-wrapper">
        <p className="site-description-item-profile-p-label">{title}:</p>
        {content}
    </div>
);


export default function ProviderServicePage(){

    const [openModal, setOpenModal] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [cityOptions, setCityOptions] = useState([]);
    const [addCityOptions, setAddCityOptions] = useState([]);

    const [openAddService, setOpenAddService] = useState(false);

    const [count, setCount] = useState(1);
    const [pageIndex, setPageIndex] = useState(1);
    const [pageSize, setPageSize] = useState(6);

    const[serviceList, setServiceList] = useState(false)
    const[serviceTypeList, setServiceTypeList] = useState([])
    const[serviceTypeListForGeneral, setServiceTypeListForGeneral] = useState({})
    const[city, setCity] = useState('')
    const[categoryId, setCategoryId] = useState('')
    const[reviews, setReviews] = useState('')
    const[serviceDetails, setServiceDetails] = useState([])
    const [photoFileList, setPhotoFileList] = useState([]);
    let [notiMsg,setNotiMsg] = useState({type:'',description:''})


    const [form] = Form.useForm();

    const IconText = ({ icon, text }) => (
        <Space>
            {React.createElement(icon)}
            {text}
        </Space>
    );

    useEffect(()=>{
        $fetchServiceType().then(data=>{
            //let typeList = {value:'',label:''}
            let typeList = data.data
            let values = Object.values(typeList)
            setServiceTypeListForGeneral(values)
            let res = [{value: '', label: '--Select--'}]
            for(let key in typeList){
                let optionItems = {value:key,label:typeList[key]}
                res.push(optionItems)
            }
            setServiceTypeList(res)
        })

        $fetchServiceList(city,categoryId,pageIndex,pageSize).then(data=>{
            let sumRecords = data.data.myService.total
            setCount(sumRecords)
            data = data.data.myService.records.map(r=>{
                //Service status with id NUmber
                if(r.status == 0){
                    //Service status with id NUmber
                    r.status = 'Available'

                }else if(r.status == 1){
                    r.status = 'Unavailable'
                }

                if(r.categoryid == 1){
                    //Service status with id NUmber
                    r.categoryid = 'cleaning'
                }else if(r.categoryid == 2){
                    r.categoryid = 'babysitting'
                }else if(r.categoryid == 3){
                    r.categoryid = 'pest control'
                }else if(r.categoryid == 4){
                    r.categoryid = 'plumbing'
                }else if(r.categoryid == 5){
                    r.categoryid = 'electrical repairs'
                }else if(r.categoryid == 6){
                    r.categoryid = 'beauty'
                }

                return{
                    ...r,
                    key:r.serviceid
                }
            }),
                setServiceList(data)
        })



        $showCityList().then(data=>{
            let res = [{value: '', label: '--Select--'}]
            for(let city of data.data){
                let optionItems = {value:city,label:city}
                res.push(optionItems)
            }
            setCityOptions(res)
            let list = []
            for(let city of cityJSON){
                let optionItems = {value:city.en_name,label:city.en_name}
                list.push(optionItems)
            }
            setAddCityOptions(list)
        })
    },[city, categoryId, pageIndex])

    const showServiceModal = async (ret) => {
        setOpenModal(true);
        let res = await $fetchDetailedServiceInfo(ret)
        setReviews(res.data.Review)
        setServiceDetails(res.data.Service)
    };
    const showAddService =()=> {
        setOpenAddService(true)
    }

    const serviceColumns = [{
        title: 'Service ID',
        dataIndex: 'serviceid',
        key: 'serviceid',
        render: (ret) => (
            <a onClick={()=>{
                showServiceModal(ret)
            }}>{ret}</a>
        )},
        {
            title: 'photos',
            dataIndex: 'photos',
            key: 'photos',
            render: (picURL) =>(
                <img className='service-list-pics' src={picURL}/>
            )
        },
        {
            title: 'Category',
            dataIndex: 'categoryid',
            key: 'category',
        },
        {
            title: 'Name',
            dataIndex: 'servicename',
            key: 'servicename',
        },
        {
            title: 'City',
            dataIndex: 'city',
            key: 'city',
        },
        {
            title: 'Service Status',
            dataIndex: 'status',
            key: 'status',
        },
    ]

    const photoUploadProps = {
        onRemove: (file) => {
            const index = photoFileList.indexOf(file);
            const newFileList = photoFileList.slice();
            newFileList.splice(index, 1);
            setPhotoFileList(newFileList);
        },
        beforeUpload: (file) => {
            setPhotoFileList([...photoFileList, file]);
            return false;
        },
        fileList: photoFileList,
    };

    const onFinish = async (params) => {
        console.log(params)
        const formData = new FormData()
        console.log(photoFileList)
        photoFileList.forEach((file) => {
            formData.set('file', file);
        });


        let data = await axios.post( baseURL+'/cw/serviceprovider/addAservice?description='
            +params.description+'&prices='+params.prices+'&city='
            +params.city+'&arearscover='+params.arearscover+'&availableservicetime='
            +params.availableservicetime +'&categoryid='
            +params.categoryid+'&servicename='+params.servicename,
            formData,{
                headers:{"Content-Type": "multipart/form-data"}
            }
            )
        if(data.data.code == 200){
            setNotiMsg({type: 'success', description:data.data.data})
        }else{
            setNotiMsg({type: 'error',description: data.data.data})
        }
    }




    const addNewServiceForm = () => {
        return (
            <Form
                name="newServiceForm"
                onFinish={onFinish}
                labelCol={{ span: 9 }}
                wrapperCol={{ span: 16 }}
                form={form}
            >
                <Form.Item
                    label="Service Name"
                    name="servicename"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="description"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Price(per hour)"
                    name="prices"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="City"
                    name="city"
                    rules={[{ required: true }]}
                >
                    <Select
                        defaultValue="--Select City--"
                        style={{
                            width: 200,
                        }}
                        options={addCityOptions}
                    />
                </Form.Item>

                <Form.Item
                    label="Service Area(Postcode)"
                    name="arearscover"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Opening Hours"
                    name="availableservicetime"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Service Type"
                    name="categoryid"
                    rules={[{ required: true }]}
                >
                    <Select
                        defaultValue="--Select Type--"
                        style={{
                            width: 200,
                        }}
                        options={serviceTypeList}
                    />

                </Form.Item>

                <Form.Item
                    label="Upload"
                    name="upload"
                    rules={[{ required: false}]}
                >
                    <Row>
                        <Col span={10}>
                            <Upload {...photoUploadProps}>
                                <Button icon={<UploadOutlined />}>Upload Photos</Button>
                            </Upload>
                        </Col>
                    </Row>
                    <Button
                        type="primary"
                        htmlType='submit'
                        disabled={()=>{
                            let isDisabled = ''
                            if(photoFileList.length === 0){
                                isDisabled = true
                            }else{
                                isDisabled = false
                            }
                            return isDisabled
                        }}
                        //
                        style={{width:'200px',height:'50px',marginTop:'16px'}}
                    >
                        Add Service
                    </Button>
                </Form.Item>
            </Form>

        )
    }

    return(
        <div>
            <Carousel autoplay style={{margin:30}}>
                <div>
                    <img style={contentStyle} src='https://images.unsplash.com/photo-1580691155297-c6dfa3ca61c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZnJ1aXR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60'/>
                </div>
                <div>
                    <img style={contentStyle} src='https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJhYnl8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60'/>
                </div>
                <div>
                    <img style={contentStyle} src='https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXR5fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=900&q=60'/>
                </div>
                <div>
                    <img style={contentStyle} src='https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xlYW5pbmclMjBzZXJ2aWNlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=900&q=60'/>
                </div>
            </Carousel>
            <Row>
                <Col span={4}>
                    <Select className='service-list-selector' options={cityOptions} defaultValue={'Selecet city'} onSelect={(value)=>{
                        setPageIndex(1)
                        setCity(value)
                    }}>

                    </Select>
                </Col>
                <Col span={4} style={{marginLeft:10}}>
                    <Select className='service-list-selector' options={serviceTypeList} defaultValue={'Selecet service'} onSelect={(value)=>{
                        setPageIndex(1)
                        setCategoryId(value)
                    }}>

                    </Select>
                </Col>
                <Col span={4} style={{marginLeft:50}}>
                    <Button type='primary' onClick={()=>{showAddService()}}>Add New Service</Button>
                </Col>
            </Row>
            <Table columns={serviceColumns} dataSource={serviceList} style={{marginTop:20}} pagination={false}/>
            <Pagination size={'default'} style={{marginTop:"10px",}} defaultCurrent={pageIndex}
                        total={count} pageSize={pageSize} onChange={(page)=>{setPageIndex(page)}}/>
            <Modal
                open={openModal}
                title="Service Information Details"
                onOk={()=>{setOpenModal(false);}}
                onCancel={()=>{setOpenModal(false);}}
            >
                <p
                    className="site-description-item-profile-p"
                    style={{
                        marginBottom: 24,
                    }}
                >
                    Service Details
                </p>
                <Divider />
                <Row>
                    <Col span={12}>
                        <DescriptionItem title="Service ID" content={serviceDetails.serviceid} />
                    </Col>
                    <Col span={12}>
                        <DescriptionItem title="Name" content={serviceDetails.servicename} />
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <DescriptionItem title="City" content={serviceDetails.city} />
                    </Col>
                    <Col span={12}>
                        <DescriptionItem title="Price" content={serviceDetails.prices} />
                    </Col>
                </Row>

                <Row>
                    <Col span={12}>
                        <DescriptionItem title="Service Area" content={serviceDetails.arearscover} />
                    </Col>
                    <Col span={12}>
                        <DescriptionItem title="Service Type" content={serviceTypeListForGeneral[serviceDetails.categoryid-1]} />
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <DescriptionItem title="Description" content={serviceDetails.description} />
                    </Col>
                    <Col span={24}>
                        <DescriptionItem title="Opening Hours" content={serviceDetails.availableservicetime} />
                    </Col>
                </Row>

                <Row>
                    <Col span={24}>
                        <DescriptionItem title="Photos" content={
                            <img style={
                                {width:100,
                                    height:100}
                            } src={serviceDetails.photos}/>
                        } />
                    </Col>
                </Row>

                <Row>
                    <Col span={24}>
                        <DescriptionItem title="Reviews" content={
                            <a onClick={()=>{setOpenDrawer(true)}}>View review list</a>
                        }/>
                    </Col>
                </Row>
            </Modal>

            <Modal
                open={openAddService}
                title="ADD NEW SERVICE"
                onOk={()=>{setOpenAddService(false)}}
                onCancel={()=>{setOpenAddService(false)}}
            >
                {addNewServiceForm()}
            </Modal>
            <Drawer width={640} placement="right" closable={false} onClose={()=>{setOpenDrawer(false)}} open={openDrawer}>
                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        onChange: (page) => {
                            console.log(page);
                        },
                        pageSize: 3,
                    }}
                    dataSource={reviews}
                    footer={
                        <div>

                        </div>
                    }
                    renderItem={(item) => (
                        <List.Item
                            key={item.reviewid}
                            actions={[
                                <IconText icon={StarOutlined} text={item.rate} key="list-vertical-star-o" />,
                            ]}
                        >
                            <List.Item.Meta
                                title={<a>{item.comment}</a>}
                                description={'Order Number:'+item.orderid}
                            />
                        </List.Item>
                    )}
                />


            </Drawer>

            <MyNotification type={notiMsg.type} description={notiMsg.description}/>
        </div>
    )
}

