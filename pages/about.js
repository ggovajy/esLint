import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import { List, ListItem } from 'semantic-ui-react';
import Gnb from '../src/component/Gnb'
import AboutItem from '../src/component/aboutItem';
import SearchBox from '../src/component/searchBox';

export default function about({list}) {
    // const [itemlist, setItemlist] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);
    // //const API_URL = `http://openapi.customs.go.kr/openapi/service/newTradestatistics/getcustomstradeList?&searchBgnDe=201601&searchEndDe=202101&searchStatCd=US&numOfRows=999&pageNo=1&serviceKey=FHWqF6%2BqhsIupMoz%2BNjB7GFYZ4smBpJUI9FNIC8o%2BGwi%2By0vI4doVunByg5TX%2B8%2BzdPPakr%2FQxe55OA%2BQzPw7A%3D%3D`;
    // const API_URL ="http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

    // function getDataAbout(){
    //   axios.get(API_URL).then((res) =>{
    //     console.log(res);

    //     setItemlist(res.data);
    //     console.log(itemlist);
    //     setIsLoading(false);
    //     console.log(isLoading);
    //   });
      
    // }
    // useEffect(() => {
    //     getDataAbout();
    // }, [])
    return (
        <div>
            
            <AboutItem list={list}></AboutItem>
            
        </div>
    )
}

export async function getStaticProps(context){

    const API_URL =`https://projects.propublica.org/nonprofits/api/v2/search.json?order=revenue&sort_order=desc`;
    //const API_URL =`http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`;
    const res = await axios.get(API_URL);
    const data = res.data;
    
    // for (var key in data) {
    //     console.log("key: " + key + " / " + data[key])
    // }
    return {
        props : {
            list : data
        }
    };
  }


