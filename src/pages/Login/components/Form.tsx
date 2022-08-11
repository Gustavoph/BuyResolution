import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Flex, Button, VStack } from '@chakra-ui/react'
import { EmailIcon, LockIcon, ViewIcon } from '@chakra-ui/icons'

import { InputBase } from '../../../components/InputBase'
import { Divider } from './Divider'

type LoginProps = {
  email: string
  password: string
}

const schema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
})

export function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>({
    resolver: yupResolver(schema),
  })

  function handleLogin(data: LoginProps) {
    console.log(data)
  }

  return (
    <Flex
      as="form"
      height="auto"
      flexDir="column"
      autoComplete="off"
      bgColor="gray.700"
      borderRadius="5px"
      p={['3rem', '4rem']}
      width={{ base: 'auto', lg: '480px' }}
      onSubmit={handleSubmit(handleLogin)}
    >
      <VStack width="100%" spacing="4">
        <InputBase
          type="email"
          bgColor="gray.800"
          placeholder="E-mail"
          {...register('email')}
          error={errors.email?.message}
          leftIcon={<EmailIcon color="gray.700" />}
        />

        <InputBase
          type="password"
          bgColor="gray.800"
          placeholder="Senha"
          {...register('password')}
          error={errors.password?.message}
          leftIcon={<LockIcon color="gray.700" />}
          rightIcon={<ViewIcon color="gray.700" />}
        />

        <Flex flexDir="column" width="100%" pt="1.5rem">
          <VStack width="100%" spacing="4">
            <Button
              size="lg"
              width="100%"
              color="white"
              type="submit"
              colorScheme="black"
              bgColor="green.500"
            >
              Entrar
            </Button>

            <Divider />

            <Button size="lg" width="100%">
              Criar Conta
            </Button>
          </VStack>
        </Flex>
      </VStack>
    </Flex>
  )
}
