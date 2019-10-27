import React, { Component } from 'react'
import axios from "axios";


class AdminPanel extends Component {
  componentDidMount() {
    //check if authenticated, if not throw that nigga back where he came from
    const url = process.env.NODE_ENV !== "production" ? "http://localhost:4040/adminDash" : "/adminDash";
    axios.get(url)
      .then((res) => {
        console.log(res)
        if (!res.data) return this.props.history.push('/admin');
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <h2>the secret admin panel... woooooh!</h2>
      </div>
    )
  }
}

export default AdminPanel
