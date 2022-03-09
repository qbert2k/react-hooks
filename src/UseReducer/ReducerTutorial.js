import React, {useReducer} from 'react';

const init = (initialCount) => {
    return {count: initialCount};
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        case 'reset':
            return init(action.payload);
        default:
            return new Error();
    }
};

const ReducerTutorial = ({initialCount}) => {
    const [state, dispatch] = useReducer(reducer, initialCount, init);

    return (
        <div>
            <h3>useReducer</h3>
            <h1>Count: {state.count}</h1>
            <button onClick={() => dispatch({type: 'reset', payload: initialCount})}>
                Reset
            </button>
            <button onClick={() => dispatch({type: 'decrement'})}>
                -
            </button>
            <button onClick={() => dispatch({type: 'increment'})}>
                +
            </button>
            <hr/>
        </div>
    );
};

export default ReducerTutorial;