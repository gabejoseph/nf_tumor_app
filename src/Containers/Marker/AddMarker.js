import React, { Component } from 'react'

import {connect} from 'react-redux';

import './Marker.css'

class AddMarker extends Component {
    render() {
        return (
            <div>
                AddMarker
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

export default connect(mapStateToProps, mapDispatchToProps)(AddMarker);