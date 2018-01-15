import { connect } from "react-redux"
import { changeAction } from '../actions/example'

export default (Component) => connect(({ example }) => ({
    on: example.on,
}), {
    changeAction,
})(Component)
