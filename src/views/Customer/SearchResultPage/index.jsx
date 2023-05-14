import ServiceSearch from "../../../components/ServiceSearch"
import ServiceSearchResultList from "../../../components/ServiceSearchResultList";
import { useLocation } from "react-router-dom"
import styles from "./searchResultPage.module.scss"

//搜索服务 结果显示页
function SearchResultPage() {
    const location = useLocation();
    let initValues = {
        searchInput: null,
        city: null,
        categoryid: null
    }
    if (location.state !== undefined && location.state !== null) {
        initValues = location.state;
    }
    console.log("SearchResultPage get search input data:", initValues);
    return (
        <div className={styles.searchResultPage}>
            <p className={styles.title}>Available Service</p>
            {/* 搜索栏 */}
            {/* <ServiceSearch initSearchInput={initValues.searchInput} initCity={initValues.city} initCategoryid={initValues.categoryid} /> */}
            <ServiceSearch initCity={initValues.city} initCategoryid={initValues.categoryid} />

            {/* 服务 结果列表 */}
            <ServiceSearchResultList searchInput={initValues?.searchInput} city={initValues?.city} categoryid={initValues?.categoryid} />
        </div>
    )
}
export default SearchResultPage