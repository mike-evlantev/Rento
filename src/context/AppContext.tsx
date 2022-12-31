import * as React from 'react';
import { AppContextType } from '../types/AppContextType';

interface Props {
    children: React.ReactNode;
}

export const AppContext = React.createContext<AppContextType | null>(null);

export const AppContextProvider: React.FC<Props> = ({ children }) => {
    const [isAuthorized, setIsAuthorized] = React.useState(false);
    const authorize = (isAuthorized: boolean) => {
        console.log("authorize()", isAuthorized);
        setIsAuthorized(isAuthorized);
    }

    return (
        <AppContext.Provider value={{ isAuthorized, authorize }}>
            {children}
        </AppContext.Provider>
    );
}