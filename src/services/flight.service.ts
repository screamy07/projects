import {axiosService} from "./axios.service";
import {urls} from "./urls";

const flightService = {
    getAll:():Promise<any> => axiosService.get(`${urls.articles}?_limit=100`),
    getFlight: (id:{ id: any }):Promise<any> => axiosService.get(`${urls.articles}/${id}`)
}

export {
    flightService
}