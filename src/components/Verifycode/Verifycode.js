import {useEffect, useRef, useState} from "react";
import axios from "axios";
import {baseURL} from "../../config";
import {Button} from 'antd';
import './Verifycode.scss'

const VerifyCode = ({ onClick, seconds = 60, email}) => {
    const [time, setTime] = useState(0)
    const timer = useRef(null)

    useEffect(() => {
        timer.current && clearInterval(timer.current);
        return () => timer.current && clearInterval(timer.current);
    }, []);

    useEffect(()=> {
        if( time === seconds ) timer.current = setInterval(()=> setTime(time => --time), 1000)
        else if ( time <= 0 )timer.current && clearInterval(timer.current)
    }, [time])

    const getCode = () => {
        axios({
            method:'get',
            url:baseURL+'/cw/customer/getCode?email='+email
        }).then((res)=>{
            console.log(res)
        })
        if (time) return;
        // 作为组件使用
        onClick?.(()=> {
            setTime(seconds)
        })
        //直接使用
        setTime(seconds)
    }
    return (
        <div style={{position:'absolute',
            bottom:'135px',
            left:'640px'
            }} onClick={getCode}>
            <Button>
                { time? `New code after ${time}s`:'Verification Code'}
            </Button>
        </div>
    )
}
export default VerifyCode;