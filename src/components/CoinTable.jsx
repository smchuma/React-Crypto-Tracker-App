import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CryptoState } from '../CryptoContext';
import {CoinList} from '../config/api';
import { Container, createTheme, LinearProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, ThemeProvider } from '@material-ui/core'
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/styles'
import { Pagination } from '@material-ui/lab';


export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}



const CoinTable = () => {
    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(false)
    const { currency, symbol} = CryptoState();
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)

    const fetchCoins = async () => {
        setLoading(true)
        const { data } = await axios.get(CoinList(currency));
        setCoins(data)
        setLoading(false) 
    };
    console.log(coins);

    useEffect(() => {
        fetchCoins();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currency]);

    const darkTheme = createTheme({
        palette: {
          primary: {
            main: "#fff"
          },
          type: "dark"
        }
      })

      const handleSearch = () => {
        return coins.filter((coin) => (
          coin.name.toLowerCase().includes(search.toLowerCase()) || 
          coin.symbol.toLowerCase().includes(search.toLowerCase())
        ))
      }
    const useStyle = makeStyles({
        row: {
          background: "#011140",
          cursor: "pointer",
          "&:hover": {
            background: "#010A26",
          },
          fontFamily: "Montserrat",
        },
        pagination: {
          "& .MuiPaginationItem-root": {
            color: "#00ffff"
          }
        }
    })

    const classes = useStyle();
    const navigate = useNavigate();

  return (
    <ThemeProvider theme={darkTheme}>
        <Container style={{textAlign: "center" }}>
            <TextField label="search for a cryptocurrency" variant='outlined' value={search}
            style={{
                width: "100%",
                marginBottom: 20,
                color: "white",
                marginTop: 20,
            }} onChange={(e) => setSearch(e.target.value)} />
            <TableContainer>
              {
                loading? (
                  <LinearProgress style={{background: "gold"}}/>
                ): <Table>
                    <TableHead style={{background: "#00ffff"}}>
                    <TableRow>
                      {["Coin", "Price", "24h Change", "Market Cap", "Market Cap Rank", "Total Volume"].map((head) => (
                        <TableCell style={{color: "black", fontWeight:"700", fontFamily:"  Montserrat", }}
                           key={head} align={head === "coin" ? "" : "right"}>
                          {head}
                        </TableCell>
                      ))}
                    </TableRow>
                    </TableHead>
                    <TableBody>
                      {handleSearch().slice((page-1)*10, (page -1 ) * 10 + 10)
                      .map((row) => {
                        const profit = row.price_change_percentage_24h > 0;

                        return (
                          <TableRow onClick={() => navigate(`/coins/${row.id}`)}
                          className={classes.row} >
                            <TableCell component= 'th' scope = "row"
                            style={{
                              display: "flex",
                              gap:  15,
                            }}>
                              <img src={row?.image}
                              alt={row?.name}
                              height="50"
                              style={{marginBottom: 10}}
                              />
                              <div style={{ display: "flex", flexDirection: "column"}}>
                                <span style={{textTransform: "uppercase",
                                fontSize: 22,}}
                                >{row?.symbol}</span>
                                <span style={{color: "darkgrey"}}>{row?.name}</span>
                              </div>
                            </TableCell>
                            <TableCell align='right'>
                              {symbol}{" "}{numberWithCommas(row?.current_price.toFixed(2))}
                            </TableCell>
                            
                            <TableCell
                            align='right'
                            style={{
                              color: profit > 0 ? "rgb(14,203,129)" : "red",
                              fontWeight: "500",
                            }}>
                              {profit && " + " }
                              { row.price_change_percentage_24h.toFixed(2)}
                            </TableCell>
                            <TableCell align='right'>
                              {symbol}{" "}
                            {numberWithCommas(row?.market_cap.toString().slice(0, -6))}M
                            </TableCell>
                            <TableCell align='right'>
                            {row.market_cap_rank}
                            </TableCell>
                            <TableCell align='right'>
                            {symbol} {" "} 
                            {numberWithCommas(row.total_volume.toString().slice(0, -6))}B
                            </TableCell>
                          </TableRow>
                        )
                      }) }
                    </TableBody>
                </Table>
              }
            </TableContainer>

            <Pagination
            style={{
              padding: 20,
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
            classes={{ul: classes.pagination}}
            count={(handleSearch()?.length/10).toFixed(0)}
            onChange={(_, value) => {
              setPage(value)
              window.scroll(0,300)
            }}/>
        </Container>
    </ThemeProvider>
  )
}

export default CoinTable