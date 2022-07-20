import { clearErrors, getTopDevnetAccounts, getTopMainnetAccounts, getTopTestnetAccounts } from "../../actions/accountsActions";
import { connect } from "react-redux"
import Refresher from "./refresher"

const mapStateToProps = state => ({
    devnet: Object.values(state.accounts.devnet),
    mainnet: Object.values(state.accounts.mainnet),
    testnet: Object.values(state.accounts.testnet),
    errors: Object.values(state.errors)
});

const mapDispatchToProps = dispatch => ({
    clearErrors: () => dispatch(clearErrors()),
    getTopDevnetAccounts: () => dispatch(getTopDevnetAccounts()),
    getTopMainnetAccounts: () => dispatch(getTopMainnetAccounts()),
    getTopTestnetAccounts: () => dispatch(getTopTestnetAccounts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Refresher);