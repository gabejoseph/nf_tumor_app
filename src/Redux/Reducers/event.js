import { CLEANUP_EVENT, CHANGE_EVENT_INFO } from "../Actions/type.js";

const initialState = {
    eventType: "1",
    eventIntensity: 1,
    eventDescription: ""
}


const reducer = (oldState = initialState, action) => {
    switch(action.type){
        case CHANGE_EVENT_INFO:
            if (action.payload.eventIntensity !== undefined) {
                action.payload.eventIntensity = parseInt(action.payload.eventIntensity);
            }
            return {...oldState, ...action.payload}
        case CLEANUP_EVENT:
            return initialState;
        default:
            return oldState;
    }
}

export default reducer;