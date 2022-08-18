import { Heading } from '@chakra-ui/react'

interface TitleProps {
  name: string
}

export function Title({ name }: TitleProps) {
  return (
    <Heading size="lg" color="white" fontWeight="normal" mb="8">
      {name}
    </Heading>
  )
}
