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

        return await api.get(`/videos/get/${id_user}`, {
            headers: {
                'Content-Type': "application/json",
                Accept: "application/json",
            }
        }
        )

    },

    getVideobyId: async (id_video) => {

        return await api.get(`/videos/get-by-id/${id_video}`, {
            headers: {
                'Content-Type': "application/json",
                Accept: "application/json",
            }
        }
        )

    }


}