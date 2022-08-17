import { createContext, ReactNode, useContext, useState } from 'react'

export type Product = {
  id: string
  url: string
  name: string
  value: number
  stock: number
  description: string
}

export type CartProduct = {
  id: string
  url: string
  name: string
  value: number
  amount: number
  description: string
}

interface CartContextType {
  cart: CartProduct[]
  addProduct: (product: Product) => void
  removeProduct: (productId: string) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState([] as CartProduct[])

  function addProduct(product: Product) {
    try {
      const updatedCart = [...cart]
      const productExists = cart.find((p) => p.id === product.id)

      if (productExists) {
        productExists.amount += 1
      } else {
        const newProduct = {
          ...product,
          amount: 1,
        }

        updatedCart.push(newProduct)
      }

      setCart(updatedCart)
    } catch {
      console.error('Erro')
    }
  }

  function removeProduct(productId: string) {
    try {
      const updatedCart = [...cart]
      const productExists = cart.find((p) => p.id === productId)

      if (productExists) {
        if (productExists.amount > 1) {
          productExists.amount -= 1
        } else {
          const index = cart.findIndex((p) => p.id === productId)
          updatedCart.splice(index, 1)
        }
        setCart(updatedCart)
      } else {
        throw Error()
      }
    } catch {
      throw Error()
    }
  }

  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
