export const SalesList = async () => {
    const response = await fetch("http://localhost:8088/purchases?_expand=entree&_expand=vegetable&_expand=side")
    const sales = await response.json()

    let salesHTML = ""
    const salesStringArray = sales.map(
        (sale) => {
            const comboPrice = sale.entree.price + sale.vegetable.price + sale.side.price

            return `<section>
                <div>
                    Receipt#${sale.id} = ${comboPrice.toLocaleString("en-us", {
                        style: "currency",
                        currency: "USD"
                    })}
                </div>
            </section>`
        }
    )
    salesHTML += salesStringArray.join("")

    return salesHTML
}

