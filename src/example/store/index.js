import { appReducer } from '../reducers'
import configureStore from "../../store/configure"

//used in devtools
const STORE_NAME_App = 'App'

export const appStore = configureStore(appReducer, STORE_NAME_App)
