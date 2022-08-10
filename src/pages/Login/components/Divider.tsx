import { Flex } from '@chakra-ui/react'

export function Divider() {
  return (
    <Flex
      flexDir="row"
      css={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        marginTop: '2rem',
        marginBottom: '2rem',
        color: '#fff',
        '&:before': {
          content: '""',
          width: '100%',
          borderTop: '1px solid #fff',
          marginRight: '0.5rem',
        },
        '&:after': {
          content: '""',
          width: '100%',
          borderTop: '1px solid #fff',
          marginLeft: '0.5rem',
        },
      }}
    >
      OU
    </Flex>
  )
}
