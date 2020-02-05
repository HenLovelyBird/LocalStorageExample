import { createStore } from "redux";
import studentsReducer from "../reducers/index"

const initialState = {
    students: []
}

export default function configureStore(){
    return createStore(
        studentsReducer,
        initialState, 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
}