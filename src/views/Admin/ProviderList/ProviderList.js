import React,{useState, useEffect} from "react"
import './ProviderList.scss'
import {Modal, Drawer, Row, Col, Divider, Select, Table, Space, Button, Form, Input, Pagination} from 'antd';
import {$loadProviders, $loadTable} from "../../../api/adminApi";
import {$del} from "../../../api/adminApi";
import MyNotification from "../../../components/MyNotification/MyNotification";
import {type} from "@testing-library/user-event/dist/type";

export default function ProviderList() {
    const [roleList, setRoleList] = useState([])
    const [pageIndex, setPageIndex] = useState(1)
    const [count, setCount] = useState([])
    // notifications states
    let [notiMsg,setNotiMsg] = useState({type:'',description:''})

    const handleDelete = async (ret)=>{

        let data = await $del(ret.providerid)

        if(data.data.code == 200) {
            setNotiMsg({type: 'success', description: data.data.data})
        }else{
            setNotiMsg({type: 'error', description: data.data.data})
        }
    }

    const providerColumns = [
        {
            title: 'Provider ID',
            dataIndex: 'providerid',
            key: 'providerid',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'EmailAddress',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Status',
            key: 'status',
            dataIndex: 'status',
        },
        {
            title: 'Service Type',
            key: 'servicetype',
            dataIndex: 'servicetype',
        },
        {
            title: 'Action',
            key: 'action',
            render: (ret) => (
                <Space size="middle">
                    <Button type="primary" danger className='table-button-agree' onClick={()=>{handleDelete(ret)}}>
                        DELETE
                    </Button>
                </Space>
            )
        }

    ]

    //加载表格数据
    useEffect(()=>{
        $loadProviders(pageIndex,10,).then((data)=>{
            let sumRecords = data.data.total
            setCount(sumRecords)
            data = data.data.records.map(r=>{
                if(r.status == 0){
                    r.status = 'VERIFIED'
                }
                return {
                    ...r,
                    key: r.requestId,
                }
            })
            setRoleList(data)
        })

    },[pageIndex])

    return(
        <>
            <Table style={{marginTop: 16}} columns={providerColumns} dataSource={roleList} pagination={false}/>
            <Pagination size={'default'} style={{marginTop:"10px",}} defaultCurrent={pageIndex}
                        total={count} pageSize={10} onChange={(page)=>{setPageIndex(page)}}/>
            <MyNotification type={notiMsg.type} description={notiMsg.description}/>





        </>

    )
}