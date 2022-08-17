import { Flex, Image } from '@chakra-ui/react'

import { Product } from '../../context'
import { ProductAmount } from './ProductAmount'
import { ProductDetails } from './ProductDetails'

interface CardProductProps {
  product: Product
}

export function ProductCard({ product }: CardProductProps) {
  return (
    <Flex width="100%" height="100%" key={product.id} flexDir="column">
      <Image
        width="100%"
        height="244px"
        src={product.url}
        alt={product.name}
        borderRadius="5px"
      />

      <Flex flexDir="column" pt="4">
        <ProductAmount product={product} />
        <ProductDetails name={product.name} description={product.description} />
      </Flex>
    </Flex>
  )
}
