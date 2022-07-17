import { connect } from "react-redux"
import { getTopAccounts, getTopDevnetAccounts, getTopMainnetAccounts, getTopTestnetAccounts } from "../../actions/accountsActions";
import Home from "./home"

const mapStateToProps = ({ accounts }) => ({
    devnet: accounts.devnet,
    mainnet: accounts.mainnet,
    testnet: accounts.testnet
})

const mapDispatchToProps = dispatch => ({
    getTopDevnetAccounts: () => dispatch(getTopDevnetAccounts()),
    getTopMainnetAccounts: () => dispatch(getTopMainnetAccounts()),
    getTopTestnetAccounts: () => dispatch(getTopTestnetAccounts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);