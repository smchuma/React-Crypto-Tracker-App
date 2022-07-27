import React from 'react'
import {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/styles'
import axios from 'axios';
import {TrendingCoins} from '../config/api'
import { CryptoState } from '../CryptoContext';
import AliceCarousel from 'react-alice-carousel';
import {Link} from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress';



const useStyles = makeStyles(()=> ({
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
  carouselItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    textTransform: "uppercase",
    color: "white",
  }
}))

//numbers with commas function



export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


const Carousel = () => {
const [trending, setTrending] = useState([])
    const classes = useStyles();
    const {currency, symbol} = CryptoState()
    const [loading, setLoading] = useState(false)

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency))
    setTrending(data)
  }
  console.log(trending);
  useEffect(() => {
    setLoading(true)
    fetchTrendingCoins();
    setLoading(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency])

  //items aliceCarousel
   const items = trending.map((coin) => {

    //calculating percentage change in profit in past 24hrs
    //if profit is more than or equal to 0, profit is gonna be true
    let profit = coin.price_change_percentage_24h >= 0;
    return(
      <Link className={classes.carouselItem}
      to={`/coins/${coin.id}`}>
      <img src={coin.image} alt={coin.name}
       height="70" style={{marginBottom: 10}}/>
    
       <span >{coin?.symbol}</span>&nbsp;

       <span style={{marginTop: -10, color: profit > 0 ? "#10ffa3" : "red", fontWeight: "500" }} >
        {profit && "+"} {coin.price_change_percentage_24h}</span>

       <span style={{fontSize:"20px", fontWeight: "500"}}>
        {symbol} {numberWithCommas(coin.current_price.toFixed(2))}
        </span>
      </Link>
    )
   }) 

  // responsive alice carousel
  const responsive = {
    0: { items: 2 },
    512: { items: 5 },
  }

  return (
    <div className={classes.carousel}>
     {loading ? (
       <CircularProgress style={{color: "gold"}}/>
     ):  <AliceCarousel
     autoPlay
      mouseTracking
     infinite
     autoPlayInterval={1000}
     animationDuration={1500}
     disableDotsControls
     disableButtonsControls
     responsive={responsive}
     items ={items}

     />
    }
    </div>
  )
}

export default Carousel