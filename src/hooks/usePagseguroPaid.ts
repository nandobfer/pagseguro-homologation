import { useContext } from "react"
import PagseguroPaidContext from "../contexts/pagseguroPaidContext"

export const usePagseguroPaid = () => {
    const pagseguroPaidContext = useContext(PagseguroPaidContext)
    const pagseguroPaid = pagseguroPaidContext.value
    const setPagseguroPaid = pagseguroPaidContext.setValue

    return { pagseguroPaid, setPagseguroPaid }
}
