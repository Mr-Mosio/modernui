import {QueryClient as ReactQueryClient, QueryClientConfig as ReactQueryClientConfig} from '@tanstack/react-query'
import axios from 'axios'

import merge from "deepmerge"


type QueryClientConfig = ReactQueryClientConfig & {
    base_url: string
}


type storage = "LocalStorage" | "Cookie"
const ax = axios.create({
    baseURL: "",
    timeout: 10000,
});


class QueryClient extends ReactQueryClient {
    public base_url ?: string ;
    public storage: storage = "LocalStorage" ;

    constructor(config: QueryClientConfig) {

        super(merge({
            defaultOptions: {
                queries: {
                    queryFn(props) {
                        console.log(props);
                    }
                }
            }  
        }, config))

        this.base_url = config.base_url;
    }

}

export default QueryClient;