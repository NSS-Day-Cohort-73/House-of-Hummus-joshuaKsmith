const transientState = {
    "entreeId": 0,
    "vegetableId": 0,
    "sideId": 0,
}

const resetTransientState = (currentState) => {
    currentState.entreeId = 0
    currentState.vegetableId = 0
    currentState.sideId = 0
}

export const setEntreeChoice = (chosenEntree) => {
    transientState.entreeId = chosenEntree
    console.log(transientState)
}

export const setVegetableChoice = (chosenVegetable) => {
    transientState.vegetableId = chosenVegetable
    console.log(transientState)
}

export const setSideChoice = (chosenSide) => {
    transientState.sideId = chosenSide
    console.log(transientState)
}

export const SavePurchaseSubmission = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }
    const response = await fetch("http://localhost:8088/purchases", postOptions)
    
    const customEvent = new CustomEvent("newPurchaseSubmitted")
    document.dispatchEvent(customEvent)
    
    resetTransientState(transientState)
}