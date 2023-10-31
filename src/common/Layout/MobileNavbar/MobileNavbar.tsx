import Side__AnalyticsIcon from "../Sidebar/Components/Icons/Side__AnalyticsIcon"
import Side_HomeIcon from "../Sidebar/Components/Icons/Side__HomeIcon"
import s from "./MobileNavbar.module.css"


export default function MobileNavbar() {
    return (
    <div className={s.mobile_nav} >
        <Side_HomeIcon padding w={8} h={8}/>
        <Side__AnalyticsIcon w={8}/>
        <Side__AnalyticsIcon w={8}/>
        <Side__AnalyticsIcon w={8}/>
    </div>
    )
}