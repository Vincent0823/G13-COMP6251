import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "../src/assets/styles/global.scss"
import 'antd/dist/reset.css'
import App from './App';
import { BrowserRouter } from "react-router-dom"

//document.getElementById('root') as HTMLElement
ReactDOM.createRoot(document.getElementById('root')).render(
    // 严格模式，组件都会加载两遍
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
)
