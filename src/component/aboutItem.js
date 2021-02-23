import React, { Component } from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';

export default class aboutItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: props.list.organizations,
      filterList: props.list.organizations,
      search: '',
    };
  }
  handleChange = (e) => {
    this.setState({ search: e.target.value });
    // this.setState({list : list.fillter(this.state.search)})
    //this.setState({list : this.state.list.name.fillter(e.target.value)})
    this.filterItems(this.state.list, e.target.value);
    // console.log("this.state.list"+list.fillter(e.target.value));
  };

  filterItems = (arrList, query) => {
    console.log('query ===' + query);
    var output = arrList.filter((test) =>
      test.name.toLowerCase().includes(query.toLowerCase()),
    );

    //const asd = arrList.filter(arrList => arrList.name.includes(query));

    this.setState({ filterList: output });
  };
  searchFunc = (e) => {};
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
          <Table fixed>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>ein</Table.HeaderCell>
                <Table.HeaderCell>strein</Table.HeaderCell>
                <Table.HeaderCell>name</Table.HeaderCell>
                <Table.HeaderCell>sub_name</Table.HeaderCell>
                <Table.HeaderCell>city</Table.HeaderCell>
                <Table.HeaderCell>state</Table.HeaderCell>
                <Table.HeaderCell>ntee_code</Table.HeaderCell>
                <Table.HeaderCell>raw_ntee_code</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            {this.state.filterList.map((item) => (
              <Table.Body key={item.ein}>
                <Table.Row>
                  <Table.Cell>{item.ein}</Table.Cell>
                  <Table.Cell>{item.strein}</Table.Cell>
                  <Table.Cell>{item.name}</Table.Cell>
                  <Table.Cell>{item.sub_name}</Table.Cell>
                  <Table.Cell>{item.city}</Table.Cell>
                  <Table.Cell>{item.state}</Table.Cell>
                  <Table.Cell>{item.ntee_code}</Table.Cell>
                  <Table.Cell>{item.raw_ntee_code}</Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}

            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan="3">
                  <Menu floated="right" pagination>
                    <Menu.Item as="a" icon>
                      <Icon name="chevron left" />
                    </Menu.Item>
                    <Menu.Item as="a">1</Menu.Item>
                    <Menu.Item as="a">2</Menu.Item>
                    <Menu.Item as="a">3</Menu.Item>
                    <Menu.Item as="a">4</Menu.Item>
                    <Menu.Item as="a" icon>
                      <Icon name="chevron right" />
                    </Menu.Item>
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </>
      </div>
    );
  }
}
