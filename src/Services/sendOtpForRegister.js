import axios from "axios";

export const SendOtpForRegister = async (data) => {
    try {
        const res = await axios.post('http://207.244.254.162:8012/api/v1/sendOtpForRegister', data)
        return res.data
    } catch (e) {
        if (e.response) {
            return e.response.data
        }
    }
}