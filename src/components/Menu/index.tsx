import React, { FC } from 'react'
import { CloseButton, CreateMenu } from './styles'

const Menu:FC = ({children}) => {
  return (
    <CreateMenu>
      <div>
        <CloseButton>&times;</CloseButton>
        {children}
      </div>
      
    </CreateMenu>
  )
}

export default Menu
