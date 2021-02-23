/*global kakao*/
import React, { Component } from 'react';
import { useEffect, useState, useRef, useCallback } from 'react';
import Try from '../src/component/Try';
import StsGnb from '../src/component/stsGnb';

const markerdata = [
  {
    title: '콜드스퀘어',
    lat: 37.62197524055062,
    lng: 127.16017523675508,
  },
  {
    title: '하남돼지집',
    lat: 37.620842424005616,
    lng: 127.1583774403176,
  },
  {
    title: '수유리우동',
    lat: 37.624915253753194,
    lng: 127.15122688059974,
  },
  {
    title: '맛닭꼬',
    lat: 37.62456273069659,
    lng: 127.15211256646381,
  },
];

export default class MapTest extends Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.async = true;
    script.src =
      'https://dapi.kakao.com/v2/maps/sdk.js?appkey=ed92b1901e2c76bba05aa0060dd3ea39&autoload=false';
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        let container = document.getElementById('Mymap');
        let options = {
          center: new kakao.maps.LatLng(37.506502, 127.053617),
          level: 7,
        };

        const map = new window.kakao.maps.Map(container, options);

        markerdata.forEach((el) => {
          // 마커를 생성합니다
          const marker = new kakao.maps.Marker({
            //마커가 표시 될 지도
            map: map,
            //마커가 표시 될 위치
            position: new kakao.maps.LatLng(el.lat, el.lng),
          });

          // 마커에 표시할 인포윈도우를 생성합니다
          var infowindow = new kakao.maps.InfoWindow({
            content: el.title, // 인포윈도우에 표시할 내용
          });
          kakao.maps.event.addListener(
            marker,
            'mouseover',
            makeOverListener(map, marker, infowindow),
          );
          kakao.maps.event.addListener(
            marker,
            'mouseout',
            makeOutListener(infowindow),
          );
          // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
          function makeOverListener(map, marker, infowindow) {
            return function () {
              infowindow.open(map, marker);
            };
          }

          // 인포윈도우를 닫는 클로저를 만드는 함수입니다
          function makeOutListener(infowindow) {
            return function () {
              infowindow.close();
            };
          }
        });
        // 마커 1개 생성
        // const markerPosition =
        //   {xpo : 37.62197524055062 , ypo  : 127.16017523675508};
        // const {xpo, ypo} = markerPosition
        // console.log(`markerPosition = ${xpo} ypostion = ${ypo}`)
        // // 마커를 생성
        // let marker = new kakao.maps.Marker({
        //   position: markerPosition,
        // });

        // marker.setMap(map);
      });
    };
  }
  render() {
    const styleMap = {
      width: '200px',
      height: '200px',
    };
    return (
      <div>
        <StsGnb></StsGnb>
        <div id="Mymap" style={styleMap}>
          asdasdasdasdasd
        </div>
      </div>
    );
  }
}
