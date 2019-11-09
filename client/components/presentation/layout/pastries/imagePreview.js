import React from 'react'


const ImagePreview = ({ setProduct, imgRef, previewOriginName, previewFile }) => {
  return (<div className="image-preview-group">
    <label className="frm-product-field label" htmlFor="imageFile">
      Product Image:
</label>
    <input
      type="file"
      name="imageFile"
      className="imageAgents"
      ref={imgRef}
      onChange={setProduct}
    />
    {
      previewFile && (
        <img className="imageAgents output" src={previewFile} />
      )
    }
    {
      previewOriginName && (
        <p className="err-text">
          {previewOriginName}
        </p>
      )
    }
  </div>)

}


export default ImagePreview