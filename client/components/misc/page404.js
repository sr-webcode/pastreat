import React from 'react'
import { Link } from 'react-router-dom'

export default function Page404() {
  return (
    <section className="page-404">
      <div className="container">
        <div className="page-404-content">
          <div className="sad-cupcake">
            <img src="./images/assets/sadCupcake.png" alt="sadCupcake" />
          </div>
          <h2>404 CUPCAKE NOT FOUND!</h2>
          <p>the page you are looking for does not exist</p>
          <Link to="/" className="cta-defaults" >Back to Homepage</Link>
        </div>
      </div>
    </section>
  )
}
