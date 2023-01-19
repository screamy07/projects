import axios from "axios";
import {baseUrl} from "./urls";

type AxiosResponse<T> = Promise<AxiosResponse<T>>

const axiosService = axios.create({baseURL:baseUrl})

export type {
    AxiosResponse
}

export {
    axiosService
}