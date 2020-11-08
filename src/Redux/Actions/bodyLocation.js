import {  CLEANUP_LOCATION, CHANGE_BODY_LOCATION } from "./type.js";

function changeBodyLocation(e) {
  return {
    type: CHANGE_BODY_LOCATION,
    payload: {[e.target.name]: e.target.value}
  };
}


function cleanupLocation() {
  return {
    type: CLEANUP_LOCATION,
  };
}

export { changeBodyLocation, cleanupLocation };
