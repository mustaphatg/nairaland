import React from "react"
import Drawer from "@material-ui/core/Drawer"
import Toolbar from "@material-ui/core/Toolbar"
import Hidden from "@material-ui/core/Hidden"
import { makeStyles  }  from "@material-ui/core/styles"
import DrawerData  from "./DrawerData"
import  { useSelector, useDispatch } from "react-redux"

const useStyles = makeStyles(theme => ({
     phoneDrawer : {
          width : "70%"
     },
     
     toolBar : {
          backgroundColor : "#1B5E20"
     },
     
     desktopPaper : {
          width : "240px"
     }
}))




const NavDrawer = props => {
    
    const classes = useStyles()
    const dispatch = useDispatch()
    
    
    function toggleDrawer(){
         dispatch({ type : "TOGGLE_DRAWER" })
    }
    
     var drawer = useSelector(state => state.drawer)
     
    return (
         <>
          
              <Hidden smDown >
                    <Drawer 
                         variant="permanent"
                         anchor = "left"
                         classes = {{ paper : classes.desktopPaper }}
                    >
                         <Toolbar />
                         
                         <DrawerData />
                         
                    </Drawer >
              </Hidden >
              
              <Hidden mdUp >
                    <Drawer 
                         
                         anchor ="left"
                         open= { drawer }
                         onClose = { () => toggleDrawer() }
                         classes = {{ paper : classes.phoneDrawer }}        
                    >
                         
                         <DrawerData />
                         
                    </Drawer>
              </Hidden>
         
         </>
    )
    
}



export default NavDrawer