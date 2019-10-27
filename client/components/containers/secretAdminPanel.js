import React, { Component } from 'react'
import axios from "axios";

class AdminPanel extends Component {
  constructor(props) {
    super(props)
    this.logoutAccount = this.logoutAccount.bind(this)
    this.addItem = this.addItem.bind(this)
  }

  componentDidMount() {
    //check if authenticated, if not throw that nigga back where he came from
    const url = process.env.NODE_ENV !== "production" ? "http://localhost:4040/adminDash" : "/adminDash";
    axios.get(url)
      .then((res) => {
        //if not authenticated yet, then sign in
        if (!res.data) return this.props.history.push('/admin');
      })
      .catch((err) => {
        console.log(err)
      })
  }

  logoutAccount() {
    const url = process.env.NODE_ENV !== "production" ? "http://localhost:4040/adminDash/logout" : "/adminDash/logout";
    axios.get(url)
      .then((res) => {
        if (res.data) return this.props.history.push('/admin')
      })
      .catch((err) => {
        console.log(err)
      }
      )
  }

  addItem(e) {
    e.preventDefault();
    e.target.reset();
    console.log(`should check for fields`)
    const url = process.env.NODE_ENV !== "production" ? "http://localhost:4040/upload" : "/upload"
    axios.post(url, { prodname: "", prodcategory: "", proddesc: "" })
      .then((res) => {
        console.log(res.data)
      }).catch((err) => {
        console.log(err.response.data)
        ///please output the validation errors!!!!
        ///please output the validation errors!!!!
        ///please output the validation errors!!!!
        ///please output the validation errors!!!!
        ///please output the validation errors!!!!
        //then take a look at applying multipart data tomorrow so you can inssert image
      })

  }

  render() {
    return (
      <section className="admin-section">
        <div className="container">
          <h2>Add New Product </h2>

          <button className="log-out-btn" onClick={this.logoutAccount}>sign out</button>

          <form onSubmit={this.addItem} className="frm-product-add"  >
            <label className="frm-product-field" htmlFor="prodname">Name:</label>
            <input className="frm-product-field" type="text" name="prodname" placeholder="type the products' name" />
            <label className="frm-product-field" htmlFor="prodcategory">Category:</label>
            <select className="frm-product-field" name="prodcategory">
              <option defaultValue></option>
              <option value="cake" >Cake</option>
              <option value="cupcake">Cupcake</option>
              <option value="cookies">Cookie</option>
              <option value="bread">Bread</option>
              <option value="others">Others</option>
            </select>
            <label className="frm-product-field" htmlFor="proddesc">Product Description:</label>
            <textarea className="frm-product-field" name="proddesc" placeholder="brief description about the product..." />
            <button className="cta-defaults">Add Record</button>
          </form>

        </div>
      </section>
    )
  }
}

export default AdminPanel
