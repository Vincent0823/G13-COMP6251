import React, {useEffect, useState} from "react"
import {
    Modal,
    Card,
    Row,
    Col,
    Divider,
    Select,
    Table,
    Space,
    Button,
    Form,
    Input,
    List,
    Drawer,
    Pagination
} from 'antd';
import './Service.scss'
import {StarOutlined} from "@ant-design/icons";
import {$loadProvidersByOne, $fetchServiceListByAdmin, $fetchDetailedServiceInfo, $deleteReview, $fetchServiceTypeByAdmin} from '../../../api/adminApi'
import MyNotification from "../../../components/MyNotification/MyNotification";

const DescriptionItem = ({ title, content }) => (
    <div className="site-description-item-profile-wrapper">
        <p className="site-description-item-profile-p-label">{title}:</p>
        {content}
    </div>
);
const cityOptions = [
    {
        value: '',
        label: '--Select--',
    },
    {
        value: 'london',
        label: 'London',
    },
    {
        value: 'southampton',
        label: 'Southampton',
    },
    {
        value: 'bristol',
        label: 'Bristol',
    },
    {
        value: 'leeds',
        label: 'Leeds'
    }
]


export default function Service(){

    const [openModal, setOpenModal] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [openProviderDrawer, setOpenProviderDrawer] = useState(false);
    const[serviceList, setServiceList] = useState(false)
    const[serviceTypeList, setServiceTypeList] = useState([])
    const[city, setCity] = useState('')
    const[categoryId, setCategoryId] = useState('')
    const[reviews, setReviews] = useState('')
    const[serviceDetails, setServiceDetails] = useState([])
    let [notiMsg,setNotiMsg] = useState({type:'',description:''})
    const [count, setCount] = useState(1);
    const [pageIndex, setPageIndex] = useState(1);
    const [pageSize, setPageSize] = useState(6);


    const IconText = ({ icon, text }) => (
        <Space>
            {React.createElement(icon)}
            {text}
        </Space>
    );

    useEffect(()=>{
        $fetchServiceListByAdmin(city,categoryId,pageIndex,pageSize).then(data=>{
            setCount(data.data.data.total)
            console.log(data)
            data = data.data.data.records.map(r=>{
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

        $fetchServiceTypeByAdmin().then(data=>{
            //let typeList = {value:'',label:''}
            let typeList = data.data.data
            let res = [{value: '', label: '--Select--'}]
            for(let key in typeList){
                let optionItems = {value:key,label:typeList[key]}
                res.push(optionItems)
            }
            setServiceTypeList(res)
        })


    },[city, categoryId, pageIndex])

    const showServiceModal = async (ret) => {
        setOpenModal(true);
        let res = await $fetchDetailedServiceInfo(ret)
        console.log(res)
        setReviews(res.data.Review)
        setServiceDetails(res.data.Service)
    };

    const handleOkForService = async () => {
        setOpenModal(false);
    };

    const handleCancelForService = async () => {
        setOpenModal(false);
    };

    const showDrawer =()=> {
        setOpenDrawer(true)
    }
    const onClose = () => {
        setOpenDrawer(false);
    };
    const showProviderDrawer =(res)=> {
        setOpenProviderDrawer(true)
        let data = $loadProvidersByOne(res)
    }
    const onCloseProvider = () => {
        setOpenProviderDrawer(false);
    };

    const delReview = (id) =>{
        $deleteReview(id).then(data=>{
            setNotiMsg({type: 'success',description: 'Review is '+data.data.message+'fully Deleted'})
        })
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

    return(
        <div>
            <Row style={{marginTop:10}}>
                <Col span={4}>
                    <Select className='service-list-selector' options={cityOptions} defaultValue={'Selecet city'} onSelect={(value)=>{
                        setCity(value)
                        setPageIndex(1)
                    }}/>
                </Col>
                <Col span={4} style={{marginLeft:10}}>
                    <Select className='service-list-selector' options={serviceTypeList} defaultValue={'Selecet service'} onSelect={(value)=>{
                        setCategoryId(value)
                        setPageIndex(1)
                    }}/>
                </Col>
            </Row>
            <Table columns={serviceColumns} dataSource={serviceList} style={{marginTop:20}} pagination={false}/>
            <Pagination size={'default'} style={{marginTop:"10px",}} defaultCurrent={pageIndex}
                        total={count} pageSize={pageSize} onChange={(page)=>{setPageIndex(page)}}/>
            <Modal
                open={openModal}
                title="Service Information Details"
                onOk={handleOkForService}
                onCancel={handleCancelForService}
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
                        <DescriptionItem title="Provider ID" content={<a onClick={()=>{showProviderDrawer(serviceDetails.providerid)}}>{serviceDetails.providerid}</a>} />
                    </Col>
                </Row>

                <Row>
                    <Col span={24}>
                        <DescriptionItem title="Service Name" content={serviceDetails.servicename} />
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
                    <Col span={24}>
                        <DescriptionItem title="Service Area" content={serviceDetails.arearscover} />
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
                            <a onClick={()=>{showDrawer()}}>View review list</a>
                        }/>
                    </Col>
                </Row>

            </Modal>
            <Drawer width={640} placement="right" closable={false} onClose={onClose} open={openDrawer}>
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
                            <Button type={'ghost'}  style={{color:"red",left:"470px"}} onClick={()=>{delReview(item.reviewid)}}>
                                Delete Review
                            </Button>
                        </List.Item>
                    )}
                />


            </Drawer>

            <Drawer width={640} placement="right" closable={false} onClose={onCloseProvider} open={openProviderDrawer}>
                <a>
                    provider here
                </a>

            </Drawer>

            <MyNotification type={notiMsg.type} description={notiMsg.description}/>


        </div>
    )
}

