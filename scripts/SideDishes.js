import { setSideChoice } from "./TransientState.js"

const handleSideChoice = (changeEvent) => {
    if (changeEvent.target.name === "side") {
        setSideChoice(parseInt(changeEvent.target.value))
    }
}

export const SideOptions = async () => {
    const response = await fetch("http://localhost:8088/sides")
    const sides = await response.json()

    document.addEventListener("change", handleSideChoice)

    let sidesHTML = "<h2>Sides</h2>"
    const sidesStringArray = sides.map(
        (side) => {
            return `<div>
                <input type="radio" name="side" value="${side.id}" /> ${side.title}
            </div>`
        }
    )
    sidesHTML += sidesStringArray.join("")

    return sidesHTML
}

