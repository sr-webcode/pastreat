import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-column">
          <h2>Pastreats</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos autem
            illum molestiae animi officia voluptatibus soluta iusto eveniet fuga
            earum.
          </p>
        </div>

        <div className="footer-column">
          <h2>Subscribe to us:</h2>
          <p>Stay up to date with our latest brand/product offerings.</p>
          <form
            className="frmSubscribe"
            action="/subscribers"
            method="POST"
            encType="UTF-8"
          >
            <input
              type="text"
              name="emailSubscribe"
              placeholder="enter email ..."
            />
            <button />
          </form>
        </div>
      </div>

      <div className="copyright">SRwebcode&copy;</div>
    </footer>
  );
};

export default Footer;
