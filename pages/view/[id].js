import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Item from '../../src/component/item';
import Head from 'next/head';

const Test = ({ item }) => {
  //ssd 적용하며 빠지는부분
  // const [ item, setItem ] = useState([]);
  // const [ isLoading, setIsLoading] = useState(true);
  // const router = useRouter()
  // const { id } = router.query;

  // console.log("id ========" + id);

  // const API_URL =`http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  // function getData(){
  //     axios.get(API_URL).then(res=>{
  //         setItem(res.data);
  //         setIsLoading(false);
  //     })
  // }

  // useEffect(() => {
  //     if(id && id > 0){
  //         getData();
  //     }

  // }, [id])

  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" context={item.description}></meta>
          </Head>
          <Item item={item} />
        </>
      )}
    </>
    //ssd 적용하며 빠지는 부분
    // <>
    // {isLoading ? (
    //     <div style={{ padding: "300px 0"}}>
    //         <Loader active inline='centered' />
    //     </div>
    // ) : (
    //     <div>
    //         <Item item={item}/>
    //     </div>
    // )}
    // </>
  );
};

export default Test;

export async function getServerSideProps(context) {
  const id = context.params.id;
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(API_URL);
  const data = res.data;

  return {
    props: {
      item: data,
    },
  };
}
