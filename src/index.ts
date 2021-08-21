import {config as dotenvConfig} from 'dotenv'
dotenvConfig()

import axios, {AxiosResponse} from "axios";

import {baseUrl} from "./constants/url";

import {BASE_QUERY} from "./enums/base-query";

const getBaseAPI = async (baseQueryName: BASE_QUERY) => {
    const baseQueryUrl = await axios.get(`${baseUrl}`)

    return baseQueryUrl.data[baseQueryName]
}
