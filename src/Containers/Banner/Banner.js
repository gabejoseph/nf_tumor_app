import React, { Component } from 'react'

import {connect} from 'react-redux';

import './Banner.css'

class Banner extends Component {
    render() {
        return (
            <div className='Banner'>
               Welcome User!
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Banner);