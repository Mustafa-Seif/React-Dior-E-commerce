import {createStore} from 'redux'
import reducerAdd from '../Redux/reducer'



const store = createStore(reducerAdd, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store