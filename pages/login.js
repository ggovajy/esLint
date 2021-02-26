/* global kakao */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { GoogleLogin } from 'react-google-login'
import KakaoLogin from 'react-kakao-login'
import { Modal } from '@material-ui/core'
const SigninPage = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [id, setId] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (window.sessionStorage.getItem('provider')) {
      setId(
        `${window.sessionStorage.getItem('provider')} 환영합니다 화면로그인`
      )
      setIsLogin(true)
    }
    const script = document.createElement('script')
    script.async = true
    script.src = 'http://developers.kakao.com/sdk/js/kakao.min.js'
    document.head.appendChild(script)
    script.onload = () => {
      createKakaoButton()
    }
  }, [])

  const createKakaoButton = () => {
    console.log(window)
    console.log(window.Kakao)
    if (window.Kakao) {
      const kakao = window.Kakao
      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init('e885afef28b28578b398f40f079ecbd4')
      }
    }
  }

  const responseGoogle = (response) => {
    setOpen(false)
    if (response.tokenId) {
      setId(
        `${
          response.profileObj.familyName + response.profileObj.givenName
        } 환영합니다 google`
      )
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
    doSignUp(response.profileObj.familyName, response.profileObj.givenName)
  }
  const responseKakao = (response) => {
    // for (const i in response.profile) {
    //   console.log(`key = ${i} value === ${response.profile[i]}`)
    // }
    if (response.profile.properties) {
      setId(`${response.profile.properties.nickname}님 환영합니다 Kakao`)
      setIsLogin(true)
      doSignUp(
        response.profile.properties.nickname.slice(0, 1),
        response.profile.properties.nickname.slice(1)
      )
    } else {
      setIsLogin(false)
    }
    setOpen(false)
  }
  const doSignUp = (fist, second) => {
    console.log(`${fist} 성 이름  ===== ${second}`)
    window.sessionStorage.setItem('id', fist)
    window.sessionStorage.setItem('name', second)
    window.sessionStorage.setItem('provider', fist + second)
  }
  const doSignDown = () => {
    window.sessionStorage.setItem('id', '')
    window.sessionStorage.setItem('name', '')
    window.sessionStorage.setItem('provider', '')
    console.log(window.sessionStorage.getItem('provider'))
  }
  const logOut = () => {
    doSignDown()
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
                <>
                  <GoogleLogin
                    clientId="34386281160-h3qbeu3vhqipa0dgfv3ei71e7cvu5gcv.apps.googleusercontent.com"
                    buttonText="GoogleLogin"
                    onSuccess={responseGoogle}
                    onFailure={doSignDown}
                    cookiePolicy={'single_host_origin'}
                  />
                  <KakaoLogin
                    jsKey="e885afef28b28578b398f40f079ecbd4"
                    onSuccess={responseKakao}
                    onFailure={doSignDown}
                    className="KakaoLogin"
                    getProfile="true"
                  >
                    <p>카카오톡 로그인</p>
                  </KakaoLogin>
                </>
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
