import styled from 'styled-components'

export const AudioPlayerWrapper = styled.div`
  opacity: 1;
  display: flex;
  align-items: center;
  padding: 0 20px 0 8px;
  cursor: pointer;
  gap: 6px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: relative;
  max-width: 342px;
  width: auto;
  height: 100%;

  &:hover {
    background-color: rgba(174, 183, 194, 0.12);
  }
`

export const ButtonPlayer = styled.button`
  border: none;
  background: none;
  cursor: pointer;

  svg {
    color: #99a2ad;
  }

  :hover {
    svg {
      color: #626d7a;
    }
  }
`

export const BlockNameAudio = styled.div`
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 19px;
  flex-grow: 1;
  height: 24px;
`

export const NameAudio = styled.div`
  max-width: 100%;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  opacity: 1;
  top: 0;
  color: #626d7a;
  line-height: 24px;
  font-size: 14px;
  position: initial;
  transition: opacity 190ms ease, top 300ms ease;
`
