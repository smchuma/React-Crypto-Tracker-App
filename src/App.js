import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import CoinPage from "./pages/CoinPage";
import Homepage from "./pages/Homepage";
import { makeStyles } from "@material-ui/styles";
import Exchanges from "./pages/Exchanges";
import Footer from "./components/Footer";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#011140",
    color: "white",
    minHeight: "100vh",
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.App}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/coins/:id" element={<CoinPage />} />
        <Route exact path="/exchanges" element={<Exchanges />} />
      </Routes>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
