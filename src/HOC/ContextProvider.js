import React, {createContext, useState} from 'react';

const Context = createContext(null);
const ContextProvider = ({children}) => {
    const [context, setContext] = useState('light');

    return (
        <Context.Provider value={{context, setContext}}>
            {children}
        </Context.Provider>
    );
};

export {
    Context,
    ContextProvider,
};