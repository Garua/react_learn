import {ADD_NUMBER, CHANGE_BANNERS, CHANGE_RECOMMENDS, SUB_NUMBER} from "./constants";

const initialState = {
    counter: 10,
    banners:[],
    recommends:[]
}

function reducer(state = initialState,action){
    switch (action.type) {
        case ADD_NUMBER:
            return {...state,counter: state.counter + action.num}
        case SUB_NUMBER:
            return {...state,counter: state.counter - action.num}
        case CHANGE_BANNERS:
            return {...state,banners:action.banners}
        case CHANGE_RECOMMENDS:
            return {...state,recommends: action.recommends}
        default:
            return state

    }
}

export default reducer