import React from 'react'

import { ReactComponent as ChevorneDown } from 'assets/chevrone-down.svg'
import { Avatar, BlockChevrone, ProfileButton, ProfileWrapper } from './styles'
import avatar from '../../assets/photo-profile.jpg'

const Profile: React.FC = (): JSX.Element => {
  return (
    <ProfileWrapper>
      <ProfileButton>
        <Avatar src={avatar} alt="Rustam Yunusov" />
        <BlockChevrone>
          <ChevorneDown />
        </BlockChevrone>
      </ProfileButton>
    </ProfileWrapper>
  )
}

export default Profile
