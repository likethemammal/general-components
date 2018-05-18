import React, { Component } from 'react'

import css from './Example.less'

export default class Example extends Component {
    static defaultProps = {
        className: css.container,
    }

    onButtonClick = () => {
        const { changeAction, on } = this.props

        changeAction(!on)
    }

    render() {

        const { className } = this.props

        return <div
            className={className}
            onClick={this.onButtonClick}
        >
            {'This is a test of the Webpack bundle, PostCSS, and Babel.'}
        </div>
    }
}