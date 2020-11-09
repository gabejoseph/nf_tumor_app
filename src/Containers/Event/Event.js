import React, { Component } from 'react'

import {connect} from 'react-redux';

import {changeEventInfo, submitEvent, cleanupEvent} from '../../Redux/Actions/event'
import BodyLocation from '../BodyLocation/BodyLocation';

import './Event.css'

class Event extends Component {
    
    componentWillUnmount(){
        this.props.cleanup();
    }
    
    render() {
        return (
            <div className='Event'>
                Event
                < br />

                <form className='Event-Form' id='event-submit-form' onSubmit={(e)=>this.props.handleSubmitEventType(e)}>
               
                <div> 

                    <label>
                        Event Type
                    </label>
                    <select name="eventType" onChange={(e)=> this.props.handleChangeEventInfo(e)}>
                        <option value="1">Wellness</option>
                        <option value="2">Pain</option>
                        <option value="3">Numbness</option>
                        <option value="4">New Mark</option>
                    </select>

                </div>
                <br />

                < BodyLocation />

                < br />
                <div>  
                    <label> Intensity </label>
                    <select name="eventIntensity" onChange={(e)=> this.props.handleChangeEventInfo(e)}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                    </select>
                </div>
                < br />
                <div className='Event-Description'> 
                    <label> Describe your event: </label>
                    < br />
                    <textarea cols='50' rows='5' name='eventDescription' value={this.props.description} onChange={(e) => this.props.handleChangeEventInfo(e)} />
                </div>

                < button type='submit' form='event-submit-form' value='submit'>Submit</button>

                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        description: state.event.eventDescription
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChangeEventInfo: (e) => {dispatch(changeEventInfo(e))},
        handleSubmitEventType: (e) => {dispatch(submitEvent(e))},
        cleanup: () => {dispatch(cleanupEvent())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Event);