import React, { Component } from 'react'
import { Image, Item } from 'semantic-ui-react'
import Link from 'next/link'

export default class itemList extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            list : props.list,
            filterList : props.list,
            search : ""
        };
      }
    handleChange = (e) =>{
        this.setState({search : e.target.value})

        this.filterItems(this.state.list,e.target.value);
    }

    filterItems = (arrList, query) => {
        console.log("query ===" +query );
        var output = arrList.filter(test => test.name.toLowerCase().includes(query.toLowerCase()));
        
        this.setState({filterList : output});
      }

    render() {
        return (
            <div>
                <div style={{paddingTop:20 }}>
                    <label>전체 건수</label>
                        <span>{this.state.list.length}</span>
                    <label>조회 건수</label>
                    <span>{this.state.filterList.length}</span>
                    <br/>
                    <input
                        id="search"
                        type="text"
                        name="search"
                        placeholder="Search goods"
                        value={this.state.search}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <Item.Group>
                    {this.state.filterList.map((item) =>(
                        <Link href={`/view/${item.id}`} key={item.id}>
                            <a>
                                <Item>
                                    <Item.Image src={item.image_link} />
                                    <Item.Content>
                                        <Item.Header>Arrowhead Valley Camp</Item.Header>
                                        <Item.Meta>
                                            <span className='name'>${item.name}</span>
                                            <span className='price'>${item.price}</span>
                                            <span className='stay'>{item.created_at.substr(0,4)}</span>
                                        </Item.Meta>
                                        <Item.Description>{item.description}</Item.Description>
                                    </Item.Content>
                                </Item>
                            </a>
                        </Link>
                    ))}
                    </Item.Group>
                </div>
            </div>
        )
    }
}
