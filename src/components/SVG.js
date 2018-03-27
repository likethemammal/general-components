import React, { Component } from 'react'

import css from './SVG.css'

export default class SVG extends Component {

    static defaultProps = {
        className: css.container,
    }

    render() {

        const { raw, ...rest } = this.props

        return <div
            {...rest}
            dangerouslySetInnerHTML={{__html: raw}}
        />
    }
}