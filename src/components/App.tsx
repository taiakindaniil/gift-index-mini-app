import { routes } from '@/navigation/routes'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './Layout'

export function App() {
  return (
    <>
      <HashRouter>
        <Layout>
          <Routes>
            {routes.map((route) => <Route key={route.path} {...route} />)}
            <Route path="*" element={<Navigate to="/" />}/>
          </Routes>
        </Layout>
      </HashRouter>
    </>
  )
}
