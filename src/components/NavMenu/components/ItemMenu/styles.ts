import styled from 'styled-components'

export const ItemMenuWrapper = styled.li`
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 0 6px;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: rgba(174, 183, 194, 0.12);
  }
`

export const BlockIcon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;

  svg {
    color: #5181b8;
  }
`

export const BlockTitle = styled.span`
  height: 30px;
  line-height: 30px;
  font-size: 13px;
  overflow: hidden;
  flex-grow: 1;
  text-overflow: ellipsis;
`

export const BlockBadge = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: #ffffff;
  background-color: #99a2ad;
  text-align: center;
`

export const BadgeContent = styled.span`
  padding: 0 6px;
  display: inline-block;
  zoom: 1;
  font-size: 10px;
  text-align: center;
`
