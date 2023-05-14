import React,{useState} from "react"
import {useNavigate} from 'react-router-dom'
import './Login.scss'
import { Button, Form, Input, Checkbox, Radio, notification} from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

// Notifications
import MyNotification from "../../components/MyNotification/MyNotification";
// Login
import {$login} from '../../api/adminApi'

export default function Login() {

    let navigate = useNavigate()
    // notifications states
    let [notiMsg,setNotiMsg] = useState({type:'',description:''})
    // form
    let [form] = Form.useForm()
    // when successfully login
    const onFinish =  async (values) => {

        if(values.usertype === 'admin'){
            navigate('/admin/HomePage')
            return
        }
        let {code,message,data} = await $login(values)
        if(code == 200){
            setNotiMsg({type: 'success',description: message})
            if(values.usertype === 'customer'){
                navigate('/servicesearch')
            }else if(values.usertype === 'provider'){
                navigate('/provider/serviceList/ListPage')
            }
        }else {
            setNotiMsg({type: 'error',description: data})
        }
    };

        return (
        <div className='login'>
            <div className='content'>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>
                    </Form.Item>

                    <Form.Item name="usertype" label="">
                        <Radio.Group>
                            <Radio value="customer">customer</Radio>
                            <Radio value="provider">provider</Radio>
                            <Radio value="admin">admin</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        <div className='login-form-register'>
                            Or <a href="http://localhost:3000/register">register now!</a>
                        </div>
                    </Form.Item>
                </Form>
            </div>
            <MyNotification type={notiMsg.type} description={notiMsg.description}/>
        </div>
    )
}