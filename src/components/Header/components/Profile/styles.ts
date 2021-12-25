import styled from 'styled-components'

export const ProfileWrapper = styled.div`
  padding-left: 10px;
  height: inherit;
`

export const ProfileButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  height: inherit;

  &:hover {
    background-color: rgba(174, 183, 194, 0.12);
  }
`

export const Avatar = styled.img`
  margin: 0;
  border-radius: 50%;
  height: 32px;
  width: 32px;
`

export const BlockChevrone = styled.div`
  margin: 0 8px 0 6px;

  svg {
    color: #aeb7c2;
  }
`
