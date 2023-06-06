import { createContext, useEffect, useState } from "react"
import React from "react"

interface OrderContextValue {
    value: Order
    setValue: (value: Order) => void
    method: string
    setMethod: (method: string) => void
}

interface OrderProviderProps {
    children: React.ReactNode
}

const OrderContext = createContext<OrderContextValue>({} as OrderContextValue)

export default OrderContext

export const OrderProvider: React.FC<OrderProviderProps> = ({ children }) => {
    const [method, setMethod] = useState("pix")
    const [card, setCard] = useState({
        encrypted: "",
        holder: {
            name: "Fernando",
        },
        security_code: "123",
        store: false,
    })
    const [value, setValue] = useState<Order>({
        customer: {
            tax_id: "02576698506",
            name: "Fernando",
            email: "fernando@agenciazop.com.br",
        },
        notification_urls: ["https://app.agenciaboz.com.br:4102/api/orders/webhook"],
        items: [
            {
                name: "Prego",
                quantity: 1,
                unit_amount: 200,
            },
        ],
    })

    useEffect(() => {
        setValue({
            ...value,
            qr_codes: method == "pix" ? [{ amount: { value: 200 } }] : undefined,
            charges:
                method == "card"
                    ? [
                          {
                              amount: { currency: "BRL", value: 200 },
                              payment_method: {
                                  capture: true,
                                  card,
                                  installments: 1,
                                  type: "CREDIT_CARD",
                              },
                          },
                      ]
                    : undefined,
        })
    }, [method])

    useEffect(() => {
        const script = document.createElement("script")

        script.src = "https://assets.pagseguro.com.br/checkout-sdk-js/rc/dist/browser/pagseguro.min.js"
        script.async = true
        script.onload = () => {
            // @ts-ignore
            const newcard = window.PagSeguro.encryptCard({
                publicKey:
                    "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAr+ZqgD892U9/HXsa7XqBZUayPquAfh9xx4iwUbTSUAvTlmiXFQNTp0Bvt/5vK2FhMj39qSv1zi2OuBjvW38q1E374nzx6NNBL5JosV0+SDINTlCG0cmigHuBOyWzYmjgca+mtQu4WczCaApNaSuVqgb8u7Bd9GCOL4YJotvV5+81frlSwQXralhwRzGhj/A57CGPgGKiuPT+AOGmykIGEZsSD9RKkyoKIoc0OS8CPIzdBOtTQCIwrLn2FxI83Clcg55W8gkFSOS6rWNbG5qFZWMll6yl02HtunalHmUlRUL66YeGXdMDC2PuRcmZbGO5a/2tbVppW6mfSWG3NPRpgwIDAQAB",
                holder: "Fernando",
                number: "4539620659922097",
                expMonth: "12",
                expYear: "2026",
                securityCode: "123",
            })

            const encrypted = newcard.encryptedCard
            setCard({ ...card, encrypted })
            document.body.removeChild(script)
        }

        document.body.appendChild(script)
    }, [])

    return <OrderContext.Provider value={{ value, setValue, method, setMethod }}>{children}</OrderContext.Provider>
}
