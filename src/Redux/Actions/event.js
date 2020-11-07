import { NEW_IMAGE_TO_STORE, CLEAR_IMAGE_STORE } from "./type.js";

function addEvent() {
  return {
    type: NEW_IMAGE_TO_STORE,
  };
}

function cleanupEvent() {
  return {
    type: CLEAR_IMAGE_STORE,
  };
}

export { addEvent, cleanupEvent };
