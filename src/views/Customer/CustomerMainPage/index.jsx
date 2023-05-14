import ServiceSearch from "../../../components/ServiceSearch"
import CarouselBox from "../../../components/CarouselBox"
import styles from "./customerMainPage.module.scss"
import {Row,Col,Button} from 'antd'
import {useNavigate} from 'react-router-dom'


//用户主页
function CustomerMainPage() {
    console.log(sessionStorage.getItem('token'));
    let navigate = useNavigate()
    return (
        <div className={styles.customerMainPage}>
            <Row>
                <Col span={7}>
                    <p className={styles.title}>Find the right service</p>
                </Col>
                <Col span={7}>
                    <Button  type={'primary'} style={{marginTop:30}} onClick={()=>{window.location.href="http://localhost:3001"}} >Find in GoogleMap</Button>
                </Col>
            </Row>

            <ServiceSearch 
            className={styles.serviceSearch}/>

            <p className={styles.title}>Promotions</p>
            <CarouselBox autoplay={true} imgs={[
                "https://static.vecteezy.com/system/resources/previews/000/186/629/original/bright-sale-banner-design-vector-template-for-your-promotion.jpg",
                "https://th.bing.com/th/id/OIP.jrBmbUTdVIT9me5yCcMGzwAAAA?pid=ImgDet&rs=1",
                "https://th.bing.com/th/id/R.134502b1716e032309a6f251e90e4674?rik=H1DW6lt0YG4RVw&pid=ImgRaw&r=0"
            ]} />

        </div>
    )
}
export default CustomerMainPage