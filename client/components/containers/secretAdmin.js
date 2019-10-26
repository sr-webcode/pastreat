import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Actions from '../../redux-layer/actions/index'
import axios from 'axios'



class AdminPanel extends Component {

  constructor(props) {
    super(props)
    this.accountLogin = this.accountLogin.bind(this)
    this.setCredentials = this.setCredentials.bind(this)
  }


  mapErrors() {

  }

  accountLogin() {
    const { username, password } = this.props.users;
    const url = process.env.NODE_ENV !== "production" ? "http://localhost:4040/adminAccess" : "/adminAccess";
    axios.post(url,
      {
        username, password
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then((res) => {
      console.log(res.data)
    }).catch((err) => {
      const errors = err.response.data.hasErrors.errors;

      //WORK ON HEREEEE PLEASESSS. PASSWORD VALIDATION , THEN SETUP PASSPORT TOMORROW!
      console.log(errors)
    })
  }

  setCredentials(e) {
    const target = e.target.name;
    const targetval = e.currentTarget.value;
    const currentData = Object.assign({}, this.props.users, { [`${target}`]: targetval });
    this.props.setAccount(currentData);
  }


  render() {
    return (
      <div className="admin-client">
        <div className="loginForm">
          <span className="user-icon-wrap">
            <FontAwesomeIcon icon="user" />
          </span>
          <h2>Admin Login</h2>
          <input type="username" name="username" className="sign-field" placeholder="username" onChange={this.setCredentials} />
          <input type="password" name="password" className="sign-field" placeholder="password" onChange={this.setCredentials} />
          <button className="cta-defaults" onClick={this.accountLogin}>Sign In</button>
        </div>
      </div>
    )
  }
}

const mapStateProps = (state) => {
  return {
    users: state.login
  }
}

const mapDispatchProps = (dispatch) => bindActionCreators({

  setAccount: Actions.setUsersAccount
}, dispatch)


export default connect(mapStateProps, mapDispatchProps)(AdminPanel)

