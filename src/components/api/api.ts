import axios from 'axios';

const API_URL = "https://api.exchangeratesapi.io/v1";
const access_key: string = "dc7ee138a8f78b75d52d153e1ff25cc2";

export const getLatestRates = async (base: string, symbols: string) => {
    try {
        const response = await axios.get(`${API_URL}/latest?access_key=${access_key}&base=${base}&symbols=${symbols}`);
        return response.data;
    } catch (error: any) {
        console.error("Failed to fetch data: ", error.message);
        throw new Error(error.message);
    }
};