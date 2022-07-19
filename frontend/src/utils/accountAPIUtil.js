import axios from "axios";

export const fetchTopDevnetAccounts = () => (
    axios.get("/devnet")
)

export const fetchTopMainnetAccounts = () => (
    axios.get("/mainnet")
)

export const fetchTopTestnetAccounts = () => (
    axios.get("/testnet")
)
