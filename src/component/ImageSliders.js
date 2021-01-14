import SwiftSlider from 'react-swift-slider'

import React, { Component } from 'react'

const data =  [
    {'id':'1','src':'/images/2.jpg'},
    {'id':'2','src':'/images/3.gif'},
    {'id':'3','src':'/images/4.jpg'},
    {'id':'4','src':'/images/6.jpg'},
    {'id':'5','src':'/images/7.png'},
    {'id':'6','src':'/images/8.jpg'}
  ];
export default class ImageSlider extends Component {


    render() {
        return (
            <div style={{height:'250px', width:'100%', alignContent:'center', paddingLeft:'20%',paddingRight:'20%'}}>
                <SwiftSlider interval={3000} height={250} data={data} showDots={true} enableNextAndPrev={true}/>
            </div>
        )
    }
}

