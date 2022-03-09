import React, {createContext, useState} from 'react';
import Login from './Login';
import User from './User';

export const AppContext = createContext(null);

const ContextTutorial = () => {
    const [username, setUsername] = useState('');

    return (
        <div>
            <h3>useContext</h3>
            <AppContext.Provider value={{username, setUsername}}>
                <Login/><User/>
            </AppContext.Provider>
            <hr/>
        </div>
    );
};

export default ContextTutorial;