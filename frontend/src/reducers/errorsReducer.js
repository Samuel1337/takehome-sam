import { CLEAR_ERRORS, RECEIVE_DEVNET_ERROR, RECEIVE_MAINNET_ERROR, RECEIVE_TESTNET_ERROR } from "../actions/accountsActions";

const errorsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_DEVNET_ERROR:
            return Object.assign({}, state, action.error.response.data);
        case RECEIVE_MAINNET_ERROR:
            return Object.assign({}, state, action.error.response.data);
        case RECEIVE_TESTNET_ERROR:
            return Object.assign({}, state, action.error.response.data);
        case CLEAR_ERRORS:
            return Object.assign({});
        default:
            return state;
    }
}

export default errorsReducer;