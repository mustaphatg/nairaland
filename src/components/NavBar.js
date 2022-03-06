import React from "react"
import  AppBar from "@material-ui/core/AppBar"
import  Toolbar from "@material-ui/core/Toolbar"
import  IconButton from "@material-ui/core/IconButton"
import  MenuIcon from "@material-ui/icons/Menu"
import  Typography from "@material-ui/core/Typography"
import {makeStyles } from "@material-ui/core/styles"
import  NavDrawer from "./NavDrawer"
import { useDispatch }  from "react-redux"

const useStyles = makeStyles(function(theme) {
     return {
          appBar: {
               backgroundColor: "var(--appbar_color)",
               zIndex: theme.zIndex.drawer + 1
          },

          IconButton: {
               marginRight: "20px"
          }
     }
})



const NavBar = props => {

     const classes = useStyles()
     const dispatch = useDispatch()
     
     function toggleDrawer(){
         dispatch({ type : "TOGGLE_DRAWER",  payload : true })
    }

     return (
          <>
          <AppBar position="fixed" className={ classes.appBar  }>
                    <Toolbar>
                         <IconButton onClick={ () => toggleDrawer() } className={ classes.IconButton } style={ { color: "white" }}>
                              <MenuIcon color="inherit" />
                         </IconButton>
                         <Typography variant="h6">
                              Nairaland 2.0
                         </Typography>
                    </Toolbar>
              </AppBar>

          <NavDrawer /> 
          </>
     )
}



export default NavBar