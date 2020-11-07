import React, { Component } from 'react'

import {connect} from 'react-redux';

import './Event.css'

class Event extends Component {
    render() {
        return (
            <div>
                Event
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

export default connect(mapStateToProps, mapDispatchToProps)(Event);