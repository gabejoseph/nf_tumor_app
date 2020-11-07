import React, { Component } from 'react'

import {connect} from 'react-redux';


import './Marker.css'

class Freckle extends Component {
    render() {
        return (
            <div className='Freckle'>
                Freckle
                <form onSubmit={(e) => this.props.handleSubmitMarker(e, this.props.markerCoords) } >
                    <div className='Freckle-Count'>
                        <p><strong>Location</strong></p>
                        <label>
                            Number of Freckles
                        </label>
                        <input name='freckleCount' type='number' value={this.props.freckles} onChange={this.props.handleChangeLocation}/>
                                          
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
        freckles: state.freckle.freckleCount
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Freckle);