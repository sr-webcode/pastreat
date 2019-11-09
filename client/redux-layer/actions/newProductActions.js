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


const operationLoading = val => {
  return {
    type: "operationLoading",
    payload: val
  };
};

const itemAddNoti = val => {
  return {
    type: "itemAddNoti",
    payload: val
  };
};

module.exports = {
  setProductRecord,
  resetForm,
  previewImage,
  operationLoading,
  itemAddNoti
};
