import { useState } from "react";

function useUserProvider() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    return {
        age,
        setAge,
        name,
        setName
    };
}

export default useUserProvider;