import { HStack, Icon } from '@chakra-ui/react'
import { RiNotificationLine, RiShoppingCartLine } from 'react-icons/ri'
import { useCart } from '../../context/CartContext'
import { CartWithProducts } from './CartWithProducts'

export function CartNav() {
  const { cart } = useCart()

  return (
    <HStack
      py="1"
      mx={['6', '8']}
      pr={['6', '8']}
      spacing={['6', '8']}
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <Icon as={RiNotificationLine} fontSize="20" />
      {cart.length >= 1 ? (
        <CartWithProducts />
      ) : (
        <Icon as={RiShoppingCartLine} fontSize="20" />
      )}
    </HStack>
  )
}
