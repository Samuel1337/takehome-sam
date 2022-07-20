import * as currencyAPIUtil from "../utils/currencyAPIUtil";

export const RECEIVE_SOL_TO_USD = "RECEIVE_SOL_TO_USD";

const receiveSOLtoUSD = rate => ({
    type: RECEIVE_SOL_TO_USD,
    rate
})

export const getSOLtoUSD = () => dispatch => (
    currencyAPIUtil.fetchSOLtoUSD()
        .then(rate => dispatch(receiveSOLtoUSD(rate)))
        .catch(error => dispatch(receiveSOLtoUSD(error)))
)