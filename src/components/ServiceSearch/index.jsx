import { useEffect, useState } from 'react';
import { message, Button, Form, Input, Select } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Option } = Select;
import { $categoryList, $cityList } from '../../api/adminApi';
import styles from "./search.module.scss"

//服务搜索栏（里面有只能给服务搜索用的跳转，不能直接用来做其他搜索）
//type props: { initSearchInput?: string, initcategoryid?: number, initCity?: string }
function Search(props) {
    const [form] = Form.useForm();
    //const [stateCityOptions, setCityOptions] = useState([{}]);
    const [stateCategoryOptions, setCategoryOptions] = useState([{}]);
    const [stateCityOptions, setCityOptions] = useState([]);
    const navigateTo = useNavigate();

    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (isError) {
            message.error('Server error!');
        }
    }, [isError]);

    //向后端请求 category表和city表 数据
    async function fetchData() {
        console.log("Server Request (no  param)");
        try {
            {
                let { code, data, message } = await $categoryList();
                if (code != 200) {
                    console.log("Server Request ERROR, code = ", code, ", message = ", message);
                    return;
                }
                console.log("Server Request SUCCESS: data = ", data);
                //options:[{categoryname:String, categoryid:number}]
                const categoryOptions = Object.entries(data).map(([value, label]) => ({ label, value }));
                console.log("Service search categories = ", categoryOptions);
                setCategoryOptions(categoryOptions);
            }
            {
                let { code, data, message } = await $cityList();
                if (code != 200) {
                    console.log("Server Request ERROR, code = ", code, ", message = ", message);
                    return;
                }
                console.log("Server Request SUCCESS: data = ", data);
                const cityOptions = data.map((cityName) => ({ label: cityName, value: cityName }));
                console.log("Service search cities = ", cityOptions);
                setCityOptions(cityOptions);
            }
        } catch (error) {
            setIsError(true);
            console.log("Server Request ERROR: error = ", error);
        }
    }

    useEffect(() => {
        //加载category options
        fetchData();
    }, [])

    useEffect(() => {
        //加载预填写数据（以保持search栏中显示不变）
        if (Object.keys(props).length != 0) {//如果有传来预填写数据
            console.log("load init data", props);
            form.setFieldsValue({
                //searchInput: props.initSearchInput,
                city: props.initCity,
                categoryid: props.initCategoryid
            });
            //initValues有bug，写不了活的，所以用了setFieldsValue
        }
    }, [stateCategoryOptions]);


    //type values: { searchInput: string, categoryid: number, city: string }
    const onFinish = (values) => {
        console.log('Submit Search:', values);
        //带着输入信息跳转到SearchResultPage
        navigateTo("/servicesearch/searchresult", { state: values });

    };

    return (
        <div className={styles.search}>
            <Form
                className={styles.form}
                layout="inline"
                colon={false}
                form={form}
                onFinish={onFinish}
            >
                {/* 搜索框输入 */}
                {/* <Form.Item name="searchInput" label="Search">
                    <Input placeholder="input placeholder" />
                </Form.Item> */}

                {/* 品类选择 */}
                <Form.Item

                    name="categoryid" label="Category" rules={[{ required: false }]}>
                    <Select
                        placeholder="Select category"
                        allowClear
                        options={stateCategoryOptions}
                    >
                    </Select>
                </Form.Item>

                {/* 城市选择 （写活范例（已注掉）） ERRORXX 改成表*/}
                <Form.Item name="city" label="City" rules={[{ required: false }]}>
                    <Select
                        placeholder="Select city"
                        allowClear
                        options={stateCityOptions}
                    >
                        {/* <Option value="Southampton">Southampton</Option>
                        <Option value="London">London</Option>
                        <Option value="Manchester">Manchester</Option> */}
                    </Select>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">Search</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Search;