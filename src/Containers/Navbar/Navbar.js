import React, { Component } from 'react'

import {connect} from 'react-redux';

import {Link} from 'react-router-dom';

import './Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <div className='Navbar'>

               <div id='MenuItem-Event' className='Navbar-CTAItem'><Link to='/events'>Log Today's Entry</Link></div>
                <ul className='Navbar-Menu'>
                  
                    <li id='MenuItem-History' className='Navbar-MenuItem'><Link to='/events'>History</Link></li>
                    <li id='MenuItem-Messages' className='Navbar-MenuItem'><Link to='/events'>Messages</Link></li>
                    <li id='MenuItem-Setting' className='Navbar-MenuItem'><Link to='/markers'>Settings</Link></li>
                    <li id='MenuItem-Export' className='Navbar-MenuItem'><Link to='/events'>Export</Link></li>
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