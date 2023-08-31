import { api } from "../config/config"

export const userApi = {

    atualizaSenha: async (body) => {
        try {
        return await api.patch(`/usuario/senha`, body ,{
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