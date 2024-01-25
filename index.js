const BUY_CAKE ="BUY_CAKE"
const redux = require('redux')
const createStore = redux.legacy_createStore

//STORE
//ACTION 
//REDUCER

//=======================================================ACTION========================================
function buy_cake(){
    return {
        type:BUY_CAKE,
        info:"First redux action"
    }
}
//=======================================================ACTION========================================


//reducer is function that tell what how the state is changed it use two informatino to do that Action (to know what to do ) the state to chage it 
//State
const initialState = {
    numberOfCake:20
 }

//=======================================================Reducer========================================
 
const reducer =(state=initialState,action)=>{
    switch (action.type){
        case BUY_CAKE:return{
            ...state,
            numberOfCake:state.numberOfCake-1
        }
    }
}
const store=createStore(reducer)
const unsubscribe = store.subscribe(()=>console.log('updated stae',store.getState()))
store.dispatch(buy_cake())
store.dispatch(buy_cake())
store.dispatch(buy_cake())
unsubscribe()