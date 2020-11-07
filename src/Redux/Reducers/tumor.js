import { CHANGE_TUMOR_DIMENSIONS, CLEANUP_TUMOR } from "../Actions/type.js";

const initialState = {
    diameter: 0,
    weight: 0
}


const reducer = (oldState = initialState, action) => {
    switch(action.type){
        case CHANGE_TUMOR_DIMENSIONS:
            return {...oldState, ...action.payload}
        case CLEANUP_TUMOR:
            return initialState;
        default:
            return oldState;
    }
}

export default reducer;