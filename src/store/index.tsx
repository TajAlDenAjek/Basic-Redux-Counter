import {createStore} from 'redux'

export type stateType={
    counter:number,
    toggle?:boolean
}
type PayLoadType={
    number:number
}
type actionType={
    type:string,
    payload:PayLoadType
}

const initState:stateType={
    counter:0,
    toggle:true
}


const counterReducer=(state:stateType=initState,action:actionType):stateType=>{

    switch(action.type){
        case "increase":
            return {...state,counter:state.counter+action.payload.number}
        case "decrease":
            return {...state,counter:state.counter-action.payload.number}
        case "flip":
            return {...state,toggle:!state.toggle}
        // default:
        //     throw new Error('NO such action type')
    }
    return state
}

const store=createStore(counterReducer)

export type StoreType= typeof store

export default store;
