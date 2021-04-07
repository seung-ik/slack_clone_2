import React, { FC, useCallback } from 'react'
import { CloseButton, CreateMenu } from './styles'

interface Props{
  onCloseModal : (e:any)=>void;
  show: boolean;
  closeButton?: boolean;
}

const Menu:FC<Props> = ({children, onCloseModal, show,closeButton}) => {
  const stopPropagation = useCallback((e)=>{e.stopPropagation()},[])
  return (
    <CreateMenu onClick={onCloseModal}>
      <div onClick={stopPropagation}>
        <CloseButton onClick={onCloseModal}>&times;</CloseButton>
        {children}
      </div>
    </CreateMenu>
  )
}

Menu.defaultProps={
  closeButton: true
}
export default Menu
