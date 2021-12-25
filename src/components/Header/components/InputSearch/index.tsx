import React from 'react'

import { Input, InputSearchWrapper } from './styles'

const InputSearch: React.FC = (): JSX.Element => {
  return (
    <InputSearchWrapper autoComplete="off">
      <Input placeholder="Поиск" />
    </InputSearchWrapper>
  )
}

export default InputSearch
