import axios from "axios";

export const fetchSOLtoUSD = () => (
    axios.get('/api/solusd')
)