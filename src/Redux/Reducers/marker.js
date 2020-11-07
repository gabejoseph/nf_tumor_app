import { ADD_MARKER, CLEANUP_MARKER, TOGGLE_MARKER_MENU } from "../Actions/type.js";

const initialState = {
    showingList: true
}


const reducer = (oldState = initialState, action) => {
    switch(action.type){
        case TOGGLE_MARKER_MENU:
            return {...oldState, showingList: !oldState.showingList}
        case ADD_MARKER:
            return {}
        case CLEANUP_MARKER:
            return initialState;
        default:
            return oldState;
    }
}

export default reducer;