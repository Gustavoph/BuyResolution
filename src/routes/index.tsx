import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../Layout/default'

import { Login } from '../pages/Login'
import { Market } from '../pages/Market'

export function Router() {
  return (
    <Routes>
      <Route path="/mercado" element={<DefaultLayout />}>
        <Route path="/mercado/bebidas" element={<Market />} />
      </Route>
      <Route path="/" element={<Login />} />
    </Routes>
  )
}
