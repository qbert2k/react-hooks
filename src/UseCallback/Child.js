import React, {useEffect} from 'react';

const Child = ({returnComment}) => {
    useEffect(() => {
        console.log('useCallBack Child Function was called');
    }, [returnComment]);

    return (
        <div>
            {returnComment('Javier')}
        </div>
    );
};

export default Child;