import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { GlobalStyle } from './globalStyles'
import MainLayout from './components/MainLayout'
import Main from './pages/Main'

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Main />
            </MainLayout>
          }
        />
      </Routes>
    </>
  )
}

export default App
