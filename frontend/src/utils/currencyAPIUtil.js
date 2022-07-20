import axios from "axios";

export const fetchSOLtoUSD = () => (
    axios.get('/solusd')
)