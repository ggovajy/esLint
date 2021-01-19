import React , {useEffect,useState}from 'react'
import Account from './Account';
import LoginPage from './Login';


const Components=()=>{

    const [cookie,setCookie]=useState({id:"",res:false});


    useEffect(()=>{
        console.log("components rendering")
    },[cookie]);

    const  updateCookie=(cookie)=>{
        console.log("updaeCookie:   "+cookie);
        console.log("updaeCookie: "+cookie.res);
        setCookie(cookie);

    }


    

    const  IsLogin=(props)=>{
        console.log("isLogin: "+props.cookie);
        console.log("isLogin: "+props.cookie.res);
        if(props.cookie.res===true){
            console.log("in")
            return(
                <div>
                    <Account></Account>
                </div>
            )
        }
        else{
            console.log("out")
            return(
                <div></div>
            )
        }
    }





    return(
        <div>
           
            
           
            <hr></hr>
            <LoginPage updateCookie={updateCookie}></LoginPage>
            <hr></hr>
            <div>
            <IsLogin cookie={cookie}/>
            </div>

            <div className="container">
                <button className="btn btn-dark">Click Me</button>
            </div>
        </div>


    )
} 

export default Components;