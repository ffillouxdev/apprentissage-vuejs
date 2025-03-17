import axios, { type AxiosInstance } from 'axios';

const apiClient: AxiosInstance = axios.create({
    baseURL: "https://my-json-server.typicode.com/goncalve/plage",
    headers: { "Accept": "application/json" }
})

export const getDestinations = async () => {
    try {
        const response = await apiClient.get("/destinations")
        return response.data;
    } catch (e) {
        console.error("erreur lors de la récupération des destinations:", e);
    }
}  

export const getDestinationById = async (id : number) => {
    try {
        const response = await apiClient.get(`/destinations/${id}`)
        return response.data;
    } catch (e) {
        console.error("erreur lors de la récupération des destinations:", e);
    }
}  