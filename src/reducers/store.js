import { createStore, applyMiddleware} from "redux"
import Reducer from "./index"
import Saga from "../sagas/saga"
import createSagaMidd from "redux-saga"


const sagaMidd = createSagaMidd()

var store = createStore(Reducer, applyMiddleware(sagaMidd) )                


sagaMidd.run(Saga)

export default store