import {ADD_NUMBER, SUB_NUMBER} from "./constants";

const initialState = {
    counter: 20,
}

function reducer(state = initialState,action){
    console.log(state,action)
    switch (action.type) {
        case ADD_NUMBER:
            return {...state,counter: state.counter + action.num}
        case SUB_NUMBER:
            return {...state,counter: state.counter - action.num}
        default:
            return state

    }
}

export default reducer