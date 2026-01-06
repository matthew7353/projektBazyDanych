import { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
    const [token, setToken] = useState(null);

    const handleLoginSuccess = (receivedToken) => {
        setToken(receivedToken);
    };

    const handleLogout = () => {
        setToken(null);
    };

    return (
        <>
            {!token ? (
                <Login onLogin={handleLoginSuccess} />
            ) : (
                <Dashboard onLogout={handleLogout} />
            )}
        </>
    );
}

export default App;