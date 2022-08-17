import { QueryClient } from '@tanstack/react-query'
import { api } from './axios'

export const queryClient = new QueryClient()

export async function getProducts() {
  return api
    .get('/products')
    .then((res) => res.data)
    .catch((error) => error)
}
