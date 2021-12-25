import React from 'react'

import {
  BlockLogo,
  ContentHeader,
  EcosystemAndProfileBlock,
  HeaderContainer,
  HeaderWrapper,
  ItemHeader,
} from './styles'
import { ReactComponent as LogoVK } from './assets/logoVK.svg'
import InputSearch from './components/InputSearch'
import Notifications from './components/Notifications'
import AudioPlayer from './components/AudioPlayer'
import Ecosystem from './components/Ecosystem'
import Profile from './components/Profile'

const Header: React.FC = (): JSX.Element => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <ContentHeader>
          <ItemHeader>
            <BlockLogo href="/">
              <LogoVK />
            </BlockLogo>
          </ItemHeader>

          <ItemHeader>
            <InputSearch />
          </ItemHeader>

          <ItemHeader>
            <Notifications />
          </ItemHeader>

          <ItemHeader>
            <AudioPlayer />
          </ItemHeader>

          <ItemHeader>
            <EcosystemAndProfileBlock>
              <Ecosystem />
              <Profile />
            </EcosystemAndProfileBlock>
          </ItemHeader>
        </ContentHeader>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header
