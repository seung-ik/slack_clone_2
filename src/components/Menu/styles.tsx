import styled from '@emotion/styled'

export const CreateMenu =styled.div`
  position : fixed;
  top: 20px;
  right: 90px;
  left:0;
  bottom:0;
  z-index:1000;
  & > div {
    position: absolute;
    top: 0;
    right: 0;
    display : inline-block;
    background-color: #deae9d;
    z-index:512;
    border-radius: 6px;
    min-width: 360px;
    user-select:none;
    color:black;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  right: 0px;
  top : 0;
  border-radius: 6px;
  font-size:30px;
`