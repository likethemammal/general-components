import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger({
    predicate: () => false,
    collapsed: true,
    duration: true,
})

const middleware = applyMiddleware(thunkMiddleware, loggerMiddleware);

const compose = (name, middleware) => composeWithDevTools({
    name
})(middleware)

const configureStore = function (reducer, name) {
    return createStore(
        reducer,
        compose(name, middleware)
    )
}

export default configureStore
