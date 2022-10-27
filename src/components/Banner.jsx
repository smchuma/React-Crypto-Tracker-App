import { makeStyles } from '@material-ui/styles'
import { Container, Typography, Button } from '@material-ui/core'
import React from 'react'
import Carousel from './Carousel'
import cryptoImage from '../images/crypto2.png'
import { Link } from 'react-router-dom'
import Cards from './Card'



const useStyles = makeStyles(()=> ({
    banner: {
        backgroundImage: "url(./bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        
    },
    bannerContent: {
        height: 450,
        display: "flex",
        // flexDirection: "column",
        justifyContent: "space-around",
        padding: "25",
    },
    sub: {
        textAlign: "center",
        color: "#ff008c",
        marginTop: "10px",
        fontSize: "15px",
    },
    white: {
        color: "white",
    },
    tagline: {
        display: "flex",
        height: "40%",
        flexDirection: "row",
        justifyContent: "space-between",
        textAlign: "center",   
    },
    taglineText: {
        display: 'flex',
        flexDirection: "column",
        marginTop: "150px",
       
    },
    image: {
        marginLeft: "170px",
    },
    btn: {
        
        color: "white",
        width: "120px",
        borderRadius: "10px",
        padding: "10px",
        border: "1px solid white",
        marginLeft: "200px",
        marginTop: "20px",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
            backgroundColor: "#00FFFF",
            color: "black",
            transform: "scale(1.1)",  
        },   
    },
    btn1: {
        color: "white",
        "&:hover": {
            color: "black",
        }
    },

    caros: {
        padding: "10px",
      backgroundColor: "#01185e", 
    },
    contain: {
        maxWidth: "100%",
        margin: "auto",
    },

    cardi: {
        width: "100",
        height: "40vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

}))

const Banner = () => {
    const classes = useStyles();
  return (
   <div>
     <div className={classes.banner}>
        <Container className={classes.bannerContent}>
            <div className={classes.tagline}>
                <div className={classes.taglineText}>
                <Typography variant='h1'style={{
                    fontWeight: "bold",
                    color: "white",
                    textShadow: "2px 2px 4px #000000",
                    marginBottom: "15",
                    fontFamily: "Montserrat",
                    textAlign: "center",
                }}>
                    Crypto<span style={{
                    color: "#00FFFF"  
                    }}>Sam</span>
                </Typography>
                <Typography className={classes.sub}>
                   <span className={classes.white}> Get Into The World Of Crypto.</span> <br/>
                </Typography>
                <Button className={classes.btn}>
                <Link to="/exchanges" className={classes.btn1}>
                Exchanges
                </Link>
                </Button>
                </div>
                <div className={classes.image}>
                <img src={cryptoImage} alt='aa' width={450} height={450} />
                </div>
            </div>
        </Container>
    </div>
    <div className={classes.caros}>
    <Container className={classes.contain}>
            <Carousel />
        </Container>
    </div>
    <div className={classes.cardi}>
         <Cards />
    </div>
   </div>
  )
}

export default Banner