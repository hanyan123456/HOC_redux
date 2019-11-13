/*
 * @Author: 寒嫣
 * @Date: 2019-11-13 12:26:45
 * @Description: file content
 */
import * as Types from './type'
const inState = {
      inputValue: '我们'
}
const inputReducer = (state = inState, action) => {
      const newState = JSON.parse(JSON.stringify(state));
      switch (action.type) {
            case Types.GET_INPUT:
                  console.log(action)
                  newState.inputValue = action.value
                  return newState
            default:
                  return state
      }

}
export default inputReducer;