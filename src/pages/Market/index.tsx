import { useQuery } from '@tanstack/react-query'
import { Flex, Spinner, SimpleGrid } from '@chakra-ui/react'

import { Product } from '../../context/CartContext'
import { getProducts } from '../../services/query'
import { ProductCard } from '../../components/ProductCard'

export function Market() {
  const { data, isLoading } = useQuery<Product[]>(['products'], getProducts, {
    staleTime: 60 * 1000 * 10,
  })

  if (isLoading) {
    return (
      <Flex width="100%" height="500px" justify="center" align="center">
        <Spinner size="xl" color="green.500" />
      </Flex>
    )
  }

  return (
    <Flex flex="1" flexDir="column">
      <SimpleGrid
        spacing={4}
        width="100%"
        borderRadius="5px"
        columns={[2, 2, 3, 3, 3, 4]}
      >
        {data?.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </SimpleGrid>
    </Flex>
  )
}
