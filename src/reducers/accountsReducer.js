import { combineReducers } from "redux";
import devnetReducer from "./devnetReducer";
import mainnetReducer from "./mainnetReducer";
import testnetReducer from "./testnetReducer";

const accountsReducer = combineReducers({
    accounts: {
        devnet: devnetReducer,
        mainnet: mainnetReducer,
        testnet: testnetReducer
    }
})

export default accountsReducer;