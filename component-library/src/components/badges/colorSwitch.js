export default function colorSwitch(color) {
    let bgColor
    let fontColor
//switch statement for different color the options: gray/grey, red, yellow, green, blue, indigo, purple, pink
    switch(color){
        case "gray":
            bgColor = "F3F4F6"
            fontColor = "1F2937"
            break
        case "red":
            bgColor = "FEE2E2"
            fontColor = "991B1B"
            break
        case "yellow":
            bgColor = "FEF3C7"
            fontColor = "92400E"
            break
        case "green":
            bgColor = "D1FAE5"
            fontColor = "065F46"
            break
        case "blue":
            bgColor = "DBEAFE"
            fontColor = "1E40AF"
            break
        case "indigo":
            bgColor = "E0E7FF"
            fontColor = "3730A3"
            break
        case "purple":
            bgColor = "EDE9FE"
            fontColor = "5B21B6"
            break
        case "pink":
            bgColor = "FCE7F3"
            fontColor = "9D174D"
            break
        default:
            bgColor = "black"
            fontColor = "yellow"
            break
    }

    return {
        bgColor,
        fontColor
    }
}