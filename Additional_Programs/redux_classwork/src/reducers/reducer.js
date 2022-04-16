import ADD_ONE from '../actions/ADD_ONE';
import MINUS_ONE from '../actions/MINUS_ONE';

const addInitialState = {

        count : 0
}

const reducer = (state = addInitialState, action) => {

    switch(action.type) {
        
        case ADD_ONE :
            return {
                ...state,
                count:state.count+1
            }
        
        case MINUS_ONE :
            return {
                ...state,
                count:state.count-1
            }
        default :
            return state;
    }

     
}
export default reducer;