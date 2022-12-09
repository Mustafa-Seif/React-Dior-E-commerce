import {createStore} from 'redux'
import reducerAddItem from './reducer'


export const store = createStore(reducerAddItem, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


