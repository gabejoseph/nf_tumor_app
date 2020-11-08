import { CLEANUP_EVENT, CHANGE_EVENT_INFO } from "./type.js";

function changeEventInfo(e){
  return {
    type: CHANGE_EVENT_INFO,
    payload: {[e.target.name]: e.target.value}
  }
}

function submitEvent(e){
  e.preventDefault();
  return (dispatch) => {
    fetch()
    .then()
    .then()
  }
}

function cleanupEvent() {
  return {
    type: CLEANUP_EVENT,
  };
}

export { changeEventInfo, submitEvent, cleanupEvent };
