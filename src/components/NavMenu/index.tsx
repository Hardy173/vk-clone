import React from 'react'

import { ReactComponent as ProfileIcon } from './assets/profile.svg'
import { ReactComponent as NewsIcon } from './assets/news.svg'
import { ReactComponent as MessagesIcon } from './assets/messages.svg'
import { ReactComponent as FriendsIcon } from './assets/friends.svg'
import { ReactComponent as CommunityIcon } from './assets/community.svg'
import { ReactComponent as ImagesIcon } from './assets/images.svg'
import { NavMenuWrapper } from './styles'
import ItemMenu from './components/ItemMenu'

const MENU_ITEMS = [
  {
    title: `Профиль`,
    Icon: ProfileIcon,
  },
  {
    title: `Новости`,
    Icon: NewsIcon,
  },
  {
    title: `Мессенджер`,
    Icon: MessagesIcon,
    unread: 8,
  },
  {
    title: `Друзья`,
    Icon: FriendsIcon,
    unread: 5,
  },
  {
    title: `Сообщества`,
    Icon: CommunityIcon,
  },
  {
    title: `Фотографии`,
    Icon: ImagesIcon,
  },
  {
    title: `Профиль`,
    Icon: ProfileIcon,
  },
]

const NavMenu: React.FC = (): JSX.Element => {
  return (
    <NavMenuWrapper>
      {MENU_ITEMS.map((item) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <ItemMenu key={item.title} {...item} />
      ))}
    </NavMenuWrapper>
  )
}

export default NavMenu
