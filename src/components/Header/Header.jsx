import React from "react";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../../CryptoContext";
import { Link } from "react-router-dom";
import "./Header.scss";
import { MenuItem, Select } from "@material-ui/core";

const Header = () => {
  const navigate = useNavigate();
  const { currency, setCurrency } = CryptoState();
  return (
    <>
      <div className="navbar">
        <img alt="Crypto" src="assets/sam.png" onClick={() => navigate("/")} />
        <div className="links">
          <ul>
            <Link to="/">
              <h2>Home</h2>
            </Link>
            <Link to="/exchanges">
              <h2>Exchanges</h2>
            </Link>
          </ul>
        </div>
        <div className="select">
          <Select
            className="select"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"EUR"}>EUR</MenuItem>
          </Select>
        </div>
      </div>
    </>
  );
};

export default Header;
