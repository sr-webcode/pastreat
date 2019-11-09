const prodState = {
  prodname: "",
  prodcategory: "",
  proddesc: "",
  imageFile: "",
  previewFile: null,
  previewOriginName: null,
  prodErrors: {},
  isLoading: false,
  successAdd: {
    status: false,
    msg: ""
  },
};

const newProdReducer = (state = prodState, action) => {
  switch (action.type) {
    case "setProductRecord":
      return Object.assign({}, state, action.payload);
    case "setFieldErrors":
      return Object.assign({}, state, { prodErrors: action.payload });
    case "resetForm":
      return Object.assign({}, state, prodState);
    case "previewImage":
      const { previewFile, previewOriginName } = action.payload;
      return Object.assign({}, state, { previewFile, previewOriginName });
    case "operationLoading":
      return Object.assign({}, state, { isLoading: action.payload });
    case "itemAddNoti":
      return Object.assign({}, state, { successAdd: action.payload });
    default:
      return state;
  }
};

export default newProdReducer;
