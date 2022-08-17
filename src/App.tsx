import { Router } from './routes'
import { CartContextProvider } from './context/CartContext'
import { SidebarDrawerProvider } from './context/SidebarContext'

export function App() {
  return (
    <CartContextProvider>
      <SidebarDrawerProvider>
        <Router />
      </SidebarDrawerProvider>
    </CartContextProvider>
  )
}
