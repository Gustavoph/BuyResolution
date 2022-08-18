import { Route, Routes } from 'react-router-dom'

import { Login } from '../pages/Login'
import { Market } from '../pages/Market'
import { History } from '../pages/History'
import { Favorite } from '../pages/Favorite'

import { DefaultLayout } from '../Layout/default'
import { Cart } from '../pages/Cart'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/bebidas" element={<Market />} />
        <Route path="/historico" element={<History />} />
        <Route path="/favoritos" element={<Favorite />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
      <Route path="/" element={<Login />} />
    </Routes>
  )
}
