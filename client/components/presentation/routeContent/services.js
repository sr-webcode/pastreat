import React from "react";

export default function Services() {
  return (
    <section className="pastry-services">
      <div className="pastry-service-hero">
        <div className="pastry-services-caption">
          <h1>Our Services</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
            ipsam.
          </p>
        </div>
      </div>

      <div className="pastry-service-list">
        <div className="container">
          <div className="pastry-service-list-box">
            <div className="pastry-service-image">
              <img src="./images/assets/cater.jpg" alt="" />
            </div>

            <div className="pastry-service-list-caption">
              <h2>Birthdays</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequuntur, accusantium earum excepturi est et id iusto illo
                aliquid. Porro, quidem?
              </p>
            </div>
            <div className="pastry-service-image-alt">
              <img src="./images/assets/cater.jpg" alt="" />
            </div>
          </div>

          <div className="pastry-service-list-box">
            <div className="pastry-service-image">
              <img src="./images/assets/cater.jpg" alt="" />
            </div>
            <div className="pastry-service-image-alt">
              <img src="./images/assets/cater.jpg" alt="" />
            </div>
            <div className="pastry-service-list-caption">
              <h2>Weddings</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequuntur, accusantium earum excepturi est et id iusto illo
                aliquid. Porro, quidem?
              </p>
            </div>
          </div>

          <div className="pastry-service-list-box">
            <div className="pastry-service-image">
              <img src="./images/assets/cater.jpg" alt="" />
            </div>
            <div className="pastry-service-list-caption">
              <h2>Other Celebrations</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequuntur, accusantium earum excepturi est et id iusto illo
                aliquid. Porro, quidem?
              </p>
            </div>
            <div className="pastry-service-image-alt">
              <img src="./images/assets/cater.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
