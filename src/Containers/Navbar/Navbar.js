import React, { Component } from 'react'

import {connect} from 'react-redux';

import {Link} from 'react-router-dom';
import SimpleMenu from '../Menu/SimpleMenu';

import './Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <div className='Navbar'>
                <ul className='Navbar-Menu'>
                    <li className='Navbar-MenuItem'><Link to='/'>Home</Link></li>
                    <li className='Navbar-MenuItem'><Link to='/events'>Events</Link></li>
                    <li className='Navbar-MenuItem'><Link to='/markers'>Markers</Link></li>
                    <li className='Navbar-MenuItem'><SimpleMenu /></li>
                </ul>
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