import React,{useState} from 'react'
import {LoadingOutlined, PlusOutlined} from '@ant-design/icons';
import { Upload, message } from 'antd';
import {baseURL} from "../../config";
import axios, {options} from "axios";

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};

export default function UploadImg({form}) {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();

    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.

            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(url);
                console.log(info)
                form.setFieldValue('proofFile',info.file.name)
            });
        }
    };

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );

    return (
        <>
            <Upload
                name="proofFile"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action={baseURL+'/cw/serviceprovider/signup'}
                customRequest={(options)=>{

                    const data= new FormData()
                    data.set('proofFile', options.file)
                    const config= {
                        "headers": {
                            "content-type": 'multipart/form-data;'
                        }
                    }
                    axios.post(options.action, data, config).then((res) => {
                        options.onSuccess(res.data, options.file)
                    }).catch((err) => {
                        console.log('出错了！！！！'+err)
                    })
                }}
                beforeUpload={beforeUpload}
                onChange={handleChange}
            >
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt="avatar"
                        style={{
                            width: '100%',
                        }}
                    />
                ) : (
                    uploadButton
                )}
            </Upload>
        </>
    )
}