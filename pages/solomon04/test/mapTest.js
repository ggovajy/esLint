/* global kakao */
import React, { Component } from 'react';
import { useEffect, useState, useRef, useCallback } from 'react';
import { Autorenew, CompareArrowsOutlined } from '@material-ui/icons';
import Try from '../src/component/Try';
import StsGnb from '../src/component/stsGnb';

export default class MapTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      key: '선릉역',
    };
  }

  componentDidMount() {
    this.testMapSample();
  }

  handleChange = (e) => {
    this.setState({ key: e.target.value });
    // this.setState({list : list.fillter(this.state.search)})
    // this.setState({list : this.state.list.name.fillter(e.target.value)})
    console.log(`key ===== ${this.state.key}`);
    // console.log("this.state.list"+list.fillter(e.target.value));
  };

  testMapSample() {
    const script = document.createElement('script');
    script.async = true;
    script.src =
      'https://dapi.kakao.com/v2/maps/sdk.js?appkey=ed92b1901e2c76bba05aa0060dd3ea39&autoload=false&libraries=services';
    document.head.appendChild(script);
    script.onload = () => {
      kakao.maps.load(() => {
        const container = document.getElementById('Mymap');
        const options = {
          center: new kakao.maps.LatLng(37.506502, 127.053617),
          level: 7,
        };

        // 지도를 생성합니다
        const map = new kakao.maps.Map(container, options);

        // 장소 검색 객체를 생성합니다
        const ps = new kakao.maps.services.Places();

        // 키워드로 장소를 검색합니다
        ps.keywordSearch(this.state.key, placesSearchCB);

        // 키워드 검색 완료 시 호출되는 콜백함수 입니다
        function placesSearchCB(data, status, pagination) {
          if (status === kakao.maps.services.Status.OK) {
            // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
            // LatLngBounds 객체에 좌표를 추가합니다
            const bounds = new kakao.maps.LatLngBounds();

            for (let i = 0; i < data.length; i++) {
              displayMarker(data[i]);
              bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
            }

            // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
            map.setBounds(bounds);
          }
        }

        // 지도에 마커를 표시하는 함수90입니다
        function displayMarker(place) {
          // 마커를 생성하고 지도에 표시합니다
          const marker = new kakao.maps.Marker({
            map,
            position: new kakao.maps.LatLng(place.y, place.x),
          });
          for (const zz in place) {
            console.log(`place= ${zz} value = ${place[zz]}`);
          }
          // 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다
          const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

          // 마커에 클릭이벤트를 등록합니다
          kakao.maps.event.addListener(marker, 'click', function () {
            // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
            infowindow.setContent(
              `<div style="padding:5px;font-size:12px;">${place.place_name}</div>`,
            );
            infowindow.open(map, marker);
          });
        }
      });
    };
  }

  handleSearch = (e) => {
    this.testMapSample();
  };

  ketDownEvent = (e) => {
    if (e.keyCode === 13) {
      this.handleSearch();
    }
  };

  render() {
    const styleMap = {
      width: '400px',
      height: '400px',
      borderRadius: '8rem',
    };
    const styleCenter = {
      paddingLeft: '30%',
    };
    return (
      <div>
        <StsGnb />
        <div style={styleCenter}>
          <div id="Mymap" style={styleMap} />
        </div>
        <input
          id="searchBox"
          value={this.state.key}
          onChange={this.handleChange}
          onKeyDown={this.ketDownEvent}
        />
        <button onClick={this.handleSearch}>검색해달라구요</button>
      </div>
    );
  }
}
