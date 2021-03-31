import React, { ChangeEvent, useState } from 'react'
import { Header ,Label,Input,Container,Form,Button} from '@pages/Signup/style'
import { Link } from 'react-router-dom'


const Signup = () => {
  const [email,setEmail]=useState("")
  const [nickname,setnickname]=useState("")
  const [password,setpassword]=useState("")
  const [passwordCheck,setpasswordCheck]=useState("")
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>)=>{
    setEmail(e.target.value)
  }
  return (
    <Container>
      <Form>
        <Header>회원가입</Header>
        <Label>
          <span>email</span>
          <Input type="text" id="email" name="email" value={email} onChange={onChangeEmail}></Input>
        </Label>
        <Label>
          <span>닉네임</span>
          <Input type="text" id="nickname" name="nickname" value={nickname} onChange={onChangeEmail}></Input>
        </Label>
        <Label>
          <span>패스워드</span>
          <Input type="password" id="password" name="password" value={password} onChange={onChangeEmail}></Input>
        </Label>
        <Label>
          <span>패스워드 확인</span>
          <Input type="password" id="passwordCheck" name="passwordCheck" value={passwordCheck} onChange={onChangeEmail}></Input>
        </Label>
        <Button>회원가입완료</Button>
      </Form>
      <div>
        이미 회원이신가요?&nbsp;&nbsp;&nbsp;
        <Link to="/login">로그인 하러가기</Link>
      </div>
    </Container>
  )
}

export default Signup
