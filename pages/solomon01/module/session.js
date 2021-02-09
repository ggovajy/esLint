const SETSESSION ="session/SETSSEION";

export const setSession=(session)=>({
    type:SETSESSION,
    payload:session

})


const initState={
   session:{
       id:"unknown",
       res:false
   }
}


function sessionReducer(state=initState,action){

    switch(action.type){
        case SETSESSION:
            {
                state= {
                    ...state,
                    session:action.payload
                }
                return state;
            }

        default:
            {
                return state
            }
    }

}

export default sessionReducer
