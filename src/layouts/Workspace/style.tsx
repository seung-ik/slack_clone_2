import styled from '@emotion/styled'

export const Header =styled.header`
  border : 1px solid black;
  background-color : rgb(218, 114, 76);
  height: 60px;
  text-align: center;
  padding : 10px;
  color: white;
  font-size : 30px;
`

export const RightMenu = styled.div`
 float: right;
`

export const ProfileImg = styled.img`
 position : absolute;
 height : 50px;
 width: 50px;
 right: 50px;
 top: 5px;
`


export const WorkspaceWrapper = styled.div`
  border:1px solid black;
  display :flex;
  align-items: stretch;
  height: 90vh;
`
export const Workspaces = styled.div`
  border:1px solid black;
  flex-direction : column;
  flex:0.5;
  background-color : rgb(218, 114, 76);
`
export const Channels = styled.div`
  border:1px solid black;
  flex:1.8;
  display : inline-flex;
  flex-direction : column;
  background-color : rgb(218, 114, 76);
`
export const WorkspaceName = styled.div`
  border:1px solid black;
  height: 70px;
  font-size : 40px;
  text-align: center;
  line-height: 70px;
  color: white;
  font-weight: 700;
  

`
export const MenuScroll = styled.div`
  border:1px solid black;
  flex:1;
`
export const Chats = styled.div`
  border:1px solid black;
  flex:7;
`