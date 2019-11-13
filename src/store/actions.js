/*
 * @Author: 寒嫣
 * @Date: 2019-11-13 09:27:58
 * @Description: file content
 */
import * as Types from './type'
export const addCount = () => {
    return {
        type: Types.ADD_COUNT
    }
}
export const getInput = (value) => {
    console.log(value)
    return {
        type: Types.GET_INPUT,
        value
    }
}