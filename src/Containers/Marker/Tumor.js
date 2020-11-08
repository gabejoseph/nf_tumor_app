import React, { Component } from 'react'

import {connect} from 'react-redux';

import { changeTumorDimensions, cleanupTumor } from '../../Redux/Actions/tumor'

import './Marker.css'

class Tumor extends Component {

    componentWillUnmount() {
        this.props.cleanup();
    }

    render() {
        return (
            <div className='Tumor'>
                Tumor
                
                <div className='Marker-Location'>
                    <p><strong>Dimensions</strong></p>
                    <label>
                        Diameter (mm)
                    </label>
                    <input name='diameter' type='number' value={this.props.diameter} onChange={(e) => this.props.handleChangeDimensions(e)} />
                    <br />
                    <label>
                        Weight (g)
                    </label>
                    <input name='weight' type='number' value={this.props.weight} onChange={(e) => this.props.handleChangeDimensions(e)} />
                </div>
                < br />

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
        handleChangeDimensions: (e) => {dispatch(changeTumorDimensions(e))},
        cleanup: () => {dispatch(cleanupTumor())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tumor);