import { useContext } from "react"
import OrderContext from "../contexts/orderContext"

export const useOrder = () => {
    const orderContext = useContext(OrderContext)
    const order = orderContext.value
    const setOrder = orderContext.setValue

    return { ...orderContext }
}
