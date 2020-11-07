import { ADD_MARKER, CLEANUP_MARKER, CHANGE_MARKER_MENU, CHANGE_MARKER_LOCATION } from "../Actions/type.js";

const initialState = {
    viewState: 1,
    section: 1,
    subSection: 1
}


const reducer = (oldState = initialState, action) => {
    switch(action.type){
        case CHANGE_MARKER_MENU:
            return {...oldState, viewState: action.payload}
        case CHANGE_MARKER_LOCATION:
            // validate section and type cast to String > Int
            if (action.payload.section !== undefined) {
                if (parseInt(action.payload.section) < 1) {
                action.payload.section = 1;
                } else {
                    action.payload.section = parseInt(action.payload.section);
                }
            }
            // vaidate subsection and type cast to String > Int
            if (action.payload.subSection !== undefined) {
                if ( parseInt(action.payload.subSection) < 1) {
                    action.payload.subSection = 1;
                } else {
                    action.payload.subSection = parseInt(action.payload.subSection);
                }
            }
            return {...oldState, ...action.payload}
        case ADD_MARKER:
            return {}
        case CLEANUP_MARKER:
            return initialState;
        default:
            return oldState;
    }
}

export default reducer;