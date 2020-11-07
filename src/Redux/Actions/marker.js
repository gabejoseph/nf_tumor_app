import { ADD_MARKER, CLEANUP_MARKER, TOGGLE_MARKER_MENU } from "./type.js";

function addMarker() {
  return {
    type: ADD_MARKER,
  };
}

function toggleMarkerMenu() {
  return {
    type: TOGGLE_MARKER_MENU,
  };
}

function cleanupMarker() {
  return {
    type: CLEANUP_MARKER,
  };
}

export { addMarker, toggleMarkerMenu, cleanupMarker };
