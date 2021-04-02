import React, {useCallback, useState } from 'react'
import { Header ,Label,Input,Container,Form,Button,Error, Success} from '@pages/Signup/style'
import { Link } from 'react-router-dom'
import useInput from '@hooks/useInput'
import axios from 'axios'


const Signup = () => {
  const [email,onChangeEmail]=useInput("")
  const [nickname,onChangeNickname]=useInput("")
  const [password,setPassword]=useState("")
  const [passwordCheck,setPasswordCheck]=useState("")
  const [missmatchError, setMissmatchError]=useState(false)
  const [signupError,setSignupError]=useState("")
  const [signupSuccess,setSignupSuccess]=useState(false)
  
  const onChangePassword = useCallback((e)=>{
    setPassword(e.target.value)
    setMissmatchError(e.target.value !== passwordCheck)
  },[passwordCheck])

  const onChangePasswordCheck = useCallback((e)=>{
    setPasswordCheck(e.target.value)
    setMissmatchError(e.target.value !== password)
  },[password])

  const onSubmmit = useCallback(
    (e) => {
      e.preventDefault();
      if(!missmatchError){
        setSignupError("")
        setSignupSuccess(false)
        axios.post('/api/users',{
          email,password,nickname
        })
        .then(response=>{
          setSignupSuccess(true)
        })
        .catch(err=>{
          setSignupError(err.response.data)
        })
      }
      
    },
    [email,nickname,password,missmatchError],
  )
  return (
    <Container>
      <Form>
        <Header>회원가입</Header>
        <Label>
          <span>email</span>
          <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail}></Input>
        </Label>
        <Label>
          <span>닉네임</span>
          <Input type="text" id="nickname" name="nickname" value={nickname} onChange={onChangeNickname}></Input>
        </Label>
        <Label>
          <span>패스워드</span>
          <Input type="password" id="password" name="password" value={password} onChange={onChangePassword}></Input>
        </Label>
        <Label>
          <span>패스워드 확인</span>
          <Input type="password" id="passwordCheck" name="passwordCheck" value={passwordCheck} onChange={onChangePasswordCheck}></Input>
        </Label>
        {!nickname && <Error>닉네임을 입력해주세요</Error>}
        {missmatchError&& <Error>비밀번호가 일치하지 않네요</Error>}
        {signupError&& <Error>{signupError}</Error>}
        {signupSuccess && <Success>회원가입에 성공하셧습니다. 로그인 하세요</Success> }
        <Button onClick={onSubmmit}>회원가입완료</Button>
      </Form>
      <div>
        이미 회원이신가요?&nbsp;&nbsp;&nbsp;
        <Link to="/login">로그인 하러가기</Link>
      </div>
    </Container>
  )
}

export default Signup
