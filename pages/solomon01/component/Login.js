import React, {useState,useEffect}from 'react'
import axios from 'axios'
import { SessionHook } from '../hooks/sessionHook';



const LoginPage=()=>{

    const [id,setId]=useState("");
    const [pwd,setPwd]=useState("");
    const [cookie,setCookie]=useState({id:"",res:false});

    const {session,setSessionHook}=SessionHook();



    const submit=(event)=>{
        event.preventDefault()
        // alert("alert");
        if(session.res===true){
            alert(`이미 로그인 되어 있는 상태입니다.\n로그아웃 먼저 해주세요`);
            setId("");
            setPwd("");
        }
        else{
            console.log(id+":"+pwd)
            setId("");
            setPwd("");
            login();
        }
    }

    // const login= async (props2)=>{
        
    //     await  axios.post(
    //         // `http://localhost:8080/api/account/login`,
    //         `http://localhost:8080/react/login`,
    //     {
    //         id:id,
    //         pwd:pwd
    //     })
    //     .then((response)=>{
    //         console.log(response);
    //         alert(response.data.msg);
    //         if(response.data.result===true){
    //             setCookie({id:id,res:true});
                
    //             console.log("@@");

               
    //         }
    //         console.log(response.data.result);
    //         console.log(cookie);
    //      }).catch((e)=>{
    //          console.log(e);
    //      })
        

    // }


    const login= async ()=>{
        
        await  axios.post(
            `http://localhost:8080/api/account/login`,
            // `http://localhost:8080/react/login`,
        {
            id:id,
            pwd:pwd
        })
        .then((response)=>{
            console.log(response);
            alert(response.data.msg);
            if(response.data.result===true){

                setSessionHook({id:id,res:true});
                setCookie({id:id,res:true});
                
                console.log("@@");

               
            }
            console.log(response.data.result);
            console.log(cookie);
         }).catch((e)=>{
             console.log(e);
         })
        

    }

    useEffect(()=>{
        let mou=true;
        if(mou){
            console.log("coockie:"+cookie)
        }

        return ()=>{mou=false}
        
    },[]);
    
    const logout=()=>{
        console.log("logout!")
        setSessionHook({id:"unknown",res:false});
        setCookie({id:"",res:false});
    }
    const LoginState=()=>{
    
        console.log(session.res)
        if(session.res===true){
            return (
                <div >
                    {/* <h2>{cookie.id}</h2> */}
                    <h3>{session.id}님 환영합니다.</h3>
                    <p onClick={logout}>(로그아웃)</p>
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

    

    return(
        <div style={{textAlign:'center'}}>
            <h1>Login Page</h1>
            <br></br>


            <form onSubmit={submit}>
                <table  style={{margin:'auto'}}>
                    <tbody >
                        <tr>
                            <td>
                                <div className="form-inline form-group" >
                                    <label for="id" className="col-sm-2 control-label">ID</label>
                                    <input className="form-control" id="id" type="text" value={id} onChange={({target:{value}})=>{setId(value)}}></input>
                                </div>
                            </td>
                            <td rowSpan="2" ><input type="submit" className="btn btn-info" value="로그인"></input></td>
                        </tr>
                        <tr>
                            <td>
                                <div className="form-inline form-group" >
                                    <label for="pw" className="col-sm-2 control-label">PW</label>
                                    <input className="form-control" id="pw"type="text" value={pwd} onChange={({target:{value}})=>{setPwd(value)}}></input>
                                </div>
                            </td>
                            
                        </tr>
                    </tbody>
                </table>
            </form>
            
            <LoginState></LoginState>

        </div>

    )

}


export default LoginPage;