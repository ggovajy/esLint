import React, {useState,useEffect}from 'react'
import axios from 'axios'


const LoginPage=(props2)=>{

    const [id,setId]=useState("");
    const [pwd,setPwd]=useState("");
    const [cookie,setCookie]=useState({id:"",res:false});



    const submit=(event)=>{
        event.preventDefault()
        // alert("alert");
        if(cookie.res===true){
            alert(`이미 로그인 되어 있는 상태입니다.\n로그아웃 먼저 해주세요`);
            setId("");
            setPwd("");
        }
        else{
            console.log(id+":"+pwd)
            setId("");
            setPwd("");
            login(props2);
        }
    }

    const login= async (props2)=>{
        
        await  axios.post(
            `http://localhost:8080/api/account/login`,
        {
            id:id,
            pwd:pwd
        })
        .then((response)=>{
            console.log(response);
            alert(response.data.msg);
            if(response.data.result===true){
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
        console.log("coockie:"+cookie)
        props2.updateCookie(cookie);
    },[cookie,props2]);
    
    const logout=()=>{
        console.log("logout!")
        setCookie({id:"",res:false});
    }
    const LoginState=(props)=>{
    
        if(props.cookie.res===true){
            return (
                <div >
                    {/* <h2>{cookie.id}</h2> */}
                    <h3>{props.cookie.id}님 환영합니다.</h3>
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
            <h1>login page</h1>


            <form onSubmit={submit}>
                <table  style={{margin:'auto'}}>
                    <tbody >
                        <tr>
                            <td>ID: <input type="text" value={id} onChange={({target:{value}})=>{setId(value)}}></input></td>
                            <td rowSpan="2" ><input type="submit" className="btn btn-info" value="로그인"></input></td>
                        </tr>
                        <tr>
                            <td>PW: <input type="text" value={pwd} onChange={({target:{value}})=>{setPwd(value)}}></input></td>
                            
                        </tr>
                    </tbody>
                </table>
            </form>
            
            <LoginState cookie={cookie}></LoginState>

        </div>

    )

}


export default LoginPage;