import { RECEIVE_DEVNET } from "../actions/accountsActions";

const devnetReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_DEVNET:
            return Object.assign({}, action.accounts);
        default:
            return state;
    }
}

export default devnetReducer;