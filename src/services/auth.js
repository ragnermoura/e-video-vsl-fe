import { api } from "../config/config"

export const authApi = {


    login: async (body) => {

        return await api.post(`/login`, body ,{
            headers: {
                'Content-Type': "application/json",
                Accept: "application/json",
            }
        }
        )

    },
    cadastro: async (body) => {

        return await api.post(`/usuario/cadastro`, body ,{
            headers: {
                'Content-Type': "application/json",
                Accept: "application/json",
            }
        }
        )

    }


}