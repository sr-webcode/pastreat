const prodState = {
  prodname: "",
  prodcategory: "",
  proddesc: "",
  imageFile: "",
  previewFile: null,
  prodErrors: {}
};

const newProdReducer = (state = prodState, action) => {
  switch (action.type) {
    case "setProductRecord":
      return Object.assign({}, state, action.payload);
    case "setRecords":
      return state;
    case "setFieldErrors":
      return Object.assign({}, state, { prodErrors: action.payload });
    case "resetForm":
      return Object.assign({}, state, prodState);
    default:
      return state;
  }
};

export default newProdReducer;
