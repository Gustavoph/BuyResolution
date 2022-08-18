import { Stack } from '@chakra-ui/react'

import {
  BiCog,
  BiExit,
  BiBeer,
  BiHistory,
  BiBookmarkHeart,
} from 'react-icons/bi'

import { NavLink } from './NavLink'
import { NavSection } from './NavSection'

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink to="/bebidas" icon={BiBeer}>
          Bebidas
        </NavLink>
        <NavLink to="/favoritos" icon={BiBookmarkHeart}>
          Favoritos
        </NavLink>
      </NavSection>
      <NavSection title="PERFIL">
        <NavLink to="/historico" icon={BiHistory}>
          Histórico
        </NavLink>
        <NavLink to="/forms" icon={BiCog}>
          Configurações
        </NavLink>
        <NavLink to="/forms" icon={BiExit}>
          Sair
        </NavLink>
      </NavSection>
    </Stack>
  )
}
