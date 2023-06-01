import { Button, CircularProgress, Paper } from "@mui/material"
import React, { useState } from "react"
import { usePagseguroPaid } from "../../hooks/usePagseguroPaid"
import { paper_style } from "../../styles/paper"

interface PagseguroPaidProps {}

export const PagseguroPaid: React.FC<PagseguroPaidProps> = ({}) => {
    const { pagseguroPaid } = usePagseguroPaid()

    const [loading, setLoading] = useState(false)

    return pagseguroPaid ? (
        <>
            <h4>Resposta pagseguro pagamento: </h4>
            <Paper elevation={2} sx={paper_style}>
                <pre>{JSON.stringify(pagseguroPaid, null, 2)}</pre>
            </Paper>
            <Button onClick={() => null} variant="contained" disabled>
                {loading ? <CircularProgress color="secondary" size={"1.5rem"} /> : "Reembolsar"}
            </Button>
        </>
    ) : (
        <></>
    )
}
