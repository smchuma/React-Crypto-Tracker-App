import React from 'react'
import '../App.css'
import CoinTable from '../components/CoinTable'

const Exchanges = () => {
  return (
    <>
    <div className="container">
      <h1>Top Cryptocurrency Spot Exchanges</h1>
      <p>See The Cryptos Dominating The World Right Now</p>
    </div>
    <CoinTable />
    </>
  )
}

export default Exchanges