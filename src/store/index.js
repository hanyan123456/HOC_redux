import {
    createStore,
    combineReducers
} from 'redux';
import reducer from './reducer'
import inputReducer from './inputReducer'
// 合并reducer
let allReducer = combineReducers({
    reducer: reducer,
    input: inputReducer
})


// 创建新的reducer
let store = createStore(allReducer);
export default store