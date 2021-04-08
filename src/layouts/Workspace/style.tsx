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
  display:flex;
  flex-direction : column;
  flex:0.5;
  background-color : rgb(218, 114, 76);
  align-items : center;
  padding : 15px 0 0 ;
`
export const Channels = styled.div`
  border:1px solid black;
  flex:1.8;
  display : flex;
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
export const WorkspaceModal = styled.div`
  padding: 10px 0 0;
  & h2 {
    padding-left: 20px;
  }
  & > button {
    width: 100%;
    height: 28px;
    padding: 4px;
    border: none;
    background: transparent;
    border-top: 1px solid rgb(28, 29, 28);
    cursor: pointer;
    &:last-of-type {
      border-bottom: 1px solid rgb(28, 29, 28);
    }
  }
`;
export const Chats = styled.div`
  border:1px solid black;
  flex:7;
`
export const MenuButton = styled.button`
  width: 360px;
  height : auto;
  border : none;
  background-color : transparent;
  border-top : 1px solid black;
  padding-top : 5px;
  font-size : 1.5rem;
`
export const ProfileModal = styled.div`
  display: flex;
  padding: 20px 10px 20px 10px;
  font-size : 1.3rem;
  & > div {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
  }
  & > img{
    width : 36px;
    height : 36px;
  }
`

export const AddButton = styled.button`
display: inline-block;
width: 50px;
height: 50px;
border-radius: 10px;
background: transparent;
border: none;
margin-bottom: 15px;
font-size: 40px;
font-weight: 700;
color: white;
cursor: pointer;
`
export const WorkspaceButton = styled.button`
display: inline-block;
width: 50px;
height: 50px;
border-radius: 10px;
background: white;
border: 3px solid #3f0e40;
margin-bottom: 15px;
font-size: 18px;
font-weight: 700;
color: black;
cursor: pointer;
`
