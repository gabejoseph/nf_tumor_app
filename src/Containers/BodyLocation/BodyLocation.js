import React, { Component } from 'react'

import {connect} from 'react-redux';

import { changeBodyLocation, cleanupLocation } from '../../Redux/Actions/bodyLocation'


import './BodyLocation.css'

class AddMarker extends Component {
    componentWillUnmount(){
        this.props.cleanup();
    }
    
    render() {
        return (
    
            <div className='Marker-Location'>
                <p><strong>Location</strong></p>
                <label> Section </label>
                <input name='section' type='number' value={this.props.section} onChange={this.props.handleChangeLocation}/>
                <br />
                <label> Sub Section </label>
                <input name='subSection' type='number' value={this.props.subSection} onChange={this.props.handleChangeLocation}/>
            </div>
                  
        )
    }
}

const mapStateToProps = (state) => {
    return {
        section: state.bodyLocation.section,
        subSection: state.bodyLocation.subSection,
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChangeLocation: (e) => {dispatch(changeBodyLocation(e))},
        cleanup: () => {dispatch(cleanupLocation())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMarker);