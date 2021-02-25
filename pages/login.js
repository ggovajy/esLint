// import axios from 'axios';
// import { Router, useRouter } from 'next/router';
// import React from 'react';
// import { Form, Button } from 'semantic-ui-react';

// function login() {
//   const router = useRouter();
//   function checklogin() {
//     axios.post('/api/login').then((res) => {
//       if (res.status === 200) {
//         router.push('/admin');
//       }
//     });
//   }
//   return (
//     <div>
//       <Form>
//         <Form.Field inline>
//           <input placeholder="ID" />
//         </Form.Field>
//         <Form.Field inline>
//           <input type="password" placeholder="PASSWORD" />
//         </Form.Field>
//         <Button onClick={checklogin}>Login</Button>
//       </Form>
//     </div>
//   );
// }

// export default login;

import React, { useState } from 'react'
import styled from 'styled-components'
import { GoogleLogin } from 'react-google-login'
import { Modal } from '@material-ui/core'
const SigninPage = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [id, setId] = useState('')
  const [open, setOpen] = useState(false)

  const responseGoogle = (response) => {
    if (response.tokenId) {
      setId(
        `${
          response.profileObj.familyName + response.profileObj.givenName
        } 환영합니다`
      )
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
    setOpen(false)
  }

  const logOut = () => {
    setIsLogin(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      {!isLogin ? (
        <button type="button" onClick={handleOpen}>
          로그인 버튼
        </button>
      ) : (
        <div>
          {id} <button onClick={logOut}>로그아웃</button>
        </div>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <SignInContainer>
          <Container>
            <ContainerTop>
              <h1>Sign In whith Google</h1>
              <button onClick={handleClose}>닫기</button>
            </ContainerTop>
            <ContainerBody>
              {!isLogin && (
                <GoogleLogin
                  clientId="34386281160-h3qbeu3vhqipa0dgfv3ei71e7cvu5gcv.apps.googleusercontent.com"
                  buttonText="GoogleLogin"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={'single_host_origin'}
                />
              )}
            </ContainerBody>
          </Container>
        </SignInContainer>
      </Modal>
    </>
  )
}

export default SigninPage

const SignInContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`

const Container = styled.div`
  border: 2px solid grey;
  background-color: white;
  box-shadow: -5px 5px darkgray;
  width: 600px;
  height: 500px;
`

const ContainerTop = styled.div`
  background-color: white;
  border: none;
  text-align: center;
`

const ContainerBody = styled.div`
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: flex-end;
  height: 300px;
`
