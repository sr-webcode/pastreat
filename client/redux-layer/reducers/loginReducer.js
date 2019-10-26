const accountAccess = {
  username: "",
  password: "",
}


const loginReducer = (state = accountAccess, action) => {
  let username = null,
    password = null;
  switch (action.type) {
    case 'setAccount':
      username = action.payload.username;
      password = action.payload.password;
      return Object.assign({}, accountAccess, { username, password })

    default:
      return state;

  }
}

export default loginReducer;