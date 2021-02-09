import React , {useEffect,useState}from 'react'
import { SessionHook } from '../hooks/sessionHook';
import Account from './Account';
import LoginPage from './Login';


const Components=()=>{

    const [cookie,setCookie]=useState({id:"",res:false});

    const{session,setSessionHook}=SessionHook();


    useEffect(()=>{
        console.log("components rendering")
        console.log(session)
    },[session]);

    // const  updateCookie=(cookie)=>{
    //     console.log("updaeCookie:   "+cookie);
    //     console.log("updaeCookie: "+cookie.res);
    //     setCookie(cookie);

    // }

    const LoginState=()=>{
    
        console.log(session.res)
        if(session.res===true){
            return (
                <div style={{textAlign:'center'}}>
                    {/* <h2>{cookie.id}</h2> */}
                    <h3>{session.id}님 환영합니다.</h3>
                    <p style={{color:"grey"}} onClick={logout}>(로그아웃)</p>
                    <hr></hr>
                </div>
            )
        }
        else{
            return(
                <div>
    
                </div>
            )
        }
    }
    const logout=()=>{
        console.log("logout!")
        setSessionHook({id:"unknown",res:false});
        setCookie({id:"",res:false});
    }
    

    const  IsLogin=()=>{
        console.log("isLogin: "+session);
        console.log("isLogin: "+session.res);
        if(session.res===true){
            console.log("in")
            return(
                <div>
                    <hr></hr>
                    <LoginState></LoginState>
                    <Account></Account>
                </div>
            )
        }
        else{
            console.log("out")
            return(
                <div>
                     <hr></hr>
                     <LoginPage></LoginPage>
                </div>
            )
        }
    }





    return(
        <div>
           
           
            {/* <LoginPage updateCookie={updateCookie}></LoginPage> */}
            {/* <LoginPage ></LoginPage> */}
            
            <div>
                <IsLogin/>
            </div>

        </div>


    )
} 

export default Components;