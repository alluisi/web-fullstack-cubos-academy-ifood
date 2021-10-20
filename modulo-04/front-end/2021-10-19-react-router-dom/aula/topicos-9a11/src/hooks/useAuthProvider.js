import { useState } from "react";

export default function useProvideAuth() {
    const [token, setToken] = useState(null);

    const logar = (callback) => {
        setToken("user");
        callback();
    };

    const deslogar = (callback) => {
        setToken(null);
        callback();
    };

    return {
        token,
        logar,
        deslogar
    };
}
