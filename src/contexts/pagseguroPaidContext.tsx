import { createContext, useState } from "react"
import React from "react"

type PagseguroPaid = any

interface PagseguroPaidContextValue {
    value: PagseguroPaid
    setValue: (value: PagseguroPaid) => void
}

interface PagseguroPaidProviderProps {
    children: React.ReactNode
}

const PagseguroPaidContext = createContext<PagseguroPaidContextValue>({} as PagseguroPaidContextValue)

export default PagseguroPaidContext

export const PagseguroPaidProvider: React.FC<PagseguroPaidProviderProps> = ({ children }) => {
    const [value, setValue] = useState<PagseguroPaid>()

    return <PagseguroPaidContext.Provider value={{ value, setValue }}>{children}</PagseguroPaidContext.Provider>
}
