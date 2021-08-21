import {config as dotenvConfig} from 'dotenv'
dotenvConfig()

import axios, {AxiosResponse} from "axios";

import {baseUrl} from "./constants/url";

axios.get(`${baseUrl}`)
    .then((response: AxiosResponse<Record<string, string>>) => console.log(response.data['characteristic'])
    )

console.log(baseUrl);
