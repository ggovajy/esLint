import React, { Component } from 'react'

export default class aboutItem extends Component {
    constructor(props) {
        super(props);
        console.log("ggova = "+props.list[0].id);
        this.state = {
            list : props.list,
            filterList : props.list,
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
        
        const asd = arrList.filter(arrList => arrList.name.includes(query));
        
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
                {this.state.filterList.map((item) =>(
                <div key = {item.id}>
                    <span>{item.name}</span>
                    
                    <br/>
                </div>
                ))}
                </>
            </div>
        )
    }
}
