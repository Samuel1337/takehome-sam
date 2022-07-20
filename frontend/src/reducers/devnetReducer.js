import { RECEIVE_DEVNET } from "../actions/accountsActions";

const devnetReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch(action.type) {
        case RECEIVE_DEVNET:
            console.log(action)
            return Object.assign({}, action.accounts.data);
        default:
            return state;
    }
}

export default devnetReducer;

