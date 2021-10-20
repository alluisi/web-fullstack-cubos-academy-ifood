import { useContext } from "react";
import UsersListContext from "../contexts/UsersListContext";

function useUsersList() {
    return useContext(UsersListContext);
}

export default useUsersList;