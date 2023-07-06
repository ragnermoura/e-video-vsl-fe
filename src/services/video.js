import { api } from "../config/config"

export const videoApi = {


    PostVideo: async (data) => {

        return await api.post('/videos/upload-video', data, {
            headers: {
                "Content-Type": "multipart/form-data",
                Accept: "application/json",
            }
        }
        )

    },

    PostImageVideo: async (id_video,data) => {

        return await api.patch(`/videos/upload-image/${id_video}`, data, {
            headers: {
                "Content-Type": "multipart/form-data",
                Accept: "application/json",
            }
        }
        )

    },

    getVideos: async (id_user) => {

        return await api.get(`/videos/upload-image/${id_video}`, data, {
            headers: {
                "Content-Type": "multipart/form-data",
                Accept: "application/json",
            }
        }
        )

    }


}