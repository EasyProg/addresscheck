/**
 * Created by Михаил on 17.03.2018.
 */
const initialState = {
    validity:''
};
export default function validityReducer(state=initialState,action=null) {
    switch(action.type) {
        case 'CHECK_ADDRESS':return {...state,validity:action.validity};
        case 'VALIDITY_EMPTY':return {...state,validity:action.validity};
        default: return state;
    }
}