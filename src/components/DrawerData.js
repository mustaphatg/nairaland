import React from "react"
import { useSelector  } from "react-redux"
import CircularProgress from "@material-ui/core/CircularProgress"
import  "./drawer-link.css"
import  { Link } from "react-router-dom"
import ListItemText from "@material-ui/core/ListItemText"
import ListItem from "@material-ui/core/ListItem"
import List from "@material-ui/core/List"
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Accordion from '@material-ui/core/Accordion';
import { makeStyles } from "@material-ui/core/styles"


function Load(){
     return (
          <div className="load_container">
               <CircularProgress  className="circle" />
          </div>
     )
}


const useStyles = makeStyles(theme => ({
     root : {
          width : "100%",
          color : "green"
     }
}))


function NavLink(props){
     
     const classes = useStyles()
     
     var { href, text} = props.data 
     var id = props.id
     
     if(id === 0) {
          return null
     }
     
     return (
          <ListItem 
               button
               component= {Link}
               to = { "/category"+href }
               classes = {{ root : classes.root }}
          >
               <ListItemText primary= { text } />
          </ListItem>
     )
}



const DrawerData = props => {
     
     const section = useSelector(state => state.section )
    
    
    if(section === "loading"){
         return <Load />
    }
    
    return (
         <>
         
               <Accordion >
                    <AccordionSummary className="acc_header" expandIcon={<ExpandMoreIcon />}>
                         <Typography>Nairaland General</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                         <List>
                              { section.general.map((el, i) => <NavLink key= { i } id= { i } data={el} />  )  }             
                         </List>
                    </AccordionDetails>
               </Accordion>
               
               <Accordion expanded = { true } >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                         <Typography>Entertainment</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                         <List>
                              { section.entertainment.map((el, i) => <NavLink id= { i } key= { i } data={el} />  )  }             
                         </List>
                    </AccordionDetails>
               </Accordion>
               
               <Accordion >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                         <Typography>Science/Technology</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                         <List>
                              { section.science.map((el, i) => <NavLink key= { i } id= {i} data={el} />  )  }             
                         </List>
                    </AccordionDetails>
               </Accordion>               
          
         
         </>

    )
    
    
}



export default DrawerData