import React from 'react'

import { ButtonBell } from './styles'
import { ReactComponent as Bell } from '../../assets/bell.svg'

const Notifications: React.FC = (): JSX.Element => {
  return (
    <>
      <ButtonBell>
        <Bell />
      </ButtonBell>
    </>
  )
}

export default Notifications
