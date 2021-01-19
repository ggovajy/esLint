import React, { Component } from 'react'
import Form from './Form'
import PostList from './PostList'

export default class solomon03 extends Component {
    render() {
        return (
            <div>
                <h1> CRUD + state test</h1>
                <Form></Form>
                <PostList></PostList>
            </div>
        )
    }
}
