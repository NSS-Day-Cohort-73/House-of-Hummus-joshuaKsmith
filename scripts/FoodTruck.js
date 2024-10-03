import { SalesList } from "./Sales.js"
import { EntreeOptions } from "./Entrees.js"
import { VegetableOptions } from "./Vegetables.js"
import { SideOptions } from "./SideDishes.js"
import { RecordSale } from "./RecordSale.js"


export const FoodTruck = async () => {
    const entreeOptionsHTML = await EntreeOptions()
    const vegetableOptionsHTML = await VegetableOptions()
    const sideOptionsHTML = await SideOptions()
    const buttonHTML = RecordSale()
    const salesListHTML = await SalesList()

    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>
        <article class="choices">
            <section class="choices__entrees options">
                ${entreeOptionsHTML}
            </section>
            <section class="choices__vegetables options">
                ${vegetableOptionsHTML}
            </section>
            <section class="choices__sides options">
                ${sideOptionsHTML}
            </section>
        </article>
        <article class="order">
            ${buttonHTML}
        </article>
        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesListHTML}
        </article>
    `
}