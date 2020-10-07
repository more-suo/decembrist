import axios from "axios";

export default axios.create({
    baseURL: "http://julia-api.azurewebsites.net/api",
     responseType: "json",
})