import { AddButton, Channels, Chats, Header, MenuButton, MenuScroll, ProfileImg, ProfileModal, RightMenu, WorkspaceButton, WorkspaceName, Workspaces, WorkspaceWrapper } from './style'
import Modal from '@components/Modal'
import fetcher from '@/utils/fetcher'
import axios from 'axios'
import React, { FC, useCallback, useState } from 'react'
import { Link, Redirect, Route, Switch } from 'react-router-dom'
import useSWR from 'swr'
import gravatar from 'gravatar'
import loadable from '@loadable/component'
import Menu from '@/components/Menu'
import { IUser } from '@/typings/db'
import { Button, Input, Label } from '@/pages/Signup/style'
import useInput from '@/hooks/useInput'


const Channel = loadable(()=>import("@pages/Channel"))
const DirectMessage = loadable(()=>import("@pages/DirectMessage"))


const Workspace:FC = ({children}) => {
  const {data:userData,error,revalidate,mutate} = useSWR<IUser | false>("/api/users",fetcher,{dedupingInterval:10000}) 
  const onLogout = useCallback(()=>{
    axios.post('/api/users/logout',null,{withCredentials:true}).then(()=>
    mutate(false))
  },[])
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [showcreateWorkspaceModal, setShowCreateWorkspaceModal] = useState(false)
  const [createWorkspaceName ,onChangeCreateWorkspaceName ,setCreateWorkspceName] = useInput("")
  const [createWorkspaceUrl ,onChangeCreateWorkspaceUrl ,setCreateWorkspceUrl] = useInput("")

  const onCloseModal = useCallback(()=>{
    setShowCreateWorkspaceModal(false)
  },[])

  const onCreateWorkspace = useCallback((e)=>{
    e.preventDefault();
  },[])
  
  const onClickUserProfile = useCallback((e)=>{
    e.stopPropagation()
    setShowUserMenu((prev)=>!prev)
  },[])

  const onClickCreateWorkspace = useCallback(()=>{
    setShowCreateWorkspaceModal(true)
  },[])

  if(!userData){
    return <Redirect to="/login"/>
  }

  return (
    <div>
      <Header>
        <RightMenu>
          <span onClick={onClickUserProfile}>
            <ProfileImg src={gravatar.url(userData.email,{s:"50px",d:'retro'})} alt=''/>  
          </span>
        </RightMenu>
        {showUserMenu && 
        <Menu onCloseModal={onClickUserProfile} show={showUserMenu}>
          <ProfileModal>
            <img src={gravatar.url(userData.email,{s:"36px",d:'retro'})} alt=""/>
            <div>
              <span>{userData.nickname}</span>
              <span>Active</span>
            </div>
          </ProfileModal>
          <MenuButton onClick={onLogout}>로그아웃</MenuButton>
        </Menu>}
      </Header>  
      <WorkspaceWrapper>
        <Workspaces>{
          userData?.Workspaces.map((ws)=>{
            return (
              <Link key={ws.id} to={`/workspace/${123}/channel/일반`}> 
                <WorkspaceButton>{ws.name.slice(0,1).toUpperCase()}</WorkspaceButton>
              </Link>
            )
          }) 
          }
          <AddButton onClick={onClickCreateWorkspace}>+</AddButton>
        </Workspaces>
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
      <Modal show={showcreateWorkspaceModal} onCloseModal={onCloseModal}>
        <form onSubmit={onCreateWorkspace}>
          <Label>
            <span>워크스페이스 이름</span>
            <Input type="text" value={createWorkspaceName} onChange={onChangeCreateWorkspaceName}/>
          </Label>
          <Label>
            <span>워크스페이스 url</span>
            <Input type="text" value={createWorkspaceUrl} onChange={onChangeCreateWorkspaceUrl}/>
          </Label>
          <Button type="submit">생성</Button>
        </form>
      </Modal>
      
    </div>
  )
}

export default Workspace
