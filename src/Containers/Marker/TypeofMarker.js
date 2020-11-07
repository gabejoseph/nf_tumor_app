import React, { Component } from 'react'

import Tumor from './Tumor';
import Freckle from './Freckle';

class TypeofMarker extends Component {
    renderView(type){
        switch(type){
            case "Tumor":
                return < Tumor />
            case "Freckle":
                return < Freckle />
            default:
                return null
        }
    }
    render() {
        return (
            <div>
                {this.renderView(this.props.detailMenuType)}
                SHow Type detail input menu for {this.props.detailMenuType}

            </div>
        )
    }
}

export default TypeofMarker;