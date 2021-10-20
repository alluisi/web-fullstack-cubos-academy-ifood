import { useContext } from "react";
import UserContext from "../contexts/UserContexts";

function useUser() {
    return useContext(UserContext);
}

export default useUser;