import axios from 'axios';
import React, { useState, useEffect } from 'react';
import StsGnb from '../src/component/stsGnb';
import { Item, Table } from 'semantic-ui-react';

export default function about({ list }) {
  return (
    <div>
      <StsGnb />

      <Table fixed>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>ein</Table.HeaderCell>
                <Table.HeaderCell>strein</Table.HeaderCell>
                <Table.HeaderCell>name</Table.HeaderCell>
                <Table.HeaderCell>sub_name</Table.HeaderCell>
                {/* <Table.HeaderCell>city</Table.HeaderCell>
                <Table.HeaderCell>state</Table.HeaderCell>
                <Table.HeaderCell>ntee_code</Table.HeaderCell>
                <Table.HeaderCell>raw_ntee_code</Table.HeaderCell> */}
              </Table.Row>
            </Table.Header>
            {list.map((item) => (
              <Table.Body key={item.ein}>
                <Table.Row>
                  <Table.Cell>{item.DONG_CD}</Table.Cell>
                  <Table.Cell>{item.SIDO_NM}</Table.Cell>
                  <Table.Cell>{item.SIGUNGU_NM}</Table.Cell>
                  <Table.Cell>{item.EMD_NM}</Table.Cell>
                  {/* <Table.Cell>{item.city}</Table.Cell>
                  <Table.Cell>{item.state}</Table.Cell>
                  <Table.Cell>{item.ntee_code}</Table.Cell>
                  <Table.Cell>{item.raw_ntee_code}</Table.Cell> */}
                </Table.Row>
              </Table.Body>
            ))}
            </Table>
    </div>
  );
}

export async function getStaticProps(context) {
  const API_URL = `http://localhost:3000/road-addr`;
  const res = await axios.get(API_URL);
  const { data } = res;
  console.log(`data = ${data}`);
  for (var key in data) {
      console.log("key: " + key + " / " + data[key])
  }
  return {
    props: {
      list: data,
    },
  };
}
