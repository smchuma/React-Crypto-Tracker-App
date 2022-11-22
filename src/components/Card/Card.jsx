import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import AlbumIcon from '@material-ui/icons/Album';
import AssessmentIcon from '@material-ui/icons/Assessment';


const useStyles = makeStyles(() => ({
    CardFull: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        
        
    },
    card: {
        width: "300px",
        height: "200px",
        margin: "50px",
        marginTop: "40px",
        borderRadius: "30px",
        backgroundColor: "#023373",
        opacity: "0.8",
    },
      title: {
        marginTop: "20px",
        fontSize: 18,
        color: "white",
        fontFamily: "Montserrat",
        fontWeight: "600",
      },
      p: {
        marginTop: "5px",
        fontFamily: "Montserrat",
        color: "#00FFFF",
        fontSize: 13

      },
        
}))

const Cards = () => {
    const classes = useStyles();
  return (
    <div className={classes.CardFull}>
        <Card className={classes.card} variant="outlined">
        <CardContent>
        <Typography>
            <AlbumIcon style={{
                fontSize: "50px",
                color: "#00FFFF",
            }}/>
        </Typography>
        <Typography className={classes.title} variant="h5">
        Real-time price data
        </Typography>
        <Typography className={classes.p}>
        Updating 24/7 using price data from the biggest exchanges.
        </Typography>
        </CardContent>
        </Card>

        <Card className={classes.card} variant="outlined">
        <CardContent>
        <Typography>
            <AssessmentIcon style={{
                fontSize: "50px",
                color: "#00FFFF",
            }}/>
        </Typography>
        <Typography className={classes.title} variant="h5">
        Track your current cryptocurrencies
        </Typography>
        <Typography className={classes.p}>
        Thousands of coins and tokens available.
        </Typography>
        </CardContent>
        </Card>

        <Card className={classes.card} variant="outlined">
        <CardContent>
        <Typography>
            <MoneyOffIcon style={{
                fontSize: "50px",
                color: "#00FFFF",
            }}/>
        </Typography>
        <Typography className={classes.title} variant="h5">
        Free to use
        </Typography>
        <Typography className={classes.p}>
        Top notch crypto portfolio tracking at no cost.
        </Typography>
        </CardContent>
        </Card>
       
    </div>
  )
}

export default Cards