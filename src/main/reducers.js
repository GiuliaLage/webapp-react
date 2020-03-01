import {combineReducers} from 'redux'
import GetDataReducer from '../components/Table/GetDataReducer'


const rootReducer = combineReducers({
    ArrayUsers: GetDataReducer,
    PaginaAtual : GetDataReducer,
    Limit : GetDataReducer,
    Usuarios_static : GetDataReducer
})

export default rootReducer

