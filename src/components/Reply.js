import React from "react"
import   "./reply.css"


const Reply = props => {
    
    const { user, time, body } = props.reply
    
    return (
         
          <div className="reply__container">
               <div className="reply">
                       <div className="reply__header"> 
                              <div> <img src="/1.jpg" /> </div>            
                              <div className="info">
                                   <p> {user} </p>
                                   <small> { time } </small>
                              </div>
                         </div>
                         <div className="reply__body">
                               <p dangerouslySetInnerHTML= {{ __html: body }}  />          
                         </div>
               </div>
               <div className="bar"> </div>
          </div>
    )
    
}



export default Reply