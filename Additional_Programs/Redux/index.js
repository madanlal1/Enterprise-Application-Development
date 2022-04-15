const redux = require("redux");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

//action
function buyCake() {

    return {
        type : BUY_CAKE,
        info : "First redux action"
    }
}

function buyIceCream() {

    return {
        type : BUY_ICECREAM
    }
}

//initialState
const initialCakeState = {
    numberOfCakes : 10
}

const initialIceCreamState = {
    numberOfIceCreams : 10
}

//reducer = (initialState, action) => newState
const cakeReducer = (state=initialCakeState, action) => {

    switch(action.type) {
        
        case BUY_CAKE :
            return {
                ...state,
                numberOfCakes : state.numberOfCakes -1
            }
        default :
            return state
    }

}

const icecreamReducer = (state=initialIceCreamState, action) => {

    switch(action.type) {
        
        case BUY_ICECREAM  :
            return {
                ...state,
                numberOfIceCreams : state.numberOfIceCreams -1
            }
        default :
            return state
    }

}

const rootReducer = combineReducers({
    cake : cakeReducer,
    icecream : icecreamReducer
})
const store = createStore(rootReducer);
console.log('initial state', store.getState())
const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()