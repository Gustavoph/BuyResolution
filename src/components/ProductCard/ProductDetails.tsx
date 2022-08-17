import { Text } from '@chakra-ui/react'

interface ProductDetailsProps {
  name: string
  description: string
}

export function ProductDetails({ name, description }: ProductDetailsProps) {
  return (
    <>
      <Text fontWeight="400" fontSize="sm" color="white">
        {name}
      </Text>
      <Text fontWeight="400" fontSize="sm" color="white">
        {description}
      </Text>
    </>
  )
}
