
var init = {
     home : [] ,
     section : "loading",
     drawer : false
}



var Reducer = (state = init, action) =>{
     
     var { type, payload } = action
     
     if(type == "SAVE_HOME_DATA"){
          return {...state, home : payload.data }
     }
     
     if(type == "SAVE_SECTION_DATA"){
          return {...state, section : payload.data }
     }
     
     if(type == "TOGGLE_DRAWER"){
          //if(payload == false) {
               return {...state, drawer : payload } 
          //}
          
     }
     
     
     return state
}


export default Reducer