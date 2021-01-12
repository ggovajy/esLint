import React, { useEffect, useState } from 'react'
import { useRouter} from 'next/router'
import axios from 'axios'
import Item from '../../src/component/item';
import { Loader } from 'semantic-ui-react'

const Test = () => {
    const [ item, setItem ] = useState([]);
    const [ isLoading, setIsLoading] = useState(true);
    const router = useRouter()
    const { id } = router.query;

    console.log("id ========" + id);

    const API_URL =`http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
    function getData(){
        axios.get(API_URL).then(res=>{
            setItem(res.data);
            setIsLoading(false);
        })
    }

    useEffect(() => {
        if(id && id > 0){
            getData();
        }
        
    }, [id])

    return (
        <>
        {isLoading ? (
            <div style={{ padding: "300px 0"}}>
                <Loader active inline='centered' />
            </div>
        ) : (
            <div>
                <Item item={item}/>
            </div>
        )}
        </>
    )
}

export default Test
