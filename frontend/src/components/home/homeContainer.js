import { clearErrors, getTopDevnetAccounts, getTopMainnetAccounts, getTopTestnetAccounts } from "../../actions/accountsActions";
import { connect } from "react-redux"
import Home from "./home"
import { getSOLtoUSD } from "../../actions/currencyActions";

const mapStateToProps = (state) => ({
    devnet: Object.values(state.accounts.devnet),
    mainnet: Object.values(state.accounts.mainnet),
    testnet: Object.values(state.accounts.testnet),
    currency: state.currency.rate,
    errors: Object.values(state.errors)
})

const mapDispatchToProps = dispatch => ({
    clearErrors: () => dispatch(clearErrors()),
    getSOLtoUSD: () => dispatch(getSOLtoUSD()),
    getTopDevnetAccounts: () => dispatch(getTopDevnetAccounts()),
    getTopMainnetAccounts: () => dispatch(getTopMainnetAccounts()),
    getTopTestnetAccounts: () => dispatch(getTopTestnetAccounts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);