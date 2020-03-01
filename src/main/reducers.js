import {combineReducers} from 'redux'
import PaginationReducer from './../components/PaginationReducer'

const rootReducer = combineReducers({
    ArrayUsers: PaginationReducer
})

export default rootReducer

