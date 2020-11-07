import { ADD_FRECKLE_COUNT, CLEANUP_FRECKLE } from "./type.js";

function addFreckleCount() {
  return {
    type: ADD_FRECKLE_COUNT,
  };
}

function cleanupFreckle() {
  return {
    type: CLEANUP_FRECKLE,
  };
}

export { addFreckleCount, cleanupFreckle };
