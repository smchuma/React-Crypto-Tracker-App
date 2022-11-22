import { useState, useEffect } from "react";
import axios from "axios";
import { TrendingCoins } from "../../config/api";
import { CryptoState } from "../../CryptoContext";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./Carousel.scss";

//numbers with commas function
export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Carousel = () => {
  const [trending, setTrending] = useState([]);
  const { currency, symbol } = CryptoState();
  const [loading, setLoading] = useState(false);

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    setTrending(data);
  };

  useEffect(() => {
    setLoading(true);
    fetchTrendingCoins();
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);

  const items = trending.map((coin) => {
    let profit = coin.price_change_percentage_24h >= 0;
    return (
      <Link className="carousel_item" to={`/coins/${coin.id}`}>
        <img
          src={coin.image}
          alt={coin.name}
          height="70"
          style={{ marginBottom: 10 }}
        />
        <span>{coin?.symbol}</span>&nbsp;
        <span
          style={{
            marginTop: -10,
            color: profit > 0 ? "#10ffa3" : "red",
            fontWeight: "500",
          }}
        >
          {profit && "+"} {coin.price_change_percentage_24h}
        </span>
        <span style={{ fontSize: "20px", fontWeight: "500" }}>
          {symbol} {numberWithCommas(coin.current_price.toFixed(2))}
        </span>
      </Link>
    );
  });
  const responsive = {
    0: { items: 2 },
    512: { items: 5 },
  };

  return (
    <>
      <div className="carousel">
        <AliceCarousel
          autoPlay
          mouseTracking
          infinite
          autoPlayInterval={1000}
          animationDuration={1500}
          disableDotsControls
          disableButtonsControls
          responsive={responsive}
          items={items}
        />
      </div>
    </>
  );
};

export default Carousel;
