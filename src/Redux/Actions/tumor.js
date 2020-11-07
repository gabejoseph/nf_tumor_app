import { CHANGE_TUMOR_DIMENSIONS, CLEANUP_TUMOR } from "./type.js";

function changeTumorDimensions() {
  return {
    type: CHANGE_TUMOR_DIMENSIONS,
  };
}

function cleanupTumor() {
  return {
    type: CLEANUP_TUMOR,
  };
}

export { changeTumorDimensions, cleanupTumor };
