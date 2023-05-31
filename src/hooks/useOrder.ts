export const useOrder = () => {
    const order: Order = {
        customer: {
            tax_id: "02576698506",
            name: "Fernando",
            email: "fernando@agenciazop.com.br",
        },
        notification_urls: ["https://app.agenciaboz.com.br:4102/api/orders/webhook"],
        qr_codes: [{ amount: { value: 2000 } }],
    }

    return order
}
