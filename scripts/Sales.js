export const SalesList = async () => {
    const response = await fetch("http://localhost:8088/purchases")
    const sales = await response.json()

    let salesHTML = ""
    const salesStringArray = sales.map(
        (sale) => {
            //const salePrice = 

            return `<section>
                <div>
                    Receipt#${sale.id} = 
                </div>
            </section>`
        }
    )

    salesHTML += salesStringArray.join("")

    return salesHTML
}

