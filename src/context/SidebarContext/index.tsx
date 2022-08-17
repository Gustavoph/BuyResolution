import { useLocation } from 'react-router-dom'
import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'
import { createContext, ReactNode, useContext, useEffect } from 'react'

interface SidebarDrawerProviderProps {
  children: ReactNode
}

const SidebarDrawerContext = createContext({} as UseDisclosureReturn)

export function SidebarDrawerProvider({
  children,
}: SidebarDrawerProviderProps) {
  const { pathname } = useLocation()
  const disclousere = useDisclosure()
  const { onClose } = disclousere

  useEffect(() => {
    onClose()
  }, [pathname, onClose])

  return (
    <SidebarDrawerContext.Provider value={disclousere}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)
