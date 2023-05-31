import { Button, CircularProgress, Paper } from "@mui/material"
import React, { useState } from "react"
import { useApi } from "../../hooks/useApi"
import { usePagseguroOrder } from "../../hooks/usePagseguroOrderContext"
import { paper_style } from "../../styles/paper"
import { QRCode } from "react-qrcode-logo"

interface PagseguroOrderProps {}

export const PagseguroOrder: React.FC<PagseguroOrderProps> = ({}) => {
    const vw = window.innerWidth / 100
    const api = useApi()
    const { pagseguroOrder } = usePagseguroOrder()

    const [loading, setLoading] = useState(false)

    const payOrder = () => {
        if (loading) return
        setLoading(true)
    }

    return pagseguroOrder ? (
        <>
            <h4>Resposta pagseguro: </h4>
            <div style={{ width: "100%", gap: "1vw" }}>
                <Paper elevation={2} sx={paper_style}>
                    <pre>{JSON.stringify(pagseguroOrder, null, 2)}</pre>
                </Paper>
                <Paper elevation={2} sx={{ ...paper_style, justifyContent: "center", alignItems: "center", flex: 0.35 }}>
                    <QRCode value={pagseguroOrder.pagseguro.qr_codes[0].text} size={20 * vw} />
                </Paper>
            </div>
            <Button onClick={() => payOrder()} variant="contained">
                {loading ? <CircularProgress color="secondary" size={"1.5rem"} /> : "Pagar PIX"}
            </Button>
        </>
    ) : (
        <></>
    )
}
