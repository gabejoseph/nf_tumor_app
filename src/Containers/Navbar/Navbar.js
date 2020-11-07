import React, { Component } from 'react'

import {connect} from 'react-redux';

import './Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <div>
                Navbar
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

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);