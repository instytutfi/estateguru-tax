import axios, { type AxiosInstance, type AxiosResponse } from 'axios'

interface ExchangeRate {
  no: string
  effectiveDate: string // ISO YYYY-MM-DD
  mid: number
}

interface ExchangeRatesResponse {
  table: 'A'
  currency: string
  code: string
  rates: ExchangeRate[]
}

class NbpApi {
  instance: AxiosInstance

  constructor () {
    this.instance = axios.create({
      baseURL: 'https://api.nbp.pl/api/',
      headers: {
        Accept: 'application/json'
      }
    })
  }

  getCurrencyRateForDates = async (currency: string, startDate: string, endDate: string): Promise<AxiosResponse<ExchangeRatesResponse>> => {
    return await this.instance.get(`exchangerates/rates/A/${currency}/${startDate}/${endDate}`)
  }
}

export default NbpApi

export {
  type ExchangeRate,
  type ExchangeRatesResponse
}
