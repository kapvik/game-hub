import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "dd26d5f2884b46649fd555d579efc86d"
    }
})

