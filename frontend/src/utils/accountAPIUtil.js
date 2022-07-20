import axios from "axios";

export const fetchTopDevnetAccounts = () => {
    console.log("Devnet request sent to Solana API. Waiting...")
    return ( axios.get("/devnet"))
}

export const fetchTopMainnetAccounts = () => {
    console.log("Mainnet request sent to Solana API. Waiting...")
    return (axios.get("/mainnet"))
}

export const fetchTopTestnetAccounts = () => {
    console.log("Testnet request sent to Solana API. Waiting...")
    return (axios.get("/testnet"))
}
