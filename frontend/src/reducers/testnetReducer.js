import { RECEIVE_TESTNET } from "../actions/accountsActions";

const testnetReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_TESTNET:
            return Object.assign({}, action.accounts);
        default:
            return state;
    }
}

export default testnetReducer;