import axios from "axios";

export const fetchTopDevnetAccounts = () => {
    console.log("Devnet request sent to Solana API. Waiting...")
    return (axios.get("/api/devnet"))
}

export const fetchTopMainnetAccounts = () => {
    console.log("Mainnet request sent to Solana API. Waiting...")
    return (
        axios.get("/api/mainnet")
        .catch(() => res.status(404).send({nodevnet: "Can't connect with the Mainnet cluster at the moment."}))
    )
}

export const fetchTopTestnetAccounts = () => {
    console.log("Testnet request sent to Solana API. Waiting...")
    return (axios.get("/api/testnet"))
}
