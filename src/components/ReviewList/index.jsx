import { Avatar, List, Space, Rate} from 'antd';
import React, { useState, useEffect } from 'react';
import styles from "./reviewList.module.scss"

//props:{reviews:[{}]}
function ReviewList(props) {
    //type reviews:[{}]
    const reviews = props.reviews;

    return (
        <div className={styles.reviewList}>
            <List
                itemLayout="vertical"

                dataSource={reviews}//数据源：[{}]

                renderItem={(item) => (// 设置列表项的渲染方式，接收每个 item 作为参数
                    <List.Item
                        className={styles.item}
                        key={item.reviewid}
                        extra={<Rate value={item.rate}/>}
                        // 列表操作组
                        actions={[
                            
                        ]}
                    >
                        <List.Item.Meta
                            //avatar 列表元素的图标
                            //ERRORXX 应该是customerid
                            avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${item.customerid}`} />}
                            //title 列表元素标题
                            title={<p>{item.email}</p>}
                            //description 列表元素描述内容
                            description={<p>customer ID {item.customerid}</p>}
                        />
                        {item.comment}
                    </List.Item>
                )}
            />
        </div>
    );
}

export default ReviewList;