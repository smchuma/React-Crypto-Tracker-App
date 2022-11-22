import React from "react";
import { Link } from "react-router-dom";
import { Carousel, Cards } from "../../components";
import "./Banner.scss";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="banner-content">
          <div className="titles">
            <h1>
              Crypto
              <span
                style={{
                  color: "#00FFFF",
                }}
              >
                Sam
              </span>
            </h1>
            <h2>Get the latest crypto news</h2>
            <Link to="/exchanges">
              <button>Exchanges</button>
            </Link>
          </div>
          <div className="image">
            <img
              alt="Crypto"
              src="assets/crypto2.png"
              width={450}
              height={450}
            />
          </div>
        </div>
      </div>
      <div className="caros">
        <Carousel />
      </div>
      <div>
        <Cards />
      </div>
    </>
  );
};

export default Banner;
