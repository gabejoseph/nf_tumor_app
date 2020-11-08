import { CHANGE_TUMOR_DIMENSIONS, CLEANUP_TUMOR } from "./type.js";

function changeTumorDimensions(e) {
  return {
    type: CHANGE_TUMOR_DIMENSIONS,
    payload: {[e.target.name]: e.target.value}
  };
}

function cleanupTumor() {
  return {
    type: CLEANUP_TUMOR,
  };
}

export { changeTumorDimensions, cleanupTumor };
