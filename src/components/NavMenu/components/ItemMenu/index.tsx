import React from 'react'

import {
  BadgeContent,
  BlockBadge,
  BlockIcon,
  BlockTitle,
  ItemMenuWrapper,
} from './styles'

type Props = {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>
  title: string
  // eslint-disable-next-line react/require-default-props
  unread?: number
}

const ItemMenu: React.FC<Props> = ({
  Icon,
  title,
  unread,
}: Props): JSX.Element => {
  return (
    <ItemMenuWrapper>
      <BlockIcon>
        <Icon />
      </BlockIcon>

      <BlockTitle>{title}</BlockTitle>

      {unread && (
        <BlockBadge>
          <BadgeContent>{unread}</BadgeContent>
        </BlockBadge>
      )}
    </ItemMenuWrapper>
  )
}

export default ItemMenu
