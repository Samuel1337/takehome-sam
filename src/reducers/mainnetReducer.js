import { RECEIVE_MAINNET } from "../actions/accountsActions";

const mainnetReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_MAINNET:
            return Object.assign({}, action.accounts);
        default:
            return state;
    }
}

export default mainnetReducer;