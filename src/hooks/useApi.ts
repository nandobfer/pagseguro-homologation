import { useSnackbar } from "burgos-snackbar"
import { api } from "../api"

interface ApiOptions {
    data?: any
    callback: Function
    errorCallback?: Function
    finallyCallback?: Function
}

export const useApi = () => {
    const { snackbar } = useSnackbar()

    const defaultError = (error: Error, errorCallback?: Function) => {
        errorCallback && errorCallback()
        console.error(error)
        snackbar({
            severity: "error",
            text: "Erro desconhecido",
        })
    }

    const defaultFinally = (finallyCallback?: Function) => {
        finallyCallback && finallyCallback()
    }

    const methods = {
        orders: {
            new: (options: ApiOptions) => {
                api.post("/pagseguro/new", options.data)
                    .then((response) => options.callback(response))
                    .catch((error) => defaultError(error, options.errorCallback))
                    .finally(() => defaultFinally(options.finallyCallback))
            },
        },
    }

    return methods
}
