import React from "react"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import Toolbar from "@material-ui/core/Toolbar"
import  "./topic.css"

const header = {
     padding : "5px",
     textAlign : "center",
     color : "green"
}

const paper = {
     background : "blue"
}

const TopicHeader = props => {
    
    const topic = props.topic
 
    return (
          <>
               <Paper style= {{ paper }} >
                    <Typography style= { header } variant="h5" >
                         { topic.title }
                    </Typography>
               </Paper>
               
               
               <div className="topic__container" >
                    <div className="topic">
                         <div className="topic__header"> 
                              <div> <img src="/1.jpg" /> </div>            
                              <div className="info">
                                   <p> {  topic.creator} </p>
                                   <small> 6am </small>
                              </div>
                         </div>
                         
                         <div className="topic__body">
                               <p dangerouslySetInnerHTML= {{ __html: topic.body }}  />          
                         </div>
                    </div>
                    
                    <div className="bar"> </div>
               </div>
          </>
    )
    
    
}



export default TopicHeader