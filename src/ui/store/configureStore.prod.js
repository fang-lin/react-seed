import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import api from '../middleware/api'
import rootReducer from '../reducers'

const configureStore = preLoadedState => createStore(
    rootReducer,
    preLoadedState,
    applyMiddleware(thunk, api)
)

export default configureStore