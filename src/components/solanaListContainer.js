import { connect } from "react-redux"
import { getTopAccounts } from "../actions/accountsActions";
import SolanaList from "./solanaList"

const mapStateToProps = state => ({
    devnet: state.accounts.devnet,
    mainnet: state.accounts.mainnet,
    testnet: state.accounts.testnet
})

const mapDispatchToProps = dispatch => ({
    getTopAccounts: () => dispatch(getTopAccounts)
})

export default connect(mapStateToProps, mapDispatchToProps)(SolanaList);