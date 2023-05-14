import { useEffect, useState } from "react"
import { Carousel } from 'antd';
import styles from "./CarouselBox.module.scss"

//props:{autoplay?:boolean, imgs?:[]:string[]}
function CarouselBox(props) {
    const [stateImgs, setImgs] = useState([{ path: "", key: 1, alt: "" }]);
    const [stateAutoplay, setAutoplay] = useState(false);
    let autoplaySpeed = 2000;

    useEffect(() => {
        setAutoplay(props.autoplay);
        let imgs = [];
        if (typeof (props.imgs) !== "object") {
            //Just a picture that's not an array
            imgs.push({
                key:0,
                path: props.imgs,
                alt: "0th"
            })
        } else {
            //It's an array of pictures
            for (let i in props.imgs) {
                let img = {
                    key: i,
                    path: props.imgs[i],
                    alt:`${i}th`
                };
                imgs.push(img);
            }
        }
        setImgs(imgs);
    }, []);



    //index: number
    const handleCarouselClick = (index) => {
        //Clicking on a Carousel
        console.log("User click img number ", index);
    }

    return (
        <Carousel
            className={styles.carouselBox}
            autoplay={stateAutoplay}
            autoplaySpeed={autoplaySpeed}
            dotPosition='bottom'>
            {stateImgs.map((img) => (
                <div key={img.key} onClick={() => handleCarouselClick(img.key)}>
                    <img className={styles.img} src={img.path} alt={img.alt} />
                </div>
            ))}
        </Carousel>
    );
}

export default CarouselBox;