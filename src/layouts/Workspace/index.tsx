import { Channels, Chats, Header, MenuScroll, ProfileImg, RightMenu, WorkspaceName, Workspaces, WorkspaceWrapper } from './style'
import fetcher from '@/utils/fetcher'
import axios from 'axios'
import React, { FC, useCallback, useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import useSWR from 'swr'
import gravatar from 'gravatar'
import loadable from '@loadable/component'
import Menu from '@/components/Menu'


const Channel = loadable(()=>import("@pages/Channel"))
const DirectMessage = loadable(()=>import("@pages/DirectMessage"))


const Workspace:FC = ({children}) => {
  const {data,error,revalidate,mutate} = useSWR("/api/users",fetcher,{dedupingInterval:10000}) 
  const onLogout = useCallback(()=>{
    axios.post('/api/users/logout',null,{withCredentials:true}).then(()=>
    mutate(false))
  },[])
  const [showUserMenu, setShowUserMenu] = useState(false)
  
  const onClickUserProfile = useCallback(()=>{
    setShowUserMenu((prev)=>!prev)
  },[])

  if(!data){
    return <Redirect to="/login"/>
  }

  return (
    <div>
      <Header>
        <RightMenu>
          <span onClick={onClickUserProfile}>
            <ProfileImg src={gravatar.url(data.email,{s:"50px",d:'retro'})} alt=''/>  
          </span>
        </RightMenu>
        {showUserMenu && <Menu>메뉴</Menu>}
      </Header>  
      <button onClick={onLogout}>로그아웃</button>
      <WorkspaceWrapper>
        <Workspaces>워크스페이스목록</Workspaces>
        <Channels>
          <WorkspaceName>5chat</WorkspaceName>
          <MenuScroll>menu</MenuScroll>
        </Channels>
        <Chats>
          <Switch>
            <Route path="/workspace/dm" component={DirectMessage}/>
            <Route path="/workspace/channel" component={Channel}/>
          </Switch>
        </Chats>
      </WorkspaceWrapper>
      
    </div>
  )
}

export default Workspace
