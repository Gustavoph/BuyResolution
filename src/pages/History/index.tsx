import {
  Tr,
  Th,
  Td,
  Flex,
  Thead,
  Tbody,
  Table,
  Spinner,
  TableContainer,
} from '@chakra-ui/react'
import dayjs from 'dayjs'
import { useQuery } from '@tanstack/react-query'

import { Title } from '../../components/Title'
import { getHistory } from '../../services/query'

interface IHistory {
  id: string
  value: number
  quant: number
  name: string
  description: string
  url: string
  date: string
}

export function History() {
  const { data, isLoading } = useQuery<IHistory[]>(['history'], getHistory, {
    staleTime: 60 * 1000 * 10,
  })

  if (isLoading) {
    return (
      <Flex width="100%" height="500px" justify="center" align="center">
        <Spinner size="xl" color="green.500" />
      </Flex>
    )
  }

  return (
    <Flex flex="1" flexDir="column" p="8" bgColor="gray.700" borderRadius="5px">
      <Title name="Histórico" />

      <TableContainer>
        <Table variant="simple" size="md">
          <Thead>
            <Tr>
              <Th color="white">Produto</Th>
              <Th color="white">Quantidade</Th>
              <Th color="white">Data</Th>
              <Th color="white">Preço</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((item) => (
              <Tr key={item.id}>
                <Td color="white">{item.name}</Td>
                <Td color="white">{item.quant}</Td>
                <Td color="white">
                  {dayjs(item.date).locale('pt-br').format('DD MMM YYYY')}
                </Td>
                <Td color="white">
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(item.value)}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  )
}
