import React, { CSSProperties, FC, useCallback } from 'react'
import { CloseButton, CreateMenu } from './styles'

interface Props{
  onCloseModal : (e:any)=>void;
  show: boolean;
  closeButton?: boolean;
  style? : CSSProperties;
}

const Menu:FC<Props> = ({children, onCloseModal, show,closeButton,style}) => {
  const stopPropagation = useCallback((e)=>{
    e.stopPropagation()
  },[])

  if(!show){
    return null
  }
  
  return (
    <CreateMenu style={style} onClick={onCloseModal}>
      <div onClick={stopPropagation}>
        {closeButton && <CloseButton onClick={onCloseModal}>&times;</CloseButton>}
        {children}
      </div>
    </CreateMenu>
  )
}

Menu.defaultProps={
  closeButton: true
}
export default Menu
