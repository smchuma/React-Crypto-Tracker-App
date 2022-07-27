import { makeStyles } from '@material-ui/styles'
import React from 'react'

const SelectButton = ({children, selected, onClick}) => {

    const useStyle = makeStyles(()=>({
        selectButton: {
            border: '1px solid #00ffff',
            borderRadius: 5,
            padding: 10,
            paddingLeft: 20,
            paddingRight: 20,
            fontFamily: 'Montserrat',
            cursor: 'pointer',
            backgroundColor: selected ? "#00ffff" : "",
            color: selected ? "#011140" : "",
            fontWeight: selected ? 700 : 500,
            "&:hover": {
                backgroundColor: "#00ffff",
                color: "black",
            },
            width: "22%",
        }
    }))
    const classes = useStyle();
  return (
    <span onClick={onClick}
    className={classes.selectButton}>
      {children}
    </span>
  )
}

export default SelectButton
