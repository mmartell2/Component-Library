import colorSwitch from "./colorSwitch"
//Badge function that takes a shape, color, and background-color prop
export default function Badge(props) {
    
    const {bgColor, fontColor} = colorSwitch(props.color)

    const styles = {
        backgroundColor: `#${bgColor}`,
        color: `#${fontColor}`
    }

    const shape = props.shape ? props.shape : ""

    return (
        <div className={`badge ${shape}`} style={styles}>
            {props.children}
        </div>
    )
}
