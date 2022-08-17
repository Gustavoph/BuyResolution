import { Outlet } from 'react-router-dom'
import { Flex } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'

export function DefaultLayout() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex px="6" my="6" w="100%" mx="auto" maxWidth={1480}>
        <Sidebar />
        <Outlet />
      </Flex>
    </Flex>
  )
}
