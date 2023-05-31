import { createContext, useState } from "react"
import React from "react"

type PagseguroOrderContext = any

interface PagseguroOrderContextContextValue {
    value: PagseguroOrderContext
    setValue: (value: PagseguroOrderContext) => void
}

interface PagseguroOrderContextProviderProps {
    children: React.ReactNode
}

const PagseguroOrderContextContext = createContext<PagseguroOrderContextContextValue>(
    {} as PagseguroOrderContextContextValue
)

export default PagseguroOrderContextContext

export const PagseguroOrderContextProvider: React.FC<PagseguroOrderContextProviderProps> = ({ children }) => {
    const [value, setValue] = useState<PagseguroOrderContext>()

    return (
        <PagseguroOrderContextContext.Provider value={{ value, setValue }}>{children}</PagseguroOrderContextContext.Provider>
    )
}
