import React, {useRef, useState} from 'react';

const RefTutorial = () => {
    const [messages, setMessages] = useState([]);
    const inputRef = useRef(null);

    const onClick = () => {
        let newMessage = inputRef.current.value;

        if (newMessage) {
            setMessages([...messages, newMessage])

            inputRef.current.value = '';
            inputRef.current.focus();
        }
    };

    return (
        <div>
            <h3>useRef</h3>
            <h1>{JSON.stringify(messages)}</h1>
            <input type="text" placeholder="Write here..." ref={inputRef}/>
            <button onClick={onClick}>
                Append
            </button>
            <hr/>
        </div>
    );
};

export default RefTutorial;