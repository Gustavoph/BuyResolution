import { FormLogin } from './components/Form'
import { Flex, Text, Image } from '@chakra-ui/react'

import LogoImg from '../../assets/logo.svg'

export function Login() {
  return (
    <Flex
      px="2rem"
      width="100%"
      height="100vh"
      bgColor="gray.800"
      display={{ base: 'flex', lg: 'block' }}
    >
      <Flex
        height="100%"
        margin="0 auto"
        maxWidth="1000px"
        padding={['6rem 1rem', '4rem 0rem']}
        display={{ base: 'block', lg: 'flex' }}
      >
        <Flex
          align="start"
          margin="0 auto"
          flexDir="column"
          justify="center"
          width={{ base: '100%', lg: '50%' }}
          marginBottom={['2rem', '2rem', '2rem', '0rem']}
        >
          <Image src={LogoImg} alt="" mb="3.5rem" />

          <Text
            color="white"
            fontSize="5xl"
            fontWeight="600"
            lineHeight="2.5rem"
          >
            Bem-vindo de volta
          </Text>
          <Text color="white" fontSize="3xl" fontWeight="600">
            Faça login na plataforma
          </Text>
        </Flex>

        <Flex
          align="center"
          justify="center"
          width={{ base: '100%', lg: '50%' }}
        >
          <FormLogin />
        </Flex>
      </Flex>
    </Flex>
  )
}
