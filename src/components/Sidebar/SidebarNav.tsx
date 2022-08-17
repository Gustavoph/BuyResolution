import { Stack } from '@chakra-ui/react'
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeFill,
  RiInputMethodLine,
} from 'react-icons/ri'

import { NavLink } from './NavLink'
import { NavSection } from './NavSection'

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink to="/mercado/bebidas" icon={RiDashboardLine}>
          Bebidas
        </NavLink>
        <NavLink to="/users" icon={RiContactsLine}>
          Usuários
        </NavLink>
      </NavSection>
      <NavSection title="AUTOMAÇÃO">
        <NavLink to="/forms" icon={RiInputMethodLine}>
          Formulários
        </NavLink>
        <NavLink to="/automation" icon={RiGitMergeFill}>
          Automação
        </NavLink>
      </NavSection>
    </Stack>
  )
}
