import axios from 'axios';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button } from 'semantic-ui-react';
import Login from './Login'

function admin() {
    const router = useRouter();
    const [isLogin, setIsLogin] = useState(false);

    function checkLogin(){
        axios.get("/api/isLogin").then((res) =>{
            
            if(res.status === 200 && res.data.name) {
                //로그인
                setIsLogin(true);
            }else{
                //로그인안됨
                router.push("/login");
            }
        })
    }
    function logOut(){
        axios.get('/api/logout').then((res) =>{
            if(res.status === 200){
                router.push("/");
            }
        })
    }
    useEffect(() =>{
        checkLogin();
    }, []);
    return (
        <div>
            {isLogin && <Button onClick={logOut}>Logout</Button>}
        </div>
    )
}

export default admin