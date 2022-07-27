import { AppBar, Avatar, Container, createTheme, MenuItem, Select, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import icon from '../images/sam.png';
import {makeStyles, ThemeProvider} from '@material-ui/styles'
import { useNavigate } from "react-router-dom";
import { CryptoState } from '../CryptoContext';
import { Link } from 'react-router-dom';




const useStyles = makeStyles(() =>({
  
  full: {
    marginTop: 20,
  },
  
  title: {
     flex: 1,
     fontFamily: 'Montserrat',
     fontWeight: 'bold',
     cursor: 'pointer',
     marginLeft: 20,
     fontSize: 22,

  },
  logo: {
    width: 60,
    height: 60,
    marginLeft: 20,
  },
  navlinks: {
    marginRight:300,
    display: "flex",
    fontFamily: 'Montserrat',
     fontWeight: 'bold',
     cursor: 'pointer',
     marginLeft: 20,
     fontSize: 20,
    
    
  },
  link: {
    textDecoration: "none",
    color: "#00FFFF",
    fontSize: "20px",
    marginRight: 50,
    "&:hover": {
      color: "white",
      borderBottom: "1px solid white",
    },
  },
}));

const Header = () => {

  const classes = useStyles();
  const navigate = useNavigate();
  const {currency, setCurrency} = CryptoState();

  

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff"
      },
      type: "dark"
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
   <AppBar color='transparent' position='static'>
    <Container className={classes.full}>
      <Toolbar margin='10px'>
      <Avatar alt="Crypto" src={icon} className={classes.logo} onClick={()=> navigate("/")} />
        <Typography onClick={()=> navigate("/")}
         className={classes.title}>Crypto<span style={{
        color: "#00FFFF"  
         }}>Sam</span></Typography>
        
        <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/exchanges" className={classes.link}>
              Exchanges
            </Link>
          </div>

        <Select variant='outlined' style={{
          width: 100,
          height: 40,
          marginRight: 55,
        }}value={currency}
        onChange={(e)=> setCurrency(e.target.value)}>
          <MenuItem value={"USD"}>USD</MenuItem>
          <MenuItem value={"EUR"}>EUR</MenuItem>
        </Select>
      </Toolbar>
    </Container>
   </AppBar>
   </ThemeProvider>
  )
}

export default Header