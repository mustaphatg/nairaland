import { call, put, takeEvery } from "redux-saga/effects"
import { getHome, getSection } from "../api"
import axios from "axios"





 function* fetchHomeData(){
     try{
          var {data} = yield call(getHome)
          console.log("Home => Success")
          
          yield put({ 
               type : "SAVE_HOME_DATA", 
               payload : { data : data  }
          })
     }catch(er){
          console.log( er)
     }
}


function* fetchSectionData(){
     try{
          var {data} = yield call(getSection)
          console.log("Section => Success")
          yield put({ 
               type : "SAVE_SECTION_DATA", 
               payload : { data : data  }
          })
     }catch(er){
          console.log( er)
     }
}





function* saga(){
     yield takeEvery("FETCH_HOME_DATA" ,  fetchHomeData)
     yield takeEvery("FETCH_SECTION_DATA" ,  fetchSectionData)      
}


export default saga