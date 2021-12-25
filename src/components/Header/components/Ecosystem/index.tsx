import React from 'react'

import { EcosystemButton, EcosystemWrapper } from './styles'
import { ReactComponent as EcosystemIcon } from '../../assets/ecosystem.svg'

const Ecosystem: React.FC = (): JSX.Element => {
  return (
    <EcosystemWrapper>
      <EcosystemButton>
        <EcosystemIcon />
      </EcosystemButton>
    </EcosystemWrapper>
  )
}

export default Ecosystem
