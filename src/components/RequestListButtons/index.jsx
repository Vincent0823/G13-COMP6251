import styles from "./requestListButtons.module.scss"
import RequestWithdraw from '../RequestWithdraw';
import RequestViewDetail from '../RequestViewDetail';
import RequestComplete from '../RequestComplete/index';

//props:{item:{}}
function RequestListButtons(props) {
    let status = props.item.status;
    let item = props.item;
    console.log("Buttons item=", props.item);
    //all allow "View Detail"
    if (status === 0 || status == 3) {
        // status=pending/request more info, allow "Withdraw"
        return (
            <div className={styles.requestListButtons}>
                <div className={styles.button}>
                    <RequestWithdraw orderid={item.orderid} />
                </div>
                <div className={styles.button}>
                    <RequestViewDetail item={item} />
                </div>

            </div>
        )
    } else if (status === 1) {
        // status=accept, allow "Complete"
        return (
            <div className={styles.requestListButtons}>
                <div className={styles.button}>
                    <RequestComplete orderid={item.orderid} />
                </div>
                <div className={styles.button}>
                    <RequestViewDetail item={item} />
                </div>
            </div>
        )
    } else {
        // status=reject/complete, only allow "View Detail"
        return (
            <div className={styles.requestListButtons}>
                <div className={styles.button}>
                    <RequestViewDetail item={item} />
                </div>
            </div>
        )
    }
}

export default RequestListButtons;