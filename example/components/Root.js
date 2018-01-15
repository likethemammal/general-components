import React, { Component } from 'react'
import { Provider } from "react-redux"
import { appStore } from "../store"
import Example from './Example'

class Root extends Component {
    render() {
        return <Provider store={appStore}>
            <Example />
        </Provider>
    }
}

export default Root;
