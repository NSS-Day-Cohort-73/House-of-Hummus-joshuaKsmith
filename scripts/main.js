import { FoodTruck } from "./FoodTruck.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = async () => {
    mainContainer.innerHTML = await FoodTruck()
}

renderAllHTML()

document.addEventListener("newPurchaseSubmitted", event => {
    console.log("Data state changed. re-rendering HTML...")
    renderAllHTML()
})

