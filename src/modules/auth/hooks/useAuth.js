import { storeToRefs } from "pinia";
import { auth } from "../store/auth";

const useAuth = () => {

    const storeAuth = storeToRefs(auth());

    return {
        ...storeAuth,
        checkJWToken: auth().checkJWToken,
        onLogin: auth().onLogin,
    }

};

export default useAuth;