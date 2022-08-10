import { Link, Text, LinkProps } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

interface NavLinkProps extends LinkProps {
  to: string
  name: string
}

export function NavLink({ to, name }: NavLinkProps) {
  return (
    <Link
      to={to}
      px="5px"
      height="72px"
      fontSize="md"
      display="flex"
      as={RouterLink}
      color="gray.200"
      alignItems="center"
      textDecoration="none"
      borderBottomWidth="2px"
      borderColor="transparent"
      transition="border 200ms"
      _hover={{
        textDecoration: 'none',
        borderColor: 'green.500',
      }}
    >
      <Text>{name}</Text>
    </Link>
  )
}
