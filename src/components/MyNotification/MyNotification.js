import React,{useEffect} from "react";
import {notification} from "antd";

export default function MyNotification({type='info',message='system information',description}){
    const [api, contextHolder] = notification.useNotification();

    useEffect(()=>{
        // if 'type' is not null, open notifications
        if(type){
            api[type]({
                message,
                description
            })
        }
    },[type,description])
    return (
        <>
            {contextHolder}
        </>
    )
}