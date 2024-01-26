const BUY_CAKE ="BUY_CAKE"
const BUY_ICECREAM= "BUY_ICECREAM"
const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.legacy_createStore
const logger =reduxLogger.createLogger()
const applyMiddleware = redux.applyMiddleware
const combineReducers = redux.combineReducers

//STORE
//ACTION 
//REDUCER
//=======================================================ACTION========================================
function buy_cake(){
    return {
        type:BUY_CAKE,
     
    }
}

function buy_icecream(){
   return{
    type:BUY_ICECREAM
   }
}



//reducer is function that tell what how the state is changed it use two informatino to do that Action (to know what to do ) the state to chage it 
//State
const initialCake = {
    numberOfCake:20
 }
 const initialIceCream = {
    numberOfIceCream:10
 }

//=======================================================Reducer========================================
 
const cakeReducer =(state=initialCake,action)=>{
    switch (action.type){
        case BUY_CAKE:return{
            ...state,
            numberOfCake:state.numberOfCake-1
        }
        default :return state
        
    }
}
const iceCreamReducer =(state = initialIceCream,action )=>{
    switch(action.type){

        case BUY_ICECREAM :return{
        ...state,

            numberOfIceCream:state.numberOfIceCream -1
        }
        default :return state
    }
}



const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
})


const store=createStore(rootReducer,applyMiddleware(logger))
const unsubscribe = store.subscribe(()=>{})

store.dispatch(buy_cake())
store.dispatch(buy_cake())
store.dispatch(buy_icecream())

unsubscribe()