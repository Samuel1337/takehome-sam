import * as accountAPIUtil from "../utils/accountAPIUtil";

export const RECEIVE_DEVNET = "RECEIVE_DEVNET";
export const RECEIVE_MAINNET = "RECEIVE_MAINNET";
export const RECEIVE_TESTNET = "RECEIVE_TESTNET";

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

export const getTopAccounts = () => dispatch => {
    getTopDevnetAccounts();
    getTopMainnetAccounts();
    getTopTestnetAccounts();
}

export const getTopDevnetAccounts = () => dispatch => (
    accountAPIUtil.fetchTopDevnetAccounts()
        .then(accounts => dispatch(receiveDevnet(accounts)))
)

export const getTopMainnetAccounts = () => dispatch => (
    accountAPIUtil.fetchTopMainnetAccounts()
        .then(accounts => dispatch(receiveMainnet(accounts)))
)

export const getTopTestnetAccounts = () => dispatch => (
    accountAPIUtil.fetchTopTestnetAccounts()
        .then(accounts => dispatch(receiveTestnet(accounts)))
)