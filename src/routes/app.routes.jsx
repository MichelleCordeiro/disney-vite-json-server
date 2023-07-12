import { Routes, Route} from 'react-router-dom'

import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'
import { New } from '../pages/New'
import { Details } from '../pages/Details'
import { Edit } from '../pages/Edit'
import { DashboardPage } from '../pages/DashboardPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/new' element={<New />} />
      <Route path='/details/:id' element={<Details />} />
      <Route path='/edit/:id' element={<Edit />} />
      <Route path='/dashboard' element={<DashboardPage />} />
    </Routes>
  )
}