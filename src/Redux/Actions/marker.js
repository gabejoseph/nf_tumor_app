import { ADD_MARKER, CLEANUP_MARKER, CHANGE_MARKER_MENU, CHANGE_MARKER_LOCATION } from "./type.js";

function addMarker() {
  return {
    type: ADD_MARKER,
  };
}

function changeMarkerMenu(view) {
  return {
    type: CHANGE_MARKER_MENU,
    payload: view
  };
}

function changeMarkerLocation(e) {
  return {
    type: CHANGE_MARKER_LOCATION,
    payload: {[e.target.name]: e.target.value}
  };
}

function submitNewMarker(e){
  e.preventDefault();
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/markers`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify()
    })
    .then( r => r.json() )
    .then( d => {
      console.log(d);
    })
  }
 }

function cleanupMarker() {
  return {
    type: CLEANUP_MARKER,
  };
}

export { addMarker, changeMarkerMenu, changeMarkerLocation, submitNewMarker, cleanupMarker };
