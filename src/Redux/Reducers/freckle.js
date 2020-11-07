import { ADD_FRECKLE_COUNT, CLEANUP_FRECKLE } from "../Actions/type.js";

const initialState = {
    freckleCount: 0
}


const reducer = (oldState = initialState, action) => {
    switch(action.type){
        case ADD_FRECKLE_COUNT:
            return {}
        case CLEANUP_FRECKLE:
            return initialState;
        default:
            return oldState;
    }
}

export default reducer;