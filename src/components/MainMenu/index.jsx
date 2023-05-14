import { useEffect, useState } from 'react';
import {
    SearchOutlined,
    DatabaseOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useLocation, useNavigate } from "react-router-dom"

//ERRORXX 缺页内跳转时的高亮（选中）保持

//items:MenuItem[]
const items = [
    {
        key: "/servicesearch",
        label: "Service Search",
        icon: <SearchOutlined />,
    },
    {
        key: "/servicesearch/requestlist",
        label: "Request List",
        icon: <DatabaseOutlined />
    },
    {
        key: "/login",
        label: "User Logout",
        icon: <DatabaseOutlined />

    }

    //{
    //     key: "page3",
    //     label: "栏目3",
    //     icon: <UserOutlined />,
    //     children: [
    //         {
    //             key: "/page3/page301",
    //             label: "栏目301"
    //         },
    //         {
    //             key: "/page3/page302",
    //             label: "栏目302"
    //         },
    //         {
    //             key: "/page3/page303",
    //             label: "栏目303"
    //         }
    //     ]
    // }
]


function MainMenu() {
    const stateUrlLocation = useLocation();



    const navigateTo = useNavigate();

    //高亮保持
    useEffect(() => {
        console.log("stateUrlLocation", stateUrlLocation);
        const str = stateUrlLocation.pathname;
        const index = str.indexOf("/", str.indexOf("/") + 1);
        const key = index !== -1 ? str.substring(0, index) : str;
        console.log("key: ", key);
    }, [stateUrlLocation]);


    let refreshOpenKey = [''];

    const [stateMenuKey, setMenuKey] = useState('/servicesearch');

    //按照当前路径找到所在的（二级）栏目，以获得该打开那个一级栏
    //item:MenuItem
    const findPathKey = (item) => {
        if (item?.key === stateUrlLocation.pathname) {
            return true;
        }
    }
    for (let x of items) {
        if (x.children?.find(findPathKey)) {
            //找到了该路径
            refreshOpenKey = [x.key];
        }
    }

    //注意如果要定义初始值为空数组 不能写为useState([])，这样数组类型会被定义成never，之后就不能用setStateOpenKeys来改变它了
    const [stateOpenKeys, setStateOpenKeys] = useState(refreshOpenKey);

    //e:{key:string}
    const menuClick = (e) => {
        //onClick的类型是function({ item, key, keyPath, domEvent })
        //key就是上面items里设的key
        setMenuKey(e.key);
        console.log("stateUrlLocation for the last time ", stateUrlLocation.pathname);
        console.log("menuClick", e.key);
        if (e.key == '/login'){
            window.sessionStorage.setItem('token',null)
            console.log("!!!!!!!!!!!")
        }
        navigateTo(e.key);//接收path，并跳转
    }

    //点击sub菜单头
    //keys:string[]
    const handleOpenChange = (keys) => {//e:{key:string[]}传来一个数组，记录了哪些菜单是展开的
        console.log('openKeys before change (of last time change): ', stateOpenKeys);
        console.log('onOpenChange: ', keys);
        if (keys.length > 0) {
            setStateOpenKeys([keys[keys.length - 1]]);
        } else {
            setStateOpenKeys([]);
        }
    }

    return (
        <Menu
            theme="dark"
            //想要刷新页面是保持openKeys不动 在这里改没用。因为openKeys那个属性设了空初始化，要改那个。
            defaultOpenKeys={[]}
            defaultSelectedKeys={[]}
            mode="inline"
            items={items}
            onClick={menuClick}
            onOpenChange={handleOpenChange}
            //当前菜单展开项的key数组，因为要改，所以写成活得
            openKeys={stateOpenKeys}
            //选中效果展示在带哪个key的栏目上
            selectedKeys={stateMenuKey}
        />
    );
};

export default MainMenu;