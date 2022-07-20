import { RECEIVE_SOL_TO_USD } from "../actions/currencyActions";

const currencyReducer = (state = { usd: 43.87 }, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_SOL_TO_USD:
            debugger
            return Object.assign({}, { usd: action.rate.data });
        default:
            return state;
    }
}

export default currencyReducer;

