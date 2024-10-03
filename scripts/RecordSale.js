import { SavePurchaseSubmission } from "./TransientState.js";

const handlePurchaseComboClick = (clickEvent) => {
    if (clickEvent.target.id === "comboPurchase") {
        SavePurchaseSubmission()
    }
}
export const RecordSale = () => {
    document.addEventListener("click", handlePurchaseComboClick)

    return "<div><button id='comboPurchase'>Purchase Combo</button></div>"
}