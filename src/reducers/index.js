export default function (state ={}, action){
    switch(action.type) {
        case "ADD_STUDENT":
            return {
                ...state,
                students: [...state.students, action.payload]
            }
        default:
            return state
    }
}