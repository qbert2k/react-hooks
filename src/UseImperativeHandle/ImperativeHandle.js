import React, {useRef} from 'react';
import Button from './Button';

const ImperativeHandle = () => {
    const buttonRef = useRef(null);

    return (
        <div>
            <h3>useImperativeHandle</h3>
            <button onClick={() => {
                buttonRef.current.alterToggle();
            }}>
                Button from parent
            </button>
            <Button ref={buttonRef}/>
            <hr/>
        </div>
    );
};

export default ImperativeHandle;