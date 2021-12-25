import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  background-color: #ffffff;
  display: flex;
  margin: 0 auto;
  position: fixed;
  height: 48px;
  width: 100%;
  top: 0;
  z-index: 120;
`

export const HeaderContainer = styled.header`
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  align-items: center;
  height: 100%;
`

export const BlockLogo = styled.a`
  width: 165px;
  height: 100%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  color: #000000;
`

export const ContentHeader = styled.ul`
  display: flex;
  height: inherit;
  margin: 0;

  &.first-child {
    padding: 0;
  }
`

export const ItemHeader = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
`

export const EcosystemAndProfileBlock = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`
