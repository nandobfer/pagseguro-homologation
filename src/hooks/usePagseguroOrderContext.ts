import { useContext } from "react"
import PagseguroOrderContext from "../contexts/pagseguroOrderContext"

export const usePagseguroOrder = () => {
    const pagseguroOrderContext = useContext(PagseguroOrderContext)
    const pagseguroOrder = pagseguroOrderContext.value
    const setPagseguroOrder = pagseguroOrderContext.setValue

    return { pagseguroOrder, setPagseguroOrder }
}
