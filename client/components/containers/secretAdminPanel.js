import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Actions from "../../redux-layer/actions/index";
import ImagePreview from '../presentation/layout/pastries/imagePreview';



class AdminPanel extends Component {
  constructor(props) {
    super(props);
    this.logoutAccount = this.logoutAccount.bind(this);
    this.addItem = this.addItem.bind(this);
    this.setProduct = this.setProduct.bind(this);
    this.imgRef = React.createRef();
    this.imageLookup = this.imageLookup.bind(this);

  }

  componentDidMount() {
    const url =
      process.env.NODE_ENV !== "production"
        ? "http://localhost:4040/adminDash"
        : "/adminDash";
    axios
      .get(url)
      .then(res => {
        //if not authenticated yet, then sign in
        if (!res.data) return this.props.history.push("/admin");
      })
      .catch(err => {
        console.log(err);
      });
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
    this.props.setFieldErrors(sumData);
  }

  addItem(e) {

    this.props.tickLoading(true);

    const {
      prodname,
      prodcategory,
      proddesc,
      previewFile,
      previewOriginName
    } = this.props.product;

    e.preventDefault();
    e.target.reset();
    const url =
      process.env.NODE_ENV !== "production"
        ? "http://localhost:4040/upload"
        : "/upload";

    axios
      .post(url, { prodname, prodcategory, proddesc, previewFile, previewOriginName })
      .then(res => {
        this.props.resetform();
        this.props.tickLoading(false);
        this.props.itemNoti({
          status: true,
          msg: res.data
        })
      })
      .catch(err => {
        this.props.tickLoading(false);
        const errCollections = err.response.data.hasErrors.errors;
        if (errCollections) return this.mapErrors(errCollections);
        console.log(err);
      });
  }

  logoutAccount() {
    const url =
      process.env.NODE_ENV !== "production"
        ? "http://localhost:4040/adminDash/logout"
        : "/adminDash/logout";
    axios
      .get(url)
      .then(res => {
        if (res.data) return this.props.history.push("/admin");

      })
      .catch(err => {
        console.log(err);
      });
  }

  imageLookup() {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(this.imgRef.current.files[0]);
    fileReader.onloadend = ev => {
      const strBase64 = ev.target.result;
      this.props.previewImage({ previewFile: strBase64, previewOriginName: this.imgRef.current.files[0].name });
    };
  }

  setProduct(e) {
    const target = e.target.name;
    const targetval = e.currentTarget.value;
    const currentData = Object.assign({}, this.props.product, {
      [`${target}`]: targetval
    });
    if (target.toLowerCase() === "imagefile") this.imageLookup();
    this.props.setRecord(currentData);
  }

  render() {
    const {
      prodname,
      prodcategory,
      proddesc,
      imageFile,
      previewFile,
      prodErrors,
      isLoading,
      successAdd
    } = this.props.product;


    return (

      <section className="admin-section">

        {successAdd.status && <span className="notifier">{successAdd.msg}</span>}

        <div className="container">
          {isLoading && <div className="process-loader">
            <span className="general-loader" />
          </div>}

          <h2>Add New Product </h2>
          <button className="log-out-btn" onClick={this.logoutAccount}>
            sign out
          </button>
          <form
            onSubmit={this.addItem}
            className="frm-product-add"
            encType="multipart/form-data"
          >
            <label className="frm-product-field label" htmlFor="prodname">
              Name:
            </label>
            <input
              className="frm-product-field"
              type="text"
              name="prodname"
              placeholder="type the products' name"
              onChange={this.setProduct}
              value={prodname}
            />
            {prodErrors.prodname && (
              <p className="err-text">
                {prodErrors.prodname}
              </p>
            )}

            <ImagePreview
              setProduct={this.setProduct}
              imgRef={this.imgRef}
              previewOriginName={prodErrors.previewOriginName}
              previewFile={previewFile}
            />

            <label className="frm-product-field label" htmlFor="prodcategory">
              Category:
            </label>
            <select
              className="frm-product-field"
              name="prodcategory"
              onChange={this.setProduct}
              value={prodcategory}
            >
              <option defaultValue></option>
              <option value="cakes">Cake</option>
              <option value="cupcakes">Cupcake</option>
              <option value="bread">Bread</option>
              <option value="others">Others</option>
            </select>
            {prodErrors.prodcategory && (
              <p className="err-text">
                {prodErrors.prodcategory}
              </p>
            )}
            <label className="frm-product-field label" htmlFor="proddesc">
              Product Description:
            </label>
            <textarea
              className="frm-product-field"
              name="proddesc"
              placeholder="brief description about the product..."
              onChange={this.setProduct}
              value={proddesc}
            />
            {prodErrors.proddesc && (
              <p className="err-text">
                {prodErrors.proddesc}
              </p>
            )}
            <button className="cta-defaults">Add Record</button>
          </form>
        </div>

      </section>
    );
  }
}

const mapStateProps = state => {
  return {
    product: state.newProduct
  };
};

const mapDispatchProps = dispatch =>
  bindActionCreators(
    {
      setFieldErrors: Actions.setFieldErrors,
      setRecord: Actions.setProductRecord,
      resetform: Actions.resetProductRecord,
      previewImage: Actions.previewImage,
      tickLoading: Actions.tickLoading,
      itemNoti: Actions.itemAddNoti
    },
    dispatch
  );

export default connect(
  mapStateProps,
  mapDispatchProps
)(AdminPanel);
