import React, { Component } from 'react'

import {connect} from 'react-redux';

import { changeMarkerLocation, changeMarkerType, submitNewMarker } from '../../Redux/Actions/marker'

import TypeofMarker from './TypeofMarker';

import './Marker.css'

class AddMarker extends Component {
    render() {
        return (
            <div>
                Add a new Marker
                <form onSubmit={(e) => this.props.handleSubmitMarker(e, this.props.markerCoords) } >
                    <div className='Marker-Location'>
                        <p><strong>Location</strong></p>
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
                    <div className='Marker-Type'>
                        <p><strong>Mark</strong></p>
                        <label>
                            Type:
                        </label>
                        <select name='markerType' value={this.props.type} onChange={this.props.handleChangeType}>
                            <option value='Tumor'>Tumor</option>
                            <option value='Freckle'>Freckle</option>
                        </select>
                        <select name='hasDetails' onChange={this.props.handleChangeType} >
                            <option value={false}>No</option>
                            <option value={true}>Yes</option>

                        </select>
                    </div>
                        { this.props.hasDetails ? < TypeofMarker detailMenuType={this.props.type} /> : null }
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
        subSection: state.marker.subSection,
        markerData: {},
        type: state.marker.markerType,
        hasDetails: state.marker.hasDetails,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChangeLocation: (e) => {dispatch(changeMarkerLocation(e))},
        handleChangeType: (e) => {dispatch(changeMarkerType(e))},
        handleSubmitMarker: (e, coords) => {dispatch(submitNewMarker(e, coords))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMarker);