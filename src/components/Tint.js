import React, { Component } from 'react'

import css from './Tint.css'

export default class Tint extends Component {

    static defaultProps = {
        className: css.container,
    }

    render() {

        const { className } = this.props

        return <div className={className}></div>
    }
}