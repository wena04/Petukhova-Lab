import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { Participate } from './pages/Participate'
import { People } from './pages/People'
import { Publications } from './pages/Publications'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="publications" element={<Publications />} />
        <Route path="people" element={<People />} />
        <Route path="contact" element={<Contact />} />
        <Route path="participate" element={<Participate />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
