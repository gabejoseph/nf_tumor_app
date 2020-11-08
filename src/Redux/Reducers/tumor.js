import { CHANGE_TUMOR_DIMENSIONS, CLEANUP_TUMOR } from "../Actions/type.js";

const initialState = {
    diameter: 0,
    weight: 0
}


const reducer = (oldState = initialState, action) => {
    switch(action.type){
        case CHANGE_TUMOR_DIMENSIONS:
            // validate section and type cast to String > Int
            if (action.payload.diameter !== undefined) {
                if (parseInt(action.payload.diameter) < 0) {
                action.payload.diameter = 0;
                } else {
                    action.payload.diameter = parseInt(action.payload.diameter);
                }
            }
            // vaidate subsection and type cast to String > Int
            if (action.payload.weight !== undefined) {
                if ( parseInt(action.payload.weight) < 0) {
                    action.payload.weight = 0;
                } else {
                    action.payload.weight = parseInt(action.payload.weight);
                }
            }
            return {...oldState, ...action.payload}
        case CLEANUP_TUMOR:
            return initialState;
        default:
            return oldState;
    }
}

export default reducer;