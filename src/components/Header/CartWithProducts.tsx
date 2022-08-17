import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import { RiShoppingBasket2Line } from 'react-icons/ri'
import { useCart } from '../../context/CartContext'

export function CartWithProducts() {
  const { cart } = useCart()

  const totalCart = cart.reduce((acc, product) => {
    acc += product.value * product.amount

    return acc
  }, 0)

  return (
    <Flex
      justify="center"
      bgColor="gray.700"
      align="center"
      p="3"
      borderRadius="999"
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
