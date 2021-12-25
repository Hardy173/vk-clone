import styled from 'styled-components'

import loupeIcon from '../../assets/loupe.svg'

export const InputSearchWrapper = styled.form`
  display: block;
  padding-right: 15px;
`

export const Input = styled.input`
  border: 0;
  background-color: #edeef0;
  border-radius: 8px;
  padding: 0 0 0 34px;
  width: 230px;
  height: 32px;
  box-shadow: none;
  outline: none;
  background-image: url(${loupeIcon});
  background-position: 10px;
  background-repeat: no-repeat;
`
