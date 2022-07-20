import { combineReducers } from "redux";
import accountsReducer from "./accountsReducer";
import currencyReducer from "./currencyReducer";
import errorsReducer from "./errorsReducer";

const rootReducer = combineReducers({
    accounts: accountsReducer,
    currency: currencyReducer,
    errors: errorsReducer
})
 
export default rootReducer;