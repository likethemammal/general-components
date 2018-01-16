import React, { Component } from 'react'

import css from './DotDotDot.css'

const INTERVAL = 750

export default class DotDotDot extends Component {

    state = {
        numDots: 0,
    }
    timer = false

    setNumDots = () => {
        const { numDots } = this.state
        let newNumDots = numDots

        if (numDots === 3) {
            newNumDots = 0
        } else {
            newNumDots++
        }

        this.setState({
            numDots: newNumDots
        })

        this.timer = setTimeout(this.setNumDots, INTERVAL)
    }

    componentDidMount() {
        this.setNumDots()
    }

    componentWillUnmount() {
        clearTimeout(this.timer)
    }

    render() {

        const { numDots } = this.state

        const dots = [...Array(numDots)].map(() => '.')

        return <span className={css.container}>
            {dots}
        </span>
    }
}
