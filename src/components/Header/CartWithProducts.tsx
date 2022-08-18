import { useNavigate } from 'react-router-dom'
import { RiShoppingBasket2Line } from 'react-icons/ri'
import { Box, Flex, Icon, Text } from '@chakra-ui/react'

import { useCart } from '../../context/CartContext'

export function CartWithProducts() {
  const { cart } = useCart()
  const route = useNavigate()

  const totalCart = cart.reduce((acc, product) => {
    acc += product.value * product.amount

    return acc
  }, 0)

  function handleCheckout() {
    route('/cart')
  }

  return (
    <Flex
      p="3"
      align="center"
      justify="center"
      bgColor="gray.700"
      borderRadius="999"
      onClick={handleCheckout}
    >
      <Icon as={RiShoppingBasket2Line} fontSize="20" mr="2" />
      <Box textAlign="end">
        <Text color="white" fontSize="xs">
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(totalCart)}
        </Text>
      </Box>
    </Flex>
  )
}
