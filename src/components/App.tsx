import { routes } from '@/navigation/routes'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'


function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          {routes.map((route) => <Route key={route.path} {...route} />)}
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
