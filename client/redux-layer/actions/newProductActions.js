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

module.exports = {
  setProductRecord,
  resetForm
};
