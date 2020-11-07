import React, { Component } from 'react'

import {connect} from 'react-redux';

import { changeMarkerLocation, submitNewMarker } from '../../Redux/Actions/marker'


import './Marker.css'

class AddMarker extends Component {
    render() {
        return (
            <div>
                Add a new Marker
                <form onSubmit={(e) => this.props.handleSubmitMarker(e, this.props.markerCoords) } >
                    <div className='Marker-Location'>
                        <p>Location</p>
                        <label>
                            Section
                        </label>
                        <input name='section' type='number' value={this.props.section} onChange={this.props.handleChangeLocation}/>
                        <br />
                        <label>
                            Sub Section
                        </label>
                        <input name='subSection' type='number' value={this.props.subSection} onChange={this.props.handleChangeLocation}/>
                    </div>
                    < br />
                    <input type='submit' />
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        markerCoords: {section: state.marker.section, sub_section: state.marker.subSection},
        section: state.marker.section,
        subSection: state.marker.subSection
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChangeLocation: (e) => {dispatch(changeMarkerLocation(e))},
        handleSubmitMarker: (e, coords) => {dispatch(submitNewMarker(e, coords))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMarker);