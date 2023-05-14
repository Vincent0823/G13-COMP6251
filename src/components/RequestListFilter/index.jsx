import React from 'react';
import { Radio } from 'antd';
import styles from "./requestListFilter.module.scss"

//props:{onFilterChange:function}
function RequestListFilter(props) {

    const handleChange = (e) => {
        console.log("Filter Change e = ", e);
        props.onFilterChange(e.target.value);
    }

    return (
        <div className={styles.requestListFilter}>
            <Radio.Group
                className={styles.radioGroup}
                defaultValue={-1}
                buttonStyle="solid"
                onChange={handleChange}
            >
                <Radio.Button className={styles.radioButton} value={-1}>All</Radio.Button>
                <Radio.Button className={styles.radioButton} value={0}>Pending</Radio.Button>
                <Radio.Button className={styles.radioButton} value={1}>Accepted</Radio.Button>
                <Radio.Button className={styles.radioButton} value={2}>Rejected</Radio.Button>
                <Radio.Button className={styles.radioButton} value={3}>Request Info</Radio.Button>
                <Radio.Button className={styles.radioButton} value={4}>Complete</Radio.Button>
            </Radio.Group>
        </div>
    )
}
export default RequestListFilter