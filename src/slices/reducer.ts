import {authReducer} from "./auth";
import {userReducer} from "./user";


const reducer = {
    auth: authReducer,
    user: userReducer
};
export default reducer;
