import React, {useCallback, useState} from 'react';
import Child from './Child';

const CallbackTutorial = () => {
    const [toggle, setToggle] = useState(false);
    const [data, setData] = useState('Yo, pls sub to the channel!');

    const returnComment = useCallback((name) => {
        return `${data} ${name}`;
    }, [data]);

    return (
        <div>
            <h3>useCallback</h3>
            <Child returnComment={returnComment}/>
            <button onClick={() => {
                setToggle(!toggle);
            }}>
                Toggle
            </button>
            {toggle && <h1>toggle</h1>}
            <hr/>
        </div>
    );
};

export default CallbackTutorial;