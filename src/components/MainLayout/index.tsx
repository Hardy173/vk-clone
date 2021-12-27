import React from 'react'
import { ContainerContent, MainLayoutWrapper } from './styles'
import Header from '../Header'
import NavMenu from '../NavMenu'

type Props = {
  children: React.ReactNode
}

const MainLayout: React.FC<Props> = ({ children }): JSX.Element => {
  return (
    <MainLayoutWrapper>
      <Header />
      <ContainerContent>
        <NavMenu />
        <div>{children}</div>
      </ContainerContent>
    </MainLayoutWrapper>
  )
}

export default MainLayout
