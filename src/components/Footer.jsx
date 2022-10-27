import React from 'react'
import { Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PinterestIcon from '@material-ui/icons/Pinterest';
import RedditIcon from '@material-ui/icons/Reddit';
import YouTubeIcon from '@material-ui/icons/YouTube';


const useStyle = makeStyles(() =>({
  title: {
    fontFamily: "Montserrat",
    marginBottom: "20px",
    textAlign: "center",
    
  },

  span: {
    color: "#00ffff",
  },
  
  
}));


const Footer = () => {
  const classes = useStyle();
  return (
    <div>
      <Container>
      <Typography variant='h3'className={classes.title}>Crypto<span className={classes.span}>Sam</span></Typography>
      <div>
      <InstagramIcon style={{fontSize: "40px", marginRight: "20px", color: "#00ffff"}} />
      <FacebookIcon style={{fontSize: "40px", marginRight: "20px", color: "#00ffff"}} />
      <TwitterIcon style={{fontSize: "40px", marginRight: "20px", color: "#00ffff"}} />
      <LinkedInIcon style={{fontSize: "40px", marginRight: "20px", color: "#00ffff"}} />
      <PinterestIcon style={{fontSize: "40px", marginRight: "20px", color: "#00ffff"}} />
      <RedditIcon style={{fontSize: "40px", marginRight: "20px", color: "#00ffff"}} />
      <YouTubeIcon style={{fontSize: "40px", marginRight: "20px", color: "#00ffff"}} />
      </div>
      </Container>
    </div>
  )
}

export default Footer
