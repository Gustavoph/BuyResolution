import {
  Flex,
  Table,
  TableContainer,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Image,
} from '@chakra-ui/react'
import { Title } from '../../components/Title'
import { useCart } from '../../context'

export function Cart() {
  const { cart } = useCart()

  return (
    <Flex flex="1" flexDir="column" p="8" bgColor="gray.700" borderRadius="5px">
      <Title name="Histórico" />

      <TableContainer>
        <Table variant="simple" size="md">
          <Thead>
            <Tr>
              <Th color="white"></Th>
              <Th color="white">Produto</Th>
              <Th color="white">Quantidade</Th>
              <Th color="white">Preço</Th>
            </Tr>
          </Thead>
          <Tbody>
            {cart?.map((product) => (
              <Tr key={product.id}>
                <Td p="2" align="center">
                  <Image width="64px" height="64px" alt="" src={product.url} />
                </Td>
                <Td color="white" p="2">
                  {product.name}
                </Td>
                <Td color="white" p="2">
                  {product.amount}
                </Td>

                <Td color="white" p="2">
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(product.value)}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  )
}
