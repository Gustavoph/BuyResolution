import { useEffect, useState } from 'react'
import { AxiosRequestConfig, AxiosResponse } from 'axios'

import { api } from '../services/axios'

export const useAxios = (axiosParams: AxiosRequestConfig) => {
  const [response, setResponse] = useState<AxiosResponse>()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  const fetchData = async (params: AxiosRequestConfig) => {
    try {
      const result = await api.request(params)
      setResponse(result)
    } catch (err) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData(axiosParams)
  }, [axiosParams])

  return { response, error, loading }
}
