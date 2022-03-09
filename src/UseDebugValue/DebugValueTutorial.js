import React, {useDebugValue} from 'react';
import {useFriendStatus} from "./useFriendStatus";

const DebugValueTutorial = () => {
    const online = useFriendStatus(1);

    return (
        <div>
            <h3>useDebugValue</h3>
            {online}
            <hr/>
        </div>
    );
};

export default DebugValueTutorial;