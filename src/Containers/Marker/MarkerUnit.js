import React, { Component } from 'react'

import {connect} from 'react-redux';

import EditButton from '../../Components/EditButton/EditButton'
import DeleteButton from '../../Components/DeleteButton/DeleteButton'

import './Marker.css'

class MarkerUnit extends Component {
    render() {
        return (
            <div className='MarkerUnit'>
                MarkerUnit
                < EditButton />
                < DeleteButton />
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