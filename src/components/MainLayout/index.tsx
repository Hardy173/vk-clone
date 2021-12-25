import React from 'react'
import { MainLayoutWrapper } from './styles'
import Header from '../Header'

type Props = {
  children: React.ReactNode
}

const MainLayout: React.FC<Props> = ({ children }): JSX.Element => {
  return (
    <MainLayoutWrapper>
      <Header />
      <div>{children}</div>
    </MainLayoutWrapper>
  )
}

export default MainLayout
