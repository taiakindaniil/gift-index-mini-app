import { routes } from '@/navigation/routes'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'


export function App() {
  return (
    <>
      <HashRouter>
        Hello world
        <Routes>
          {routes.map((route) => <Route key={route.path} {...route} />)}
          <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
      </HashRouter>
    </>
  )
}
