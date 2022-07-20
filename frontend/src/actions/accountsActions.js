import * as accountAPIUtil from "../utils/accountAPIUtil";

export const RECEIVE_DEVNET = "RECEIVE_DEVNET";
export const RECEIVE_MAINNET = "RECEIVE_MAINNET";
export const RECEIVE_TESTNET = "RECEIVE_TESTNET";

export const RECEIVE_DEVNET_ERROR = "RECEIVE_DEVNET_ERROR";
export const RECEIVE_MAINNET_ERROR = "RECEIVE_MAINNET_ERROR";
export const RECEIVE_TESTNET_ERROR = "RECEIVE_TESTNET_ERROR";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveDevnet = accounts => ({
    type: RECEIVE_DEVNET,
    accounts
})

const receiveMainnet = accounts => ({
    type: RECEIVE_MAINNET,
    accounts
})

const receiveTestnet = accounts => ({
    type: RECEIVE_TESTNET,
    accounts
})

const receiveDevnetError = error => ({
    type: RECEIVE_DEVNET_ERROR,
    error
})

const receiveMainnetError = error => ({
    type: RECEIVE_MAINNET_ERROR,
    error
})

const receiveTestnetError = error => ({
    type: RECEIVE_TESTNET_ERROR,
    error
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})

export const getTopDevnetAccounts = () => dispatch => (
    accountAPIUtil.fetchTopDevnetAccounts()
        .then(accounts => dispatch(receiveDevnet(accounts)))
        .catch(error => dispatch(receiveDevnetError(error)))
)

export const getTopMainnetAccounts = () => dispatch => (
    accountAPIUtil.fetchTopMainnetAccounts()
        .then(accounts => dispatch(receiveMainnet(accounts)))
        .catch(error => dispatch(receiveMainnetError(error)))
)

export const getTopTestnetAccounts = () => dispatch => (
    accountAPIUtil.fetchTopTestnetAccounts()
        .then(accounts => dispatch(receiveTestnet(accounts)))
        .catch(error => dispatch(receiveTestnetError(error)))
)