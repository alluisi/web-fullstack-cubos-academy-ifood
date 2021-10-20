import AuthContext from "./index";

import useAuthProvider from "../../hooks/useAuthProvider";

export default function AuthProvider(props) {
    const auth = useAuthProvider();

    return (
        <AuthContext.Provider value={auth}>
            {props.children}
        </AuthContext.Provider>
    );
}