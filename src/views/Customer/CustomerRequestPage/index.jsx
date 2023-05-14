import { useEffect, useState } from "react"
import RequestList from "../../../components/RequestList"
import RequestListFilter from "../../../components/RequestListFilter";

function CustomerRequestPage() {
    const [stateUser, setUser] = useState("");

    //ERRORXX 这个初始化的value跟requestListFilter的defalutValue要设成一致的
    const [stateFilterValue, setFilterValue] = useState(-1);

    //newFilterValue:string
    const handleFilterChange = (newFilterValue) => {
        setFilterValue(newFilterValue);
    }

    return (
        <div className="home">
            <RequestListFilter onFilterChange={handleFilterChange} />

            {/* Request列表区 */}
            <RequestList filterValue={stateFilterValue}/>
        </div>
    )
}
export default CustomerRequestPage