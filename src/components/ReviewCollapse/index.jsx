import React from 'react';
import { Collapse } from 'antd';
import ReviewList from '../ReviewList';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

//props:{itemProp:{id:number}}
function ReviewCollapse(props) {
    //key: string | string[]
    const onChange = (key) => {
        console.log(key);
    };

    return (
        <Collapse defaultActiveKey={['1']} onChange={onChange}>
            <Panel header="Reviews" key="1">
                <ReviewList itemProp={props.itemProp}/>
            </Panel>
        </Collapse>
    );
}

export default ReviewCollapse;