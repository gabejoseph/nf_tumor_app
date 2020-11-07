import { NEW_IMAGE_TO_STORE, CLEAR_IMAGE_STORE } from "../Actions/type.js";

const initialState = {

}


const reducer = (oldState = initialState, action) => {
    switch(action.type){
        case NEW_IMAGE_TO_STORE:
            return {}
        case CLEAR_IMAGE_STORE:
            return initialState;
        default:
            return oldState;
    }
}

export default reducer;