import { setVegetableChoice } from "./TransientState.js"

const handleVegetableChoice = (changeEvent) => {
    if (changeEvent.target.name === "vegetable") {
        setVegetableChoice(parseInt(changeEvent.target.value))
    }
}

export const VegetableOptions = async () => {
    const response = await fetch("http://localhost:8088/vegetables")
    const vegetables = await response.json()

    document.addEventListener("change", handleVegetableChoice)

    let vegetablesHTML = "<h2>Vegetables</h2>"
    const vegetablesStringArray = vegetables.map(
        (vegetable) => {
            return `<div>
                <input type="radio" name="vegetable" value="${vegetable.id}" /> ${vegetable.type}
            </div>`
        }
    )
    vegetablesHTML += vegetablesStringArray.join("")

    return vegetablesHTML
}
