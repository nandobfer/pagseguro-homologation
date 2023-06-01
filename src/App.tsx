import React from "react"
import "./sass/_all.scss"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { useMuiTheme } from "./hooks/useMuiTheme"
import { ThemeProvider } from "@mui/material"
import { Snackbar, SnackbarProvider } from "burgos-snackbar"
import { PagseguroOrderContextProvider } from "./contexts/pagseguroOrderContext"
import { PagseguroPaidProvider } from "./contexts/pagseguroPaidContext"

const App = () => {
    const muiTheme = useMuiTheme()

    return (
        <ThemeProvider theme={muiTheme}>
            <BrowserRouter>
                <SnackbarProvider>
                    <PagseguroPaidProvider>
                        <PagseguroOrderContextProvider>
                            <Snackbar />
                            <Routes>
                                <Route index element={<Home />} />
                            </Routes>
                        </PagseguroOrderContextProvider>
                    </PagseguroPaidProvider>
                </SnackbarProvider>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
