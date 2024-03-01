import { API_BASE_URL } from "../constant";

const api = async (url, method, body) => {
    let result = {};

    try {
        const OPTIONS = {
            method,
            body,
            headers: {
                "Accept": "application/json",
                "content-type": "application/json",
            }
        };

        const response = await fetch(`${API_BASE_URL + url}`, OPTIONS);
        if (response.status < 200 || response.status >= 300) {
            throw new Error(`Error encountered. Status code - ${response.status}`);
        }

        result = await response.json();
    } catch (error) {
        result = {
            status: -10,
            message: error?.message ?? "Request error"
        };
    }
    return result;
}

export { api };