import { Flex, Image } from '@chakra-ui/react'

import LogoImg from '../../assets/logo.svg'
// import LogoMobileImg from '../../assets/logomobile.svg'

export function Logo() {
  return (
    <Flex w="64">
      <Image src={LogoImg} alt="Logo Beresolution" width="70%" />
    </Flex>
  )
}
