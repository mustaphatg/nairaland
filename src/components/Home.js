import React  from "react"
import Toolbar from "@material-ui/core/Toolbar"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import List  from "@material-ui/core/List"
import ListItem  from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import { makeStyles } from "@material-ui/core/styles"
import { formatUrl } from "./functions"
import HomeLoader from "./HomeLoader"      


const useStyles = makeStyles(theme => ({

     listItem : {
          borderBottom : "var(--topic_border_width) solid var(--green_border)",
          "color" : "var(--home_link_color)"
     }
     

}))


const NairaLink = props =>{
     
     const { href, text } = props.data
     const classes = useStyles()
     
     var url = encodeURIComponent(formatUrl(href))
     
     return (
          <ListItem 
               button
               divider
               component={Link} 
               to={"/topic/"+url} 
               className= { classes.listItem}
          >
               <ListItemText color="primary" primary={ text } />
          </ListItem>
     )
}




const Home = props =>{
     
     const home = useSelector(state => state.home)
     
     
     if(home.length === 0){
          return <HomeLoader />
     }
     
     return (
          <>
               <Toolbar />
               
               <div className="content">
                    <List>
                          { home.map((el, i) => <NairaLink key={i} data={el} />  ) }           
                    </List>
               </div>
          </>
     )
}


export default Home