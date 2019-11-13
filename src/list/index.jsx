import * as React from 'react'
import { connect } from 'react-redux'
import * as Type from '../store/type'
// import * as Actions from '../store/actions'
// import store from '../store'
class List extends React.Component {
    render() {
        const { inputValue, getInput } = this.props
        return (
            <div>
                <p>list</p>
                <p>{inputValue}</p>
                <input defaultValue={inputValue} placeholder='请输入' onChange={getInput} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.input.inputValue
    }
}
const mapDispathToProps = (dispatch) => {
    return {
        getInput(e) {
            console.log(e.target.value)
            dispatch({
                type: Type.GET_INPUT,
                value: e.target.value
            })
        }
    }
}
export default connect(mapStateToProps, mapDispathToProps)(List)