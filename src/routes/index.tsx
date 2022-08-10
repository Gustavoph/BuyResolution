import { Route, Routes } from 'react-router-dom'

import { Login } from '../pages/Login'
import { Market } from '../pages/Market'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/market" element={<Market />} />
    </Routes>
  )
}
