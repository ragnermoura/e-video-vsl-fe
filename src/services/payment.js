import { api } from "../config/config"

export const paymentApi = {


    createAssinatura: async (body) => {
        try {
        return await api.post('/subscription/create', body, {
            headers: {
                'Content-Type': "application/json",
                Accept: "application/json",
            }
        }
        )

        }catch (error) {
            return error?.response?.data
        }
    }

}