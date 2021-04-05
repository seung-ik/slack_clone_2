import { Header, ProfileImg, RightMenu } from './style'
import fetcher from '@/utils/fetcher'
import axios from 'axios'
import React, { FC, useCallback } from 'react'
import { Redirect } from 'react-router-dom'
import useSWR from 'swr'
import gravatar from 'gravatar'

const Workspace:FC = ({children}) => {
  const {data,error,revalidate,mutate} = useSWR("/api/users",fetcher,{dedupingInterval:10000}) 
  const onLogout = useCallback(()=>{
    axios.post('/api/users/logout',null,{withCredentials:true}).then(()=>
    mutate(false))
  },[])
  
  if(!data){
    return <Redirect to="/login"/>
  }

  return (
    <div>
      <Header>
        <RightMenu>
          <span>
            {console.log(data)}
            <ProfileImg src={gravatar.url(data.email,{s:"50px",d:'retro'})} alt=''/>  
          </span>
        </RightMenu>
      </Header>  
      <button onClick={onLogout}>로그아웃</button>
      {children}
    </div>
  )
}

export default Workspace
