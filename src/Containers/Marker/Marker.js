import React, { Component } from 'react'

import {connect} from 'react-redux';

import './Marker.css'
import MarkerList from './MarkerList';

class Marker extends Component {
    render() {
        return (
            <div className='Marker'>
                Marker 

                Show Markers

                <div className='Marker-toggleMenu'>
                    <div className='Marker-toggleMenuItem'>Show</div>
                    <div className='Marker-toggleMenuItem'>Add</div>
                </div>
                
                < MarkerList />
                
                Add Marker

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

export default connect(mapStateToProps, mapDispatchToProps)(Marker);