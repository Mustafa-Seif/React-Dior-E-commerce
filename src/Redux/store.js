import {createStore} from 'redux'
import reducerAddItem from './reducerAddItem'
import reducerWish from './reducerAddWish'



export const store = createStore(reducerAddItem, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export const storeLiked = createStore(reducerWish, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

