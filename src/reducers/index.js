
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
          return {...state, drawer : !state.drawer }
     }
     
     
     return state
}


export default Reducer