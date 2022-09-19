import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '36b6c59ce8mshc194a5f63044d98p19fa9fjsn4ed3df72f4e4',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers:cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath:"cryptoApi",
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder) => ({
        getCryptos: builder.query({
            query:(limit)=> createRequest(`/coins?limit=${limit}`),
        }),
        getCryptoDetails: builder.query({
            query:(coinId)=> createRequest(`coin/${coinId}`),
        }),
        getCryptoHistory: builder.query({
            query:({referenceCurrencyUuid, timePeriod})=> createRequest(`coin/${referenceCurrencyUuid}/history/${timePeriod}`),
        }),
    })
})

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
} = cryptoApi;