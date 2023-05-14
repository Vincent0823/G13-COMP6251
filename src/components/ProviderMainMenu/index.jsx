import { useState } from 'react';
import {
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useLocation, useNavigate } from "react-router-dom"




// type MenuItem = {
//     key:string,
//     label:string,
//     icon?:React.ReactNode,
//     children?:MenuItem[]

// }

//items:MenuItem[]
const items = [
    {
        key: "/provider/serviceList/ListPage",
        label: "My Service",
        icon: <UserOutlined />
    },
    {
        key:'/provider/requestList',
        label: "Request List",
        icon: <UserOutlined />
    }
]
//下面是antD的原本的写法，比较高级。上面是我们手打的写法，低级好看懂，，方便之后要写活的时候好改
/*
type MenuItem = Required<MenuProps>['items'][number];
function getItem(//定义了一个叫getItm的函数
    label: React.ReactNode,//这一堆是他的参数  参数:参数类型   e.g. age:number
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {//这是这个函数返回值的类型声明（MenuItem）  函数(参数):函数返回值类型{函数实现}
    //这里是函数getItem的实现
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;//这里是将函数返回值断言为MenuItem类型（即将其强制转换为MenuItem类型）
}

const items: MenuItem[] = [ // 定义items数组，将类型声明为MenuItem[]
    getItem('Option 1', '/page1', <PieChartOutlined />),//由上面的getItem函数可以看出，key是'1'
    getItem('Option 2', '/page2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [
        getItem('Team 1', '6'),
        getItem('Team 2', '8')
    ])
];
*/


export default function ProviderMainMenu() {
    const stateUrlLocation = useLocation();

    const navigateTo = useNavigate();//接受一个path，然后跳转到path（必须在<BrowseRouter>树中使用）
    

    let refreshOpenKey = [''];

    //item:MenuItem
    const findPathKey = (item) => {
        if(item?.key === stateUrlLocation.pathname) {
            return true;
        }
    }
    for( let x of items) {
        if(x.children?.find(findPathKey)) {
            //找到了该路径
            refreshOpenKey = [x.key];
        }
    }
    
     //注意如果要定义初始值为空数组 不能写为useState([])，这样数组类型会被定义成never，之后就不能用setStateOpenKeys来改变它了
    const [stateOpenKeys, setStateOpenKeys] = useState(refreshOpenKey);

    //e:{key:string}
    const menuClick = (e) => {
        //关于(e)：
        //怎么知道的应该用e:{key:string[]}这个参数呢？
        //首先，查看AntD文档，Menu中的onClick的API
        //API中写到,onClick的类型是function({ item, key, keyPath, domEvent })
        //这个{ item, key, keyPath, domEvent }就是传给回调函数的东西，它是一个对象
        //用(e)取到这个对象
        //（通过打印e看出我们需要取这个对象中的属性内容都是什么，看看我们需要什么属性）
        //用(e:{key})取到这个对象中的key属性
        //用(e:{key:string})声明这个key属性的类型是string


        navigateTo(e.key);//接收path，并跳转
    }

    //点击sub菜单头
    //keys:string[]
    const handleOpenChange = (keys) => {//e:{key:string[]}传来一个数组，记录了哪些菜单是展开的
        //API:function(openKeys: string[])
        //openKeys就是传给回调函数的东西，它是一个string数组
        //这个string[]记录了哪些菜单是展开的（通过打印keys看出来的）
        //用(keys:string[])取到这个数组

        console.log('openKeys before change (of last time change): ', stateOpenKeys);//可以在这里看上一次修改完的state结果
        console.log('onOpenChange: ', keys);
        if (keys.length > 0) {
            setStateOpenKeys([keys[keys.length - 1]]);
            //WAITXX 课程里说这里直接这么查没用，因为state的修改是异步的，那要怎么查？（A：见上上上行）
            //console.log('openKeys after change: ', stateOpenKeys);
        } else {
            setStateOpenKeys([]);
        }
    }

    return (
        <Menu
            theme="dark"
            //想要刷新页面是保持openKeys不动 在这里改没用。因为openKeys那个属性设了空初始化，要改那个。
            defaultOpenKeys={[]}
            //默认选中效果展示在带哪个key的栏目上
            defaultSelectedKeys={[stateUrlLocation.pathname]}
            mode="inline"
            items={items}
            onClick={menuClick}
            onOpenChange={handleOpenChange}
            //当前菜单展开项的key数组，因为要改，所以写成活得
            openKeys={stateOpenKeys}
        />
    );
};