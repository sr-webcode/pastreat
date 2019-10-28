const accountAccess = {
  username: "",
  password: "",
  currentErrors: [],
  loggingIn: false
};

const loginReducer = (state = accountAccess, action) => {
  let username = null,
    password = null;
  switch (action.type) {
    case "setAccount":
      username = action.payload.username;
      password = action.payload.password;
      return Object.assign({}, state, { username, password });
    case "setFieldErrors":
      return Object.assign({}, state, {
        currentErrors: [action.payload],
        loggingIn: false
      });
    case "loggingIn":
      return Object.assign({}, state, { loggingIn: !state.loggingIn });
    case "successLogin":
      //resets fields
      return Object.assign({}, state, accountAccess);
    default:
      return state;
  }
};

export default loginReducer;
