
import {post} from "../utils/post";
import {get} from "../utils/get"
import axios from "axios";
import {baseURL} from "../config";
import {Navigate, useNavigate} from "react-router-dom";


// login
export const $login = async (params) =>{
    let loginURL = ''
    if(params.usertype == 'customer'){
        loginURL = '/cw/customer/login'
    }else if (params.usertype == 'provider'){
        loginURL = '/cw/serviceprovider/login'
    }else{
        loginURL = ' '
    }
    let data = await post(loginURL, params, true)
    if(data.code == 200){
        //save token to session storage
        let token = params.email + 'token'
        sessionStorage.setItem('token',data.data[token])
    }
    return data
}

//create customers
export const $createCustomer = async (params) =>{
    let data = await post('/cw/customer/signup', params, true)
    return data

}

//create provider
export const $createProvider = async (params, file) =>{
    let data = await post(baseURL+'/cw/serviceprovider/signup?email='+params.email+'&password='+params.password+'&description='+params.description+'&address='+params.address+'&servicetype='+params.servicetype, file, true)
    //let data  =await post(baseURL+'/cw/serviceprovider/signup',params, false)
    return data

}

//loading Admin-tables
export const $loadTable = async (pageIndex, pageSize, status) =>{
    let fetchURL = ''
    fetchURL= baseURL+'/cw/admin/viewSignupRequest?page='+pageIndex+'&limit='+pageSize+'&status='+status
    let {data} = await axios.get(fetchURL)
    return data
}

//get provider-list
export const $loadProviders = async (pageIndex,pageSize) =>{
    let {data} = await axios.get(baseURL+'/cw/admin/getAllProvider?page='+pageIndex+'&limit='+pageSize)
    return data
}

//get provider-by-one
export const $loadProvidersByOne = async (id) =>{
    let {data} = await axios.get(baseURL+'/cw/admin/getOneProvider?id='+id)
    return data
}

//agree
export const $agree = async (params)=>{
    let data = await axios.get(baseURL+'/cw/admin/approvalSignup?requestId='+params.ret.requestid+'&status=1'+'&reason=agree')
    return data
}

//reject
export const $reject = async (params)=>{
    let data = await axios.get(baseURL+'/cw/admin/approvalSignup?requestId='+params.ret.id+'&status=2'+'&reason='+params.ret.reason)
    return data
}

//Request More Info
export const $moreInfoPlz = async (params)=>{
    let data = await axios.get(baseURL+'/cw/admin/approvalSignup?requestId='+params.ret.id+'&status=3'+'&reason='+params.ret.reason)
    return data
}

//delete provider by ID number
export const $del = async (id)=>{
    let data = await axios.get(baseURL+'/cw/admin/removeOnePovider?id='+id)
    return data
}

//get detailed provider application by ID number
export const $fetchDetailedApplication = async (params)=>{
    let data = await axios.get(baseURL+'/cw/admin/getOneRequest?requestId='+params)
    return data
}

//get detailed service list
export const $fetchServiceList = async (city,id,pageIndex,pageSize)=>{
    let data = await get(baseURL+'/cw/serviceprovider/showMyService?page='+pageIndex+'&limit='+pageSize+'&city='+city+'&categoryId='+id)
    return data
}

//get detailed service list
export const $fetchServiceListByAdmin = async (city,id,pageIndex,pageSize)=>{
    let data = await axios.get(baseURL+'/cw/admin/searchTheService?page='+pageIndex+'&limit='+pageSize+'&city='+city+'&id='+id)
    return data
}

//(Provider)get service-request list
export const $fetchServiceRequestList = async (pageIndex,pageSize,status,id)=>{
    let data = await get(baseURL+'/cw/serviceprovider/showRequestList?page='+pageIndex+'&limit='+pageSize+'&status='+status+'&serviceId='+id)
    return data
}

//(Provider)get service-request details
export const $fetchRequestDetails = async (id)=>{
    let data = await get(baseURL+'/cw/servicerequest/getOneRequestDetail?id='+id)
    return data
}

export const $showCityList = async ()=>{
    let data = await get(baseURL+'/cw/serviceprovided/showCityList')
    return data
}


//get detailed service information
export const $fetchDetailedServiceInfo = async (id)=>{
    let data = await get(baseURL+'/cw/admin/showOneService?id='+id)
    return data
}

//(Provider) handle service request

export const $handleServiceRequest = async (id,status,reason)=>{
    let data = await get(baseURL+'/cw/serviceprovider/operateAService?id='+id+'&status='+status+'&reason='+reason)
    return data
}


//delete reviews
export const $deleteReview = async (id)=>{
    let data = await axios.get(baseURL+'/cw/admin/removeAreview?id='+id)
    return data
}

//fetch service-type list ADMIN ## ADMIN ## ADMIN
export const $fetchServiceTypeByAdmin = async ()=>{
    window.sessionStorage.setItem("Admin-Service-Type-token","eyJhbGciOiJIUzUxMiIsInppcCI6IkdaSVAifQ.H4sIAAAAAAAAAKtWKi5NUrJScgwN8dANDXYNUtJRSq0oULIyNLMwNTM0tzCy0FEqLU4t8kxRsjKDMPMSc1OBWjJyDC3yjIwc0nMTM3P0kvNzlWoBP616i04AAAA.z7Ml2XdpgdSIZwWWyw_ru24dUtArgctXznjYNsz4yHi6iOwu-S8Z4toZvvCt2UQYDuq0iQQR6CqpZeHWsyoNPg");
    axios.defaults.headers.common["authToken"] =  sessionStorage.getItem('Admin-Service-Type-token')
    let data = await axios.get(baseURL+'/cw/category/showCategoryList')
    return data
}

//fetch service-type list
export const $fetchServiceType = async ()=>{
    let data = await get(baseURL+'/cw/category/showCategoryList')
    return data
}

//(Customer) Get result of search and filter Services
export const $searchService = async (params) => {
    let data = await get('/cw/serviceprovided/searchTheService', params)
    return data
}

//(Customer) Get one service detail
export const $showOneService = async (params) => {
    let data = await get('cw/serviceprovided/showOneService', params)
    return data
}

//(Customer) Get requestList
export const $showRequestList = async (params) => {
    let data = await get('cw/customer/showRequestList', params)
    return data
}

//(Customer) Request a Service
export const $requestAService = async (params) => {
    let data = await get('cw/customer/requestAService', params)
    return data
}

//(Customer) Submit a Request Again
export const $requestResubmit = async (params) => {
    let data = await get('cw/customer/submitAgain', params)
    return data
}

//(Customer) Withdraw a Request
export const $requestWithdraw = async (params) => {
    let data = await get('cw/customer/withdrawOrder', params)
    return data
}

//(Customer) Withdraw a Request
export const $requestComplete = async (params) => {
    let data = await get('cw/customer/finishTheOrder', params)
    return data
}

//(Customer) Withdraw a Request
export const $requestAddReview = async (params) => {
    let data = await get('cw/customer/addReview', params)
    return data
}

//(Customer) Get categoryList
export const $categoryList = async () => {
    let data = await get('cw/category/showCategoryList')
    return data
}

//(Customer) Get cityList
export const $cityList = async () => {
    let data = await get('cw/serviceprovided/showCityList')
    return data
}

//(Customer) Get userInfo
export const $userInfo = async () => {
    let data = await get('cw/customer/getInfo')
    return data
}


//(Customer) Get requestDetail
export const $requestDetail = async (params) => {
    let data = await get('cw/servicerequest/getOneRequestDetail', params)
    return data
}



