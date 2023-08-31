import { api } from "../config/config"

export const metricaApi = {

    
    getAnalytics: async (id_user, data) => {

        return await api.get(`/metricas/${id_user}?inicio=${data?.start}&fim=${data?.end}`, {
            headers: {
                'Content-Type': "application/json",
                Accept: "application/json",
            }
        }
        )

    },


}