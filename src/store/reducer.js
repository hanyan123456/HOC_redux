/*
 * @Author: 寒嫣
 * @Date: 2019-11-13 09:31:03
 * @Description: file content
 */
import * as Types from './type'
const inState = {
    count: 0,
    // inputValue: '我们'
}
const reducer = (state = inState, action) => {
    // const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case Types.ADD_COUNT:
            return {
                count: state.count + 1
            }
            // case Types.GET_INPUT:
            //     // return {
            //     newState.inputValue = action.value
            //     // }
            //     return newState
            default:
                return state
    }
}
export default reducer