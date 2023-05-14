import React,{useState} from "react"

import './Register.scss'
import { Button, Form, Input, Checkbox, Radio, notification} from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
// Notifications
import MyNotification from "../../components/MyNotification/MyNotification";
// VerifyCode
import VerifyCode from "../../components/Verifycode/Verifycode";
import {$createCustomer} from "../../api/adminApi";


export default function Register() {
    // notifications states
    let [notiMsg,setNotiMsg] = useState({type:'',description:''})
    // form
    let [form] = Form.useForm()
    const onFinish = async (values) => {
        let {code,data} = await $createCustomer(values)
        if(code == 200){
            setNotiMsg({type: 'success', description:data})
        }else{
            setNotiMsg({type: 'error',description: data})
        }
    };

    const getCode = (call) => {
        call?.()
    }

    const [GetSearchVal, SetGetSearchVal] = useState('');
    const inputRef = React.useRef(null);
    const getEmailtValue = (event) => {
        SetGetSearchVal(event.target.value);
        console.log(GetSearchVal)
    };




    return (
        <div className='register'>
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
                        <Input value={GetSearchVal} ref={inputRef} onChange={getEmailtValue}/>
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

                    <Form.Item
                        label="Verification"
                        name="verifyCode"
                        rules={[{ required: true, message: 'Please input verification code!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType='submit' style={{width:'200px',height:'50px'}}>
                            Sign Up!
                        </Button>
                        <div className='register-form-backToLogin'>
                            Already registed? <a href="http://localhost:3000">Login now!</a>
                        </div>
                        <div className='register-form-serviceProvider'>
                            if you are a service provider, click<a href="http://localhost:3000/provider/registPage">here</a>
                            to regist your account
                        </div>

                    </Form.Item>

                </Form>

                <VerifyCode onClick={getCode} email={GetSearchVal}/>
            </div>

            <MyNotification type={notiMsg.type} description={notiMsg.description}/>
        </div>
    )
}
