import { createStore } from 'redux'
import reducer from './reducers/root-reducer'

let  store = createStore(reducer, window.STATE_FROM_SERVER, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store
