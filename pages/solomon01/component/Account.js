import React from 'react'
import axios from 'axios'
import {useState,useEffect,useRef} from 'react'
 
const Account=()=>{

    const [count,setCount]=useState(0);
    const [accounts,setAccounts] = useState([]);
    const [id  ,setId]=useState("");
    const [regst_no,setRegst_no]=useState("undefined");
    const [pwd,setPwd]=useState("");
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [save_type,setSave_type]=useState("추가")

    const [reRender,setRerender]=useState("추가")

    const formRef=useRef();

    const state=()=>{
        setId("sstring");
    }


    useEffect(()=>{

        const getAllAccounts= async()=>{
            console.log("Rerend")
        
            let data="hi hello";
            
                await axios.get(
                    `http://localhost:8080/api/account/list`
                ).then((response)=>{
                    data=response.data;
                }).catch(e=>{
                console.log(e);
            })
            console.log(data);
            setAccounts(data);
            // const res= await axios.get('localhost:8080/api/account/list');
        }
        
       
            getAllAccounts();
        },[reRender]);

    const counter=()=>{
        console.log("countUp: "+count)
        setCount(count+1);
    }
    
    const rollbackBtn=()=>{
    
        console.log("DW");
        infoUpdate("undefined","","","","","추가");
        
    }

    const info=(account)=>{
        return function(){
            infoUpdate(account.REGST_NO,account.ID,account.PWD,account.NAME,account.EMAIL,"수정");
        }
    }


    const infoUpdate=(no,id,pwd,name,email,save)=>{
            console.log("infoUpdate");
            console.log(no+","+id+","+pwd+","+name+","+email)

            console.log(save_type);

            
            setRegst_no(no);
            setId(id);
            setPwd(pwd);
            setName(name);
            setEmail(email);
            setSave_type(save);
            
            
        
    }
    const saveAccount=()=>{

        console.log("in save")

        const run=async ()=>{

            await axios.post(
                `http://localhost:8080/api/account/insert`,{
                    regst_no:regst_no,
                            id:id,
                            pwd:pwd,
                            name:name,
                            email:email
                }
            ).then((response)=>{
                console.log("response: "+response.data);
                console.log(response);
                
                 rollbackBtn();
            }).catch(e=>{
                console.log(e);
            })

            setRerender(reRender+1);
        }

        run();
        
    }
    
    const deleteAccount = (no) => {

        console.log("delete: " + no);
        const run = async () => {
            console.log(no);

            await axios.post(
                `http://localhost:8080/api/account/delete`,{
                    no:no+""
                }
            ).then((response) => {
                console.log("response: " + response.data);
                console.log(response);
               
                rollbackBtn()
            }).catch(e => {
                console.log(e);
            })
            
            setRerender(reRender + 1);
        }

        run();
    }

    return (


        <div style={{textAlign:'center'}}>
            <h1 onClick={state}>Account List!!</h1>
            <hr></hr>
            <form  ref={formRef}>
				<input type="hidden" name="regst_no" id="regst_no" defaultValue={regst_no}/>
				<table onClick={counter} style={{margin:'auto'}}>
                    <tbody>
                        <tr>
                            <td>ID: <input type="text" name="id" id="id" value={id} onChange={({target:{value}})=>setId(value)}/></td>
                            <td>Password: <input type="password" name="pwd" id="pwd" value={pwd} onChange={({target:{value}})=>setPwd(value)}/></td>
                            <td>Name: <input type="text" name="name" id="name" value={name} onChange={({target:{value}})=>setName(value)}/></td>
                            <td>Email: <input type="text" name="email"  id="email" value={email} onChange={({target:{value}})=>setEmail(value)}/></td>
                            <td><input  onClick={saveAccount} type="button" className="btn btn-success" id="save" value={save_type}/></td>
                            <td><button className="btn btn-primary" type="reset" onClick={rollbackBtn}>초기화</button></td>
                        </tr>
                    </tbody>
				</table>
			</form>


            {/* <div onClick={counter}>
                {JSON.stringify(accounts)}
                {count}
            </div> */}
            
            <hr></hr>
            <br></br>
            <div>

                <table border="1" style={{margin:'auto'}} className="table-striped">
                    <thead>
                        <tr>
                            <th>NO</th>
                            <th>ID</th>
                            <th>Password</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>

                    <tbody>
                        {accounts.map(account=>(
                            <tr  onClick={info(account)}  key={account.REGST_NO}>
                                <td>{account.REGST_NO}</td>
                                <td>{account.ID}</td>
                                <td>{account.PWD}</td>	
                                <td>{account.NAME}</td>
                                <td>{account.EMAIL}</td>
                                <td  onClick={()=>{ deleteAccount(account.REGST_NO)}}>X</td>
                            </tr>
                        ))}
                    </tbody>    

                </table>
            </div>
        </div>
    )
}


export default Account;