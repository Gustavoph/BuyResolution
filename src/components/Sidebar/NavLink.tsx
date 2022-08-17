import { ElementType } from 'react'
import { Icon, Link as ChakraLink, LinkProps, Text } from '@chakra-ui/react'

import { ActiveLink } from './ActiveLink'

interface NavLinkProps extends LinkProps {
  to: string
  children: string
  icon?: ElementType
}

export function NavLink({ icon, children, to, ...rest }: NavLinkProps) {
  return (
    <ActiveLink to={to}>
      <ChakraLink as="span" display="flex" py="1" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  )
}
