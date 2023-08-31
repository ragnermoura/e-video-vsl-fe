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

    sendEmailRecovery: async (body) => {
        try {
            return await api.patch(`/usuario/send-code`, body ,{
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

    validateCode: async (body) => {
        try {
            return await api.patch(`/usuario/validation-code`, body ,{
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

    newPassword: async (body) => {
        try {
            return await api.patch(`/usuario/change-password`, body ,{
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