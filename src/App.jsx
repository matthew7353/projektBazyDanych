import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

// 1. Komponent "Strażnik" (ProtectedRoute)
// Sprawdza czy użytkownik jest zalogowany. Jeśli nie - odsyła do /login
const ProtectedRoute = ({ isAllowed, redirectPath = '/login' }) => {
    if (!isAllowed) {
        return <Navigate to={redirectPath} replace />;
    }
    return <Outlet />; // Outlet to miejsce, gdzie renderują się podstrony (np. Dashboard)
};

function App() {
    const [user, setUser] = useState(null); // Tutaj trzymamy info o sesji { token, role }

    const handleLoginSuccess = (token) => {
        setUser({ token, role: 'admin' });
    };

    const handleLogout = () => {
        setUser(null);
    };

    return (
        <BrowserRouter>
            <Routes>
                {/* TRASA PUBLICZNA */}
                <Route
                    path="/login"
                    element={
                        !user ? (
                            <Login onLogin={handleLoginSuccess} />
                        ) : (
                            <Navigate to="/admin" replace />
                        )
                    }
                />

                {/* TRASY CHRONIONE DLA ADMINA */}
                <Route element={<ProtectedRoute isAllowed={!!user && user.role === 'admin'} />}>
                    <Route
                        path="/admin/*"
                        element={<Dashboard onLogout={handleLogout} />}
                    />
                </Route>

                {/* AUTOMATYCZNE PRZEKIEROWANIE */}
                <Route path="/" element={<Navigate to="/login" replace />} />

                {/* Obsługa błędnych adresów (404) */}
                <Route path="*" element={<div className="text-white p-10">404 - Strona nie istnieje</div>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;