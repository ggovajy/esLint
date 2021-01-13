import React, { Component } from 'react'

export default class aboutItem extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            list : props.list.organizations,
            filterList : props.list.organizations,
            search : ""
        };
      }
    handleChange = (e) =>{
        this.setState({search : e.target.value})
        // this.setState({list : list.fillter(this.state.search)})
        //this.setState({list : this.state.list.name.fillter(e.target.value)})
        this.filterItems(this.state.list,e.target.value);
        // console.log("this.state.list"+list.fillter(e.target.value));
    }

    filterItems = (arrList, query) => {
        console.log("query ===" +query );
        var output = arrList.filter(test => test.name.toLowerCase().includes(query.toLowerCase()));
        
        //const asd = arrList.filter(arrList => arrList.name.includes(query));
        
        this.setState({filterList : output});
      }
    searchFunc = (e) =>{

    }
    render() {
        return (
            <div>
                <>
                <input
                id="search"
                type="text"
                name="search"
                placeholder="Search goods"
                value={this.state.search}
                onChange={this.handleChange}
                />
                <button onClick={this.searchFunc}>about 검색</button>
                <label>전체 건수</label>
                <span>{this.state.list.length}</span>
                <label>조회 건수</label>
                <span>{this.state.filterList.length}</span>
                {this.state.filterList.map((item) =>(
                <div style={{ paddingTop: 20}} key = {item.id}>
                    <label>ein : </label>
                    <span style={{ paddingRight: 20}}>{item.ein}</span>
                    
                    <label>strein : </label>
                    <span style={{ paddingRight: 20}}>{item.strein}</span>
                    
                    <label>name : </label>
                    <span style={{ paddingRight: 20}}>{item.name}</span>
                    
                    <label>sub_name : </label>
                    <span style={{ paddingRight: 20}}>{item.sub_name}</span>
                    
                    <label>city : </label>
                    <span style={{ paddingRight: 20}}>{item.city}</span>
                    
                    <label>state : </label>
                    <span style={{ paddingRight: 20}}>{item.state}</span>
                    
                    <label>ntee_code : </label>
                    <span style={{ paddingRight: 20}}>{item.ntee_code}</span>
                    
                    <label>raw_ntee_code : </label>
                    <span style={{ paddingRight: 20}}>{item.raw_ntee_code}</span>
                    
                    <br/>
                </div>
                ))}
                </>
            </div>
        )
    }
}
