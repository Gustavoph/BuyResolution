import { RiShoppingCartLine } from 'react-icons/ri'
import { Button, Flex, Icon, Text } from '@chakra-ui/react'

import { Product, useCart } from '../../context'

interface ProductAmountProps {
  product: Product
}

interface CartItemsAmount {
  [key: string]: number
}

export function ProductAmount({ product }: ProductAmountProps) {
  const { cart, addProduct } = useCart()

  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    const newSumAmount = { ...sumAmount }
    newSumAmount[product.id] = product.amount

    return newSumAmount
  }, {} as CartItemsAmount)

  const productInCart = cartItemsAmount[product.id] > 0

  return (
    <Flex justify="space-between" align="center">
      <Text fontWeight="bold" color="white">
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(product.value)}
      </Text>

      <Button
        bgColor="gray.700"
        borderRadius="full"
        colorScheme="gray.700"
        p={productInCart ? '3' : '0'}
        onClick={() => addProduct(product)}
      >
        <Icon
          fontSize="20"
          color="white"
          as={RiShoppingCartLine}
          mr={productInCart ? '2' : '0'}
        />
        {productInCart && (
          <Text color="white" fontSize="xs">
            {cartItemsAmount[product.id]}
          </Text>
        )}
      </Button>
    </Flex>
  )
}
