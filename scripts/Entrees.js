import { setEntreeChoice } from "./TransientState.js"

const handleEntreeChoice = (changeEvent) => {
    if (changeEvent.target.name === "entree") {
        setEntreeChoice(parseInt(changeEvent.target.value))
    }
}

export const EntreeOptions = async () => {
    const response = await fetch ("http://localhost:8088/entrees")
    const entrees = await response.json()

    document.addEventListener("change", handleEntreeChoice)

    let entreesHTML = "<h2>Base Dish</h2>"
    const entreesStringArray = entrees.map(
        (entree) => {
            return `<div>
                <input type="radio" name="entree" value="${entree.id}" /> ${entree.name}
            </div>`
        }
    )
    entreesHTML += entreesStringArray.join("")

    return entreesHTML
}