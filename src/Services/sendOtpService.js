import axios from "axios";

export const SendOtpService = async (data) => {
    try {
        const res = await axios.post('http://207.244.254.162:8012/api/v1/sendOtpToUser', data)

        localStorage.setItem("profile_id",res.data.results.profile.id)

        return res.data
    } catch (e) {
        if (e.response) {
            return e.response.data
        }
    }
}