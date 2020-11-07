import React, { Component } from 'react'

import {connect} from 'react-redux';

import './Marker.css'

class MarkerUnit extends Component {
    render() {
        return (
            <div>
                MarkerUnit
                Edit
                Delete
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

export default connect(mapStateToProps, mapDispatchToProps)(MarkerUnit);