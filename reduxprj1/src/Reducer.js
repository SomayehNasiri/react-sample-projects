export default function Reducer(state={counter:0}, action){
    if(action){
       if( action.type ==='Increament'){
        return{...state,counter:state.counter+1}
       }else if( action.type ==='Decreament'){
        return{...state,counter:state.counter-1}
       }
    }
}