//import {Routes, Route, Router, BrowserRouter,useRoutes} from "react-router-dom"

// import components
//Outlet: 占位符组件，类似窗口，用来展示（子级路由）组件
//Link：路由跳转组件。<Link to=path>。注意这是router提供的一个组件，和 tag <link>啊<a>啊 不是一个东西
// import router from "./router/router"
//
// function App() {
//     const outlet = useRoutes(router);
//   return (
//       <div className='App'>
//           {outlet}
//       </div>
//     // <BrowserRouter>
//     //   <Routes>
//     //     <Route path='/' element={<Login/>} />
//     //     <Route path='/register' element={<Register/>} />
//     //     <Route path='/provider/registPage' element={<ProviderRegister/>} />
//     //     <Route path='/Home' element={<Home/>} />
//     //     <Route path='/Admin' element={<Admin/>} />
//     //   </Routes>
//     // </BrowserRouter>
//   );
// }
//
// export default App;
import { useState, useEffect } from 'react'
//Outlet: 占位符组件，类似窗口，用来展示（子级路由）组件
//Link：路由跳转组件。<Link to=path>。注意这是router提供的一个组件，和 tag <link>啊<a>啊 不是一个东西
import router from "../src/router/router"
import RouteGuard from './components/RouteGuard';

function App() {
    const [count, setCount] = useState(0)

    // 不开路由守卫用这个(1/2)
    //const outlet = useRoutes(router);

    return (
        <div className="App">

            {/* 不开路由守卫用这个(2/2) */}
            {/* {outlet} */}

            {/* 开路由守卫用这个 */}
            < RouteGuard />

        </div>
    )
}

export default App
