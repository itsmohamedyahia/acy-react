import Side__AnalyticsIcon from "../Sidebar/Components/Icons/Side__AnalyticsIcon"
import Side_HomeIcon from "../Sidebar/Components/Icons/Side__HomeIcon"
import s from "./MobileNavbar.module.css"


export default function MobileNavbar() {
    return (
    <div className="bg-blue-800 text-indigo-300 p-[0.7rem] lg:flex justify-around hidden absolute bottom-0 left-0 right-0" >
        <Side_HomeIcon padding w={8} h={8}/>
        <Side__AnalyticsIcon w={8}/>
        <Side__AnalyticsIcon w={8}/>
        <Side__AnalyticsIcon w={8}/>
    </div>
    )
}