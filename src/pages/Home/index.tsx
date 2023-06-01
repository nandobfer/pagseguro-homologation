import React from "react"
import "./style.scss"
import { Button, Paper } from "@mui/material"
import { useOrder } from "../../hooks/useOrder"
import { useApi } from "../../hooks/useApi"
import { NewOrder } from "../../components/NewOrder"
import { PagseguroOrder } from "../../components/PagseguroOrder"
import { PagseguroPaid } from "../../components/PagseguroPaid"

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
    const order = useOrder()
    const api = useApi()

    const generateNewOrder = () => {}

    return (
        <Paper
            className="Home-Page"
            sx={{
                width: "100%",
                height: "100vh",
                flexDirection: "column",
                borderRadius: 0,
                padding: "2vw",
                gap: "1vw",
                overflowY: "auto",
            }}
        >
            <h4>Pedido: </h4>
            <NewOrder />
            <PagseguroOrder />
            <PagseguroPaid />
        </Paper>
    )
}
