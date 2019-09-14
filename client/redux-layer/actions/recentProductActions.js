const setRecentProducts = (val) => {
  return {
    type: "setRecentProducts",
    payload: val,
  }
}

const actions = {
  setRecentProducts
}

export default actions;

