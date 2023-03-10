import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from "axios"
class Shoes extends Component {
    componentDidMount() {
        const callApi = async () => {
            try {
                const respone = await axios.get('https://nike-sever-vtcoder.glitch.me/product')
                this.props.getListProduct(respone?.data)
            } catch (er) {
                console.log(er);
            }
        }
        callApi()
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state.list);
    return {
        list: state.list,
    }
}
const mapDispatchToProps = (dispatch) => {
    const getListProduct = (data) => {
        dispatch({ type: 'GET_LIST_PRODUCT', payload: data }) //action->{type:'',payload:''}
    }
    return {
        getListProduct: getListProduct
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Shoes)