import { RECEIVE_SOL_TO_USD } from "../actions/currencyActions";

const currencyReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_SOL_TO_USD:
            return Object.assign({}, parseInt(action.rate.data));
        default:
            return state;
    }
}

export default currencyReducer;

