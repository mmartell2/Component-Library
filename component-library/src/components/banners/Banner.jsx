
import { IoIosCheckmarkCircle } from "react-icons/io";
import { GoAlertFill } from "react-icons/go";
import { FaCircleXmark } from "react-icons/fa6";
import { HiMiniInformationCircle } from "react-icons/hi2";

export default function Banner(props){
    let bgColor
    let fontColor
    let h1FontColor
    let icon

    switch(props.status){
        case "success":
            bgColor = "#ECFDF5"
            h1FontColor = "#065F46"
            fontColor = "#047857"
            icon = <IoIosCheckmarkCircle size={30} color="#34D399" />
            break
        case "warning":
            bgColor = "#FFFBEB"
            h1FontColor = "#92400E"
            fontColor = "#B45309"
            icon = <GoAlertFill size={30} color="#FBBF24" />
            break
        case "error":
            bgColor = "#FEF2F2"
            h1FontColor = "#92400E"
            fontColor = "#B45309"
            icon = <FaCircleXmark size={30} color="#F87171" />
            break
        case "info":
            bgColor = "#EFF6FF"
            h1FontColor = "#1E40AF"
            fontColor = "#1C51B9"
            icon = <HiMiniInformationCircle size={30} color="#60A5FA" />
            break
    }

    const styles = {
        backgroundColor: bgColor,
        color: fontColor
    }

    return (
        <div className="banner-container" style={styles}>
            {icon}
            <div>
                <h1 style={{color: h1FontColor}}>{props.title}</h1>
                <p>{props.text}</p>
            </div>
        </div>
    )
}