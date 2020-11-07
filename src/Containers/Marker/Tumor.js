import React, { Component } from 'react'

import {connect} from 'react-redux';


import './Marker.css'

class Tumor extends Component {
    render() {
        return (
            <div className='Tumor'>
                Tumor
                <form onSubmit={(e) => this.props.handleSubmitMarker(e, this.props.markerCoords) } >
                    <div className='Marker-Location'>
                        <p><strong>Dimensions</strong></p>
                        <label>
                            Diameter
                        </label>
                        <input name='diameter' type='number' value={this.props.diameter} onChange={this.props.handleChangeLocation}/>
                        <br />
                        <label>
                            Weight
                        </label>
                        <input name='weight' type='number' value={this.props.weight} onChange={this.props.handleChangeLocation}/>
                    </div>
                    < br />
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        diameter: state.tumor.diameter,
        weight: state.tumor.weight
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tumor);