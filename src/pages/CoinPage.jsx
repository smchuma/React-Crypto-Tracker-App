import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { SingleCoin } from '../config/api';
import { CryptoState } from '../CryptoContext';
import { makeStyles } from '@material-ui/styles'
import CoinInfo from '../components/CoinInfo';
import { Typography } from '@material-ui/core';
import ReactHtmlParser from 'react-html-parser';
import {LinearProgress, } from '@material-ui/core'


export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


const CoinPage = () => {

  const {id} = useParams();
  const [coin, setCoin] = useState();
  const {currency, symbol} = CryptoState();

  const fetchCoin = async() => {
    const {data} = await axios.get(SingleCoin(id))
    setCoin(data)
  }
  console.log(coin);
  useEffect(
    () => {
      fetchCoin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  const useStyle = makeStyles((theme)=>({
    container: {
      display: 'flex',
      // [theme.breakpoints.down('md')]: {
      //   flexDirection: 'column',
      //   alignItems: 'center',
      // },
    },
    sidebar: {
      width: '30%',
      // [theme.breakpoints.down('md')]: {
      //   width: '100%',
      // },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: 25,
      borderRight: "2px solid #023373",
    },
    heading: {
      fontWeight: 'bold',
      marginBottom: 20,
      fontFamily: "Montserrat",
    },
    description: {
      width: "100%",
      fontFamily: "Montserrat",
      padding: 25,
      paddingBottom: 15,
      textAlign: "justify",
      paddingTop: 0,
    },
    marketData: {
      alignSelf: "start",
      padding: 25,
      paddingTop: 10,
      width: "100%",

      //responsiveness
      // [theme.breakpoints.down('md')]: {
      //   display: "flex",
      //   flexDirection: "space-around",
      // },
      // [theme.breakpoints.up('sm')]: {
      //   flexDirection: "column",
      //   alignItems: "center",
      // },
      // [theme.breakpoints.up('xs')]: {
      //   alignItems: "start",
      // },
      
    }
  }))

  const classes = useStyle();

  if(!coin) return <LinearProgress style={{backgroundColor: 'gold'}}/>


  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
       <img 
       src={coin?.image.large}
       alt = {coin?.name}
       height = "200"
       style={{marginBottom: 20}}
        />
        <Typography variant='h3' className={classes.heading}>
          {coin?.name}
        </Typography>
        <Typography variant = "subtitle1" className={classes.description}>
          {ReactHtmlParser(coin?.description.en.split('.')[0])}.
        </Typography>

        <div className={classes.marketData}>
    <span style={{display: 'flex'}}>
      <Typography variant='h5' className={classes.heading}>Rank: </Typography>
      &nbsp;&nbsp;
    <Typography variant = "h5"
    style={{fontFamily: 'Montserrat', fontWeight: "700"}}
    >{coin?.market_cap_rank}</Typography>
    </span>

    {/* This is for the current price */}

    <span style={{display: 'flex'}}>
      <Typography variant='h6' className={classes.heading}>Current Price: </Typography>
      &nbsp;&nbsp;
    <Typography variant = "h5"
    style={{fontFamily: 'Montserrat',}}
    > {symbol}{" "}
      {numberWithCommas(
      coin?.market_data.current_price[currency.toLowerCase()]
    ) }</Typography>
    </span>

      {/* This is for the market cap  */}

    <span style={{display: 'flex'}}>
      <Typography variant='h6' className={classes.heading}>Market Cap: </Typography>
      &nbsp;&nbsp;
    <Typography variant = "h5"
    style={{fontFamily: 'Montserrat', }}
    >
      {symbol}{" "}
      {numberWithCommas(
      coin?.market_data.market_cap[currency.toLowerCase()]
      .toString().slice(0, -6)
    )}M
    </Typography>
    </span>
    {/* Genesis Date */}
    <span style={{display: 'flex'}}>
      <Typography variant='h6' className={classes.heading}>Launch Date: </Typography>
      &nbsp;&nbsp;
    <Typography variant = "h5"
    style={{fontFamily: 'Montserrat', }}
    >
      {coin?.genesis_date ? coin?.genesis_date : "N/A"}
    
    </Typography>
    </span>
        </div>
      </div>
      {/* {chart} */}
      <CoinInfo coin = {coin} />
    </div>
  )
}

export default CoinPage