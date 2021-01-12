import { useEffect, useState } from "react"
import axios from 'axios'
import Head from 'next/head'
import Footer from '../src/component/Footer'
import styles from '../styles/Home.module.css'
import ItemList from "../src/component/ItemList"
import { Loader } from 'semantic-ui-react'

export default function Home() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const API_URL = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"

  function getData(){
    axios.get(API_URL).then((res) =>{
      console.log(res);
      setList(res.data);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App || ggova</title>
      </Head>
      {isLoading && (
        <div style={{ padding: "300px 0"}}>
            <Loader active inline='centered' />
        </div>
      )}
      {!isLoading && (
      <>
        <ItemList list = {list}></ItemList>
        
        <Footer/>
      </>
      )}
    </div>
  )
}
