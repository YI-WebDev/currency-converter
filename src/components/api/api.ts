import axios from 'axios';

const url = process.env.REACT_APP_API_URL || "";
const api_key = process.env.REACT_APP_API_KEY || "";
const api_host = process.env.REACT_APP_API_HOST || "";

export const getLatestRates = async (base: string, symbols: string, amount: number) => {
    try {
        const response = await axios.get(url, {
            params: {
                format: "json",
                from: base,
                to: symbols,
                amount: amount
            },
            headers: {
                'X-RapidAPI-Key': api_key,
                'X-RapidAPI-Host': api_host
            }
        });

        return response.data;
    } catch (error: any) {
        console.error("Failed to fetch data: ", error.message);
        throw new Error(error.message);
    }
};
