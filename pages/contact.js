import axios from 'axios';
import React, { Component } from 'react'
import {VictoryLine, VictoryChart, VictoryZoomContainer, VictoryAxis} from 'victory'
import {VictoryBrushContainer} from 'victory-brush-container'
import Chartsub from './chartsub';

export default function Contact({list}) {
    
    return (
        <div>
            <Chartsub list={list}></Chartsub>
        </div>
    )
}
export async function getStaticProps(context){

    //const API_URL =`https://feeds.citibikenyc.com/stations/stations.json`;
    const API_URL =`http://openapi.customs.go.kr/openapi/service/newTradestatistics/getcustomstradeList?serviceKey=ZaatR%2Bht%2F34u7%2FfFDKfuejRR%2FzH5bLRGdgxBuzLX8jTrRWQxCBv%2Fi3e1YTWZwEpaejMergGzmdKs%2F3A67uY7JA%3D%3D&searchBgnDe=201601&searchEndDe=202101&searchGbn=Y&pageNo=1&numOfRows=999`;
    const res = await axios.get(API_URL);
    //const data = res.data.response.body;
    const data = "";
  
    return {
        props : {
            // list : data.items.item
            list : data
        }
    };
}

// export default class contact extends Component {
//     state = { 
//         loading: false,
//         ItemList: []
//      };
//      loadItem = () => {
//        axios.get(`https://feeds.citibikenyc.com/stations/stations.json`)
//          .then(({ data }) => {
//            this.setState({ 
//              loading: true,
//              ItemList: data.stationBeanList
//            });
//          })
//          .catch(e => {  // API 호출이 실패한 경우
//            console.error(e);  // 에러표시
//            this.setState({  
//              loading: false
//            });
//          });
//      };

//      componentDidMount() {
//         this.loadItem();  // loadItem 호출
//     }

//     render() {
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }
