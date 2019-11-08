const setProductRecord = val => {
  return {
    type: "setProductRecord",
    payload: val
  };
};

const resetForm = () => {
  return {
    type: "resetForm"
  };
};

const previewImage = val => {
  return {
    type: "previewImage",
    payload: val
  };
};

module.exports = {
  setProductRecord,
  resetForm,
  previewImage
};
