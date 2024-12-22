import { QueryKey, useQuery, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";


type QueryUrlFn<V> = (v: V) => string;

type CreateQueryOptions<V> = {
    url: string | QueryUrlFn<V>,
    queryKey: QueryKey | ((a: V) => QueryKey)
};

type UseCreateQueryOptions<V> = Omit<UseQueryOptions, "queryKey" | "queryFn"> & {
    variables: V
};

type UseQueryType<V> = (a: UseCreateQueryOptions<V>) => UseQueryResult;

const createQuery = <V>(options: CreateQueryOptions<V>): UseQueryType<V> => {
    return (args: UseCreateQueryOptions<V>): UseQueryResult => {
        return useQuery({
            ...options,
            queryKey: typeof options.queryKey === "function" ? options.queryKey(args.variables) : options.queryKey,
            meta: {
                url: typeof options.url === "string" ? options.url : options.url(args.variables)
            }
        });
    };
};

export default createQuery ;