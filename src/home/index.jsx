import * as React from 'react'
import { connect } from 'react-redux'
import * as Type from '../store/type'

class Home extends React.Component {
    render() {
        // console.log(this.props)
        const { count, addCount } = this.props
        return (
            <div>Home
                <p>{count}</p>
                <button onClick={addCount}>点击</button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    // console.log(state.reducer.count)
    return {
        count: state.reducer.count
    }
}
const mapDispathToProps = (dispatch) => {
    return {
        addCount() {
            dispatch({
                type: Type.ADD_COUNT
            })
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Home)