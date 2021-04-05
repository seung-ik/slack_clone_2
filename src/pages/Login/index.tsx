import React, {useCallback, useState} from 'react'
import { Header ,Label,Input,Container,Form,Button,Error} from '@pages/Signup/style'
import { Link, Redirect } from 'react-router-dom'
import useInput from '@hooks/useInput'
import axios from 'axios'
import useSWR from 'swr'
import fetcher from '@utils/fetcher'


const Login = () => {
  const {data,error,revalidate} = useSWR("/api/users",fetcher) 
  const [email,onChangeEmail]=useInput("")
  const [password,onChangePassword]=useInput("")
  const [loginError,setLoginError]=useState(false)
  

  const onSubmmit = useCallback(
    (e) => {
      e.preventDefault();
      setLoginError(false)
      axios.post('/api/users/login',{
        email,password
      },{withCredentials:true})
        .then(response=>{
          revalidate()
      }).catch(err=>{
        setLoginError(err.response.data)
      })
      
    },
    [email,password,revalidate]
  )
  if(data===undefined){
    return <div>...로딩중</div>
  }
  if(data){
    // console.log(data)
    return <Redirect to="/workspace/channel"/>
  }
  return (
    <Container>
      <Form>
        <Header>로그인페이지</Header>
        <Label>
          <span>email</span>
          <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail}></Input>
        </Label>
        <Label>
          <span>패스워드</span>
          <Input type="password" id="password" name="password" value={password} onChange={onChangePassword}></Input>
        </Label>
        {loginError && <Error>{loginError}</Error>}
        <Button onClick={onSubmmit}>로그인</Button>
      </Form>
      <div>
        아직회원이 아니신가요?&nbsp;&nbsp;&nbsp;
        <Link to="/signup">회원가입 하러가기</Link>
      </div>
    </Container>
  )
}

export default Login
