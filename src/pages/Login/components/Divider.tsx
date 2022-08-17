import { Flex } from '@chakra-ui/react'

export function Divider() {
  return (
    <Flex
      flexDir="row"
      p="1rem"
      css={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        marginTop: '2rem',
        marginBottom: '2rem',
        color: '#28272f',
        '&:before': {
          content: '""',
          width: '100%',
          borderTop: '1px solid #28272f',
          marginRight: '0.5rem',
        },
        '&:after': {
          content: '""',
          width: '100%',
          borderTop: '1px solid #28272f',
          marginLeft: '0.5rem',
        },
      }}
    ></Flex>
  )
}
