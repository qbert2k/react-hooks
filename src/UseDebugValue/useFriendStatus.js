import {useDebugValue, useState} from "react";

export const useFriendStatus = (friendId) => {
    const [online, setOnline] = useState(null);

    useDebugValue(online ? 'Online' : 'Offline');

    return online;
}