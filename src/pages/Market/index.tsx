import { BiHistory } from 'react-icons/bi'
import { IoNotifications } from 'react-icons/io5'
import { IoMdCloseCircleOutline, IoMdPerson } from 'react-icons/io'
import {
  Flex,
  Menu,
  Text,
  Image,
  Avatar,
  HStack,
  Button,
  VStack,
  MenuItem,
  MenuList,
  SimpleGrid,
  IconButton,
  MenuButton,
} from '@chakra-ui/react'

import LogoImg from '../../assets/logo.svg'
import ProductImg from '../../assets/monster.png'
import { NavLink } from '../../components/NavLink'
import { InputBase } from '../../components/InputBase'

export function Market() {
  return (
    <Flex
      backgroundColor="gray.900"
      width="100%"
      minHeight="100vh"
      flexDir="column"
    >
      <Flex
        px={['0rem', '2rem']}
        width="100%"
        height="72px"
        alignItems="center"
        backgroundColor="gray.800"
      >
        <Flex
          width="100%"
          height="100%"
          margin="0 auto"
          maxWidth="1120px"
          alignItems="center"
          justify="space-between"
        >
          <Flex width="20%">
            <Image src={LogoImg} alt="" width="180px" />
          </Flex>

          <Flex as="nav" width="80%" justify="center">
            <HStack spacing={5}>
              <NavLink to="/market" name="Todos" />
              <NavLink to="/market" name="Bebidas" />
              <NavLink to="/market" name="Comidas" />
            </HStack>
          </Flex>

          <Flex alignItems="center" width="20%" justify="end">
            <HStack spacing={4}>
              <IconButton
                p=".5rem"
                colorScheme="black"
                aria-label="Send email"
                _hover={{ background: 'gray.900' }}
                icon={<IoNotifications color="#C4C4CC" size={20} />}
              />

              <Menu direction="rtl" colorScheme="gray">
                <MenuButton
                  as={Avatar}
                  icon={
                    <Avatar
                      name="Gustavo Oliveira"
                      src="https://avatars.githubusercontent.com/u/65258678?v=4"
                    />
                  }
                />
                <MenuList bgColor="gray.800" border="none" marginTop="1rem">
                  <MenuItem
                    py="1rem"
                    icon={<IoMdPerson size={20} color="#00875F" />}
                    color="white"
                    _hover={{
                      background: 'gray.800',
                      filter: 'brightness(0.8)',
                    }}
                    _focus={{
                      background: 'gray.800',
                      filter: 'brightness(0.8)',
                    }}
                  >
                    Meu Perfil
                  </MenuItem>

                  <MenuItem
                    py="1rem"
                    icon={<BiHistory size={20} color="#00875F" />}
                    color="white"
                    _hover={{
                      background: 'gray.800',
                      filter: 'brightness(0.8)',
                    }}
                    _focus={{
                      background: 'gray.800',
                      filter: 'brightness(0.8)',
                    }}
                  >
                    Histórico
                  </MenuItem>

                  <MenuItem
                    py="1rem"
                    icon={<IoMdCloseCircleOutline size={20} color="#00875F" />}
                    color="white"
                    _hover={{
                      background: 'gray.800',
                      filter: 'brightness(0.8)',
                    }}
                    _focus={{
                      background: 'gray.800',
                      filter: 'brightness(0.8)',
                    }}
                  >
                    Sair da Plataforma
                  </MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </Flex>
        </Flex>
      </Flex>
      <Flex width="100%" height="100%" backgroundColor="gray.900">
        <Flex
          py="4rem"
          width="100%"
          height="100%"
          margin="0 auto"
          flexDir="column"
          maxWidth="1120px"
          px={['0rem', '2rem']}
        >
          <Flex width="100%" justify="center">
            <Text color="white" fontSize="2xl">
              Buscando por{' '}
              <Text as="span" color="green.500" fontSize="2xl">
                Bebidas
              </Text>
            </Text>

            <InputBase bgColor="gray.800" />
          </Flex>

          <SimpleGrid columns={[1, 1, 1, 2]} spacing={10} pt="2rem">
            <Flex
              p="0.6rem"
              height="150px"
              bgColor="gray.800"
              borderRadius="5px"
            >
              <Flex pr="0.6rem">
                <Image src={ProductImg} alt="" borderRadius="5px" />
              </Flex>

              <Flex flexDir="column" boxSizing="border-box">
                <VStack>
                  <Text color="white">Energético Monster 473ml</Text>
                  <Text color="white">Lata 473ml</Text>
                  <Text color="white">R$ 7,00</Text>

                  <Button>ADICIONAR AO CARRINHO</Button>
                </VStack>
              </Flex>
            </Flex>
            <Flex
              p="0.6rem"
              height="150px"
              bgColor="gray.800"
              borderRadius="5px"
            >
              <Image src={ProductImg} alt="" borderRadius="5px" />
            </Flex>{' '}
            <Flex
              p="0.6rem"
              height="150px"
              bgColor="gray.800"
              borderRadius="5px"
            >
              <Image src={ProductImg} alt="" borderRadius="5px" />
            </Flex>{' '}
            <Flex
              p="0.6rem"
              height="150px"
              bgColor="gray.800"
              borderRadius="5px"
            >
              <Image src={ProductImg} alt="" borderRadius="5px" />
            </Flex>
          </SimpleGrid>
        </Flex>
      </Flex>
    </Flex>
  )
}
