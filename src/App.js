import { useEffect, useState } from 'react';
import AppRouter from './components/AppRouter';
import { AuthContext } from './context';

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true);
        }
        setIsLoading(false);
    }, []);

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading,
        }}>
            <AppRouter />
        </AuthContext.Provider>
    );
}

export default App;
