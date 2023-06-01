import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket"
import { useNavigate } from "react-router-dom"
import { useApi } from "./useApi"
import { usePagseguroPaid } from "./usePagseguroPaid"

export const useWebsocket = () => {
    const api = useApi()
    const url = api.url.split("/")[2]
    const navigate = useNavigate()
    const { setPagseguroPaid } = usePagseguroPaid()

    const { sendMessage, lastMessage, readyState } = useWebSocket(`wss://${url}`, {
        onMessage: (message) => {
            const data = JSON.parse(message.data)
            console.log(data)

            if (data.status == "PAID") {
                setPagseguroPaid(data)
            }
        },
    })

    return { sendMessage: (object: any) => sendMessage(JSON.stringify(object)), lastMessage, readyState }
}
