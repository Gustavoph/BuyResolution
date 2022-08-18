import { QueryClient } from '@tanstack/react-query'
import { api } from './axios'

export const queryClient = new QueryClient()

export async function getProducts() {
  return api
    .get('/products')
    .then((res) => res.data)
    .catch((error) => error)
}

export async function getFavorites() {
  return api
    .get('/favorites')
    .then((res) => res.data)
    .catch((error) => error)
}

export async function getHistory() {
  return api
    .get('/history')
    .then((res) => res.data)
    .catch((error) => error)
}
