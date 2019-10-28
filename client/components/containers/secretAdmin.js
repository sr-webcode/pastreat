import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Actions from "../../redux-layer/actions/index";
import axios from "axios";

class AdminPanel extends Component {
  componentDidMount() {
    const url =
      process.env.NODE_ENV !== "production"
        ? "http://localhost:4040/adminAccess"
        : "/adminAccess";
    axios
      .get(url)
      .then(res => {
        //already authenticated , push it back to admin panel
        if (res.data) return this.props.history.push("/adminPanel");
      })
      .catch(err => {
        console.log(err);
      });
  }

  constructor(props) {
    super(props);
    this.accountLogin = this.accountLogin.bind(this);
    this.setCredentials = this.setCredentials.bind(this);
  }

  mapErrors(errors) {
    const sumData = errors
      .map(each => {
        return {
          name: each.param,
          err: each.msg
        };
      })
      .reduce((accum, next) => {
        if (!accum.hasOwnProperty(next.name)) {
          accum[next.name] = next.err;
        }
        return accum;
      }, {});
    //set err reducer
    this.props.setFieldErrors(sumData);
  }

  accountLogin() {
    //call logging in state   //disable the forms
    this.props.loggingIn();
    const { username, password } = this.props.users;
    const url =
      process.env.NODE_ENV !== "production"
        ? "http://localhost:4040/adminAccess"
        : "/adminAccess";
    axios
      .post(
        url,
        {
          username,
          password
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(res => {
        //sucess login then redirect
        this.props.successLogin();
        this.props.history.push("/adminPanel");
      })
      .catch(err => {
        if (!err.response.data instanceof Object) return console.log(err);

        let errors = err.response.data.hasErrors.errors;
        if (errors.length > 0) return this.mapErrors(errors);
        console.log(err);
      });
  }

  setCredentials(e) {
    const target = e.target.name;
    const targetval = e.currentTarget.value;
    const currentData = Object.assign({}, this.props.users, {
      [`${target}`]: targetval
    });
    this.props.setAccount(currentData);
  }

  render() {
    const usernameErr =
      !this.props.users.loggingIn &&
      this.props.users.currentErrors.length > 0 &&
      this.props.users.currentErrors[0].username;
    const passErr =
      !this.props.users.loggingIn &&
      this.props.users.currentErrors.length > 0 &&
      this.props.users.currentErrors[0].password;

    return (
      <div className="admin-client">
        <div className="loginForm">
          <span className="user-icon-wrap">
            <FontAwesomeIcon icon="user" />
          </span>
          <h2>Admin Login</h2>
          <input
            type="username"
            name="username"
            className="sign-field"
            value={this.props.users.username}
            placeholder="username"
            onChange={this.setCredentials}
            disabled={this.props.users.loggingIn ? true : false}
            autoComplete="off"
          />
          {usernameErr && <p className="err-text">{usernameErr}</p>}
          <input
            type="password"
            name="password"
            className="sign-field"
            value={this.props.users.password}
            placeholder="password"
            onChange={this.setCredentials}
            disabled={this.props.users.loggingIn ? true : false}
          />
          {passErr && <p className="err-text">{passErr}</p>}
          <button
            className="cta-defaults"
            onClick={this.accountLogin}
            disabled={this.props.users.loggingIn ? true : false}
          >
            {this.props.users.loggingIn ? (
              <span className="general-loader" />
            ) : (
              "Proceed"
            )}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateProps = state => {
  return {
    users: state.login
  };
};

const mapDispatchProps = dispatch =>
  bindActionCreators(
    {
      setFieldErrors: Actions.setFieldErrors,
      setAccount: Actions.setUsersAccount,
      loggingIn: Actions.loggingIn,
      successLogin: Actions.successLogin
    },
    dispatch
  );

export default connect(
  mapStateProps,
  mapDispatchProps
)(AdminPanel);
