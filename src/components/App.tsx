import { routes } from '@/navigation/routes'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './Layout'
import { ThemeProvider } from "@/components/theme-provider"

export function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <HashRouter>
          <Layout>
            <Routes>
              {routes.map((route) => <Route key={route.path} {...route} />)}
              <Route path="*" element={<Navigate to="/" />}/>
            </Routes>
          </Layout>
        </HashRouter>
      </ThemeProvider>
    </>
  )
}
