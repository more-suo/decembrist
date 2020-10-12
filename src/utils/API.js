import axios from "axios";

export default axios.create({
    baseURL: "https://julia-api.azurewebsites.net/api",
    responseType: "json",
})