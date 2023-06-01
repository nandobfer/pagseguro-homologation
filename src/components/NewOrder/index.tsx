import React, { useState } from "react"
import { Button, Paper, CircularProgress } from "@mui/material"
import { useOrder } from "../../hooks/useOrder"
import { useApi } from "../../hooks/useApi"
import { usePagseguroOrder } from "../../hooks/usePagseguroOrderContext"
import { paper_style } from "../../styles/paper"
import { useWebsocket } from "../../hooks/useWebsocket"

interface NewOrderProps {}

export const NewOrder: React.FC<NewOrderProps> = ({}) => {
    const order = useOrder()
    const api = useApi()
    const { setPagseguroOrder } = usePagseguroOrder()
    const ws = useWebsocket()

    const [loading, setLoading] = useState(false)

    const generateNewOrder = () => {
        if (loading) return
        setLoading(true)

        api.orders.new({
            data: order,
            callback: (response: any) => {
                setPagseguroOrder(response.data.pagseguro)
                ws.sendMessage({ order: response.data.order })
            },
            finallyCallback: () => setLoading(false),
        })
    }

    return (
        <>
            <Paper elevation={3} sx={paper_style}>
                <pre>{JSON.stringify(order, null, 2)}</pre>
            </Paper>
            <Button onClick={() => generateNewOrder()} variant="contained">
                {loading ? <CircularProgress color="secondary" size={"1.5rem"} /> : "Gerar pedido"}
            </Button>
        </>
    )
}
