import axios from 'axios'
import { Router, useRouter } from 'next/router'
import React from 'react'
import { Form, Button } from 'semantic-ui-react'

function login() {
    const router = useRouter();
    function checklogin(){
        
        axios.post("/api/login").then((res) =>{
            if(res.status===200){
                router.push("/admin");
            }
        })
    }
    return (
        <div>
            <Form>
                <Form.Field inline>
                    <input placeholder="ID" />
                </Form.Field>
                <Form.Field inline>
                    <input type ="password" placeholder="PASSWORD" />
                </Form.Field>
                <Button onClick={checklogin}>Login</Button>
            </Form>
        </div>
    )
}

export default login
