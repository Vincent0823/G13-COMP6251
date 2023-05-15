import React,{useState} from "react"
import './ProviderRegister.scss'
import {Button, Form, Input, Checkbox, Radio, notification, Upload, message, Row, Col} from 'antd';
// Notifications
import MyNotification from "../../components/MyNotification/MyNotification";
import {$createProvider} from "../../api/adminApi";
import TextArea from "antd/es/input/TextArea";
import {PlusOutlined} from "@ant-design/icons";
import {baseURL} from "../../config";
import { UploadOutlined } from '@ant-design/icons';
import axios from "axios";


export default function ProviderRegister() {
    // notifications states
    let [notiMsg,setNotiMsg] = useState({type:'',description:''})
    const [idFileList, setIdFileList] = useState([]);
    const [proofFileList, setProofFileList] = useState([]);

    const [GetSearchVal, SetGetSearchVal] = useState('');

    // form
    let [form] = Form.useForm()

    const onFinish = async (params) => {
        if(!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(params.email))) {
            setNotiMsg({type: 'error',description: 'Wrong Email Format!!'});
            return
        }
        const formData = new FormData()
        idFileList.forEach((file) => {
            formData.set('idfile', file);
        });
        proofFileList.forEach((file) => {
            formData.set('proofFile', file);
        });

        let data = await axios.post(baseURL+'/cw/serviceprovider/signup?email='+params.email+'&password='+params.password+'&description='+params.description+'&address='+params.address+'&servicetype='+params.servicetype,
            formData,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
                }
            }
        )

        if(data.data.code == 200){
            setNotiMsg({type: 'success', description:data.data.data})
        }else{
            setNotiMsg({type: 'error',description: data.data.data})
        }
    };

    const inputRef = React.useRef(null);
    const getEmailValue = (event) => {
        SetGetSearchVal(event.target.value);
    };

    const idUploadProps = {
        onRemove: (file) => {
            const index = idFileList.indexOf(file);
            const newFileList = idFileList.slice();
            newFileList.splice(index, 1);
            setIdFileList(newFileList);
        },
        beforeUpload: (file) => {
            setIdFileList([...idFileList, file]);
            return false;
        },
        fileList: idFileList,
    };

    const proofUploadProps = {
        onRemove: (file) => {
            const index = proofFileList.indexOf(file);
            const newFileList = proofFileList.slice();
            newFileList.splice(index, 1);
            setProofFileList(newFileList);
        },
        beforeUpload: (file) => {
            setProofFileList([...proofFileList, file]);
            return false;
        },
        fileList: proofFileList,
    };

    return (
        <div className='providerRegister'>
            <div className='content'>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="Username"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email address!' }]}
                    >
                        <Input value={GetSearchVal} ref={inputRef} onChange={getEmailValue}/>
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />

                    </Form.Item>

                    <Form.Item label="Password Confirm" name="Consistent Password" rules={[
                        {required:true},
                        ({getFieldValue})=>({
                            validator(rule,value){
                                if(!value || getFieldValue('password') === value){
                                    return Promise.resolve()
                                }
                                return Promise.reject("Two inconsistent password inputs")
                            }
                        })
                    ]}

                    >
                        <Input.Password palceholder="Confirm password"/>
                    </Form.Item>

                    <Form.Item name="servicetype" label="Service Type">
                        <Radio.Group>
                            <Radio value='cleaning'>cleaning</Radio>
                            <Radio value='beauty'>beauty</Radio>
                            <Radio value='babysitting'>babysitting</Radio>
                            <Radio value='pest control'>pest control</Radio>
                            <Radio value='electrical repair'>electrical repair</Radio>
                            <Radio value='plumbing'>plumbing</Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item
                        label="Description"
                        name="description"
                        rules={[{ required: true, message: 'Please input descriptions!' }]}
                    >
                        <TextArea rows={4} />
                    </Form.Item>

                    <Form.Item
                        label="Address"
                        name="address"
                        rules={[{ required: true, message: 'Please input address!' }]}
                    >
                        <Input />
                    </Form.Item>


                    <Form.Item
                        label="Upload"
                        name="upload"
                        rules={[{ required: false}]}
                    >
                        <Row>
                            <Col span={10}>
                                <Upload {...idUploadProps}>
                                    <Button icon={<UploadOutlined />}>Upload ID File</Button>
                                </Upload>
                            </Col>
                            <Col  span={10}>
                                <Upload {...proofUploadProps}>
                                    <Button icon={<UploadOutlined />}>Upload Service-proof File</Button>
                                </Upload>
                            </Col>
                        </Row>
                        <Button
                            type="primary"
                            htmlType='submit'
                            disabled={()=>{
                                let isDisabled = true
                                if(idFileList.length === 0 || proofFileList.length === 0){
                                    isDisabled = true
                                }else{
                                    isDisabled = false
                                }
                                return isDisabled
                            }}
                            //
                            style={{width:'200px',height:'50px',marginTop:'16px'}}
                        >
                            Upload File and sign up
                        </Button>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <div className='register-form-backToLogin'>
                            Already registed? <a href="http://localhost:3000">Login now!</a>
                        </div>
                        <div className='register-form-serviceProvider'>
                            if you are a customer, click<a href="http://localhost:3000/register">here</a>
                            to regist your account
                        </div>

                    </Form.Item>
                </Form>
            </div>


            <MyNotification type={notiMsg.type} description={notiMsg.description}/>
        </div>
    )
}
