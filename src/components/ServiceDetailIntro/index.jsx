import { useEffect, useState } from "react";
import styles from "./serviceDetail.module.scss"
import CarouselBox from "../CarouselBox";

//props:{serviceDetail:{}}
function ServiceDetailIntro(props){
    const serviceDetail = props.serviceDetail;
    console.log("Service Detail Props = ", serviceDetail)

    return(
        <div className={styles.serviceDetail}>
            <p className={styles.title}>Service ID: {serviceDetail.serviceid}</p>
            <p className={styles.title}>Provider ID: {stateData.seller}</p>

            <p className={styles.title}>Service Imgs</p>
            <CarouselBox autoplay={false}/>

            <p className={styles.title}>Service Description</p>
            <p className={styles.content}>{serviceDetail.description}</p>

            
        </div>
    )
}
export default ServiceDetailIntro;