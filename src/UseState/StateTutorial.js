import React, {useState} from 'react';

const StateTutorial = () => {
    const [inputValue, setInputValue] = useState('Javier');

    let onChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
    }

    return (
        <div>
            <h3>useState</h3>
            <p>Input value: {inputValue}</p>
            <input placeholder="enter something..." onChange={onChange}/>
            <hr/>
        </div>
    );
}

export default StateTutorial;