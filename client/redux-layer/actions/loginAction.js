const setAccount = (val) => {
  return {
    type: 'setAccount',
    payload: val
  }
}

const setFieldErrors = (val) => {
  return {
    type: 'setFieldErrors',
    payload: val
  }
}

const loggingIn = () => {
  return {
    type: 'loggingIn'
  }
}


const successLogin = () => {
  return {
    type: 'successLogin'
  }
}




const Actions = {
  setAccount,
  setFieldErrors,
  loggingIn,
  successLogin
}

export default Actions;