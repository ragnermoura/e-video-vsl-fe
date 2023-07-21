import { api } from "../config/config"

export const authApi = {


    login: async (body) => {
        try {
            return await api.post(`/login`, body ,{
                headers: {
                    'Content-Type': "application/json",
                    Accept: "application/json",
                }
            }
            )
        } catch (error) {
            return error?.response?.data
        }

        
    },

    cadastro: async (body) => {
        try {
        return await api.post(`/usuario/cadastro`, body ,{
            headers: {
                'Content-Type': "application/json",
                Accept: "application/json",
            }
        }
        )
    } catch (error) {
        return error?.response?.data
    }

    }


}