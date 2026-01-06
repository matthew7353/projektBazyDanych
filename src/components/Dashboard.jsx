import { useState } from 'react';

const Dashboard = ({ onLogout }) => {
    const [currentView, setCurrentView] = useState('home'); // 'home', 'users' lub 'products'

    // Dane użytkowników
    const users = [
        { id: 1, name: "Jan Kowalski", role: "Admin" },
        { id: 2, name: "Anna Nowak", role: "User" },
    ];

    // NOWE: Dane produktów
    const products = [
        { id: 1, name: "Laptop Dell", price: "4500 PLN", stock: 15 },
        { id: 2, name: "Monitor LG", price: "1200 PLN", stock: 8 },
        { id: 3, name: "Myszka Logitech", price: "250 PLN", stock: 42 },
    ];

    return (
        <div className="flex min-h-screen bg-gray-100 font-sans">

            {/* SIDEBAR */}
            <div className="w-64 bg-slate-800 text-white p-6 shadow-xl flex flex-col">
                <h2 className="text-xl font-bold mb-8 border-b border-slate-700 pb-4">Admin Panel</h2>
                <nav className="space-y-2 flex-1">
                    <button
                        onClick={() => setCurrentView('home')}
                        className={`w-full text-left p-3 rounded transition ${currentView === 'home' ? 'bg-blue-600 shadow-lg' : 'hover:bg-slate-700'}`}
                    >
                        🏠 Strona główna
                    </button>
                    <button
                        onClick={() => setCurrentView('users')}
                        className={`w-full text-left p-3 rounded transition ${currentView === 'users' ? 'bg-blue-600 shadow-lg' : 'hover:bg-slate-700'}`}
                    >
                        👥 Użytkownicy
                    </button>
                    {/* NOWY PRZYCISK */}
                    <button
                        onClick={() => setCurrentView('products')}
                        className={`w-full text-left p-3 rounded transition ${currentView === 'products' ? 'bg-blue-600 shadow-lg' : 'hover:bg-slate-700'}`}
                    >
                        📦 Produkty
                    </button>
                </nav>

                <button
                    onClick={onLogout}
                    className="bg-red-500/10 hover:bg-red-600 text-red-400 hover:text-white p-3 rounded border border-red-500/50 transition font-semibold"
                >
                    Wyloguj się
                </button>
            </div>

            {/* MAIN CONTENT */}
            <div className="flex-1 p-10 overflow-y-auto">

                {/* WIDOK: HOME */}
                {currentView === 'home' && (
                    <div className="animate-fade-in">
                        <h1 className="text-3xl font-bold text-gray-800">System Zarządzania</h1>
                        <p className="mt-4 text-gray-600">Witaj w systemie. Skorzystaj z bocznego menu, aby przejść do wybranej sekcji.</p>
                        <div className="grid grid-cols-2 gap-6 mt-10">
                            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
                                <p className="text-sm text-gray-500 font-bold uppercase">Użytkownicy</p>
                                <p className="text-2xl font-black text-gray-800">{users.length}</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
                                <p className="text-sm text-gray-500 font-bold uppercase">Produkty</p>
                                <p className="text-2xl font-black text-gray-800">{products.length}</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* WIDOK: UŻYTKOWNICY */}
                {currentView === 'users' && (
                    <div className="text-black">
                        <h1 className="text-3xl font-bold mb-6 text-gray-800">👥 Zarządzanie Użytkownikami</h1>
                        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
                            <table className="w-full text-left">
                                <thead className="bg-slate-50 border-b border-gray-100">
                                <tr>
                                    <th className="p-4 font-bold text-gray-700">ID</th>
                                    <th className="p-4 font-bold text-gray-700">Imię i nazwisko</th>
                                    <th className="p-4 font-bold text-gray-700">Rola</th>
                                </tr>
                                </thead>
                                <tbody>
                                {users.map(u => (
                                    <tr key={u.id} className="border-b border-gray-50 hover:bg-blue-50/30 transition">
                                        <td className="p-4 font-mono text-blue-600">{u.id}</td>
                                        <td className="p-4 font-medium">{u.name}</td>
                                        <td className="p-4"><span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold">{u.role}</span></td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* NOWY WIDOK: PRODUKTY */}
                {currentView === 'products' && (
                    <div className="text-black">
                        <h1 className="text-3xl font-bold mb-6 text-gray-800">📦 Katalog Produktów</h1>
                        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
                            <table className="w-full text-left">
                                <thead className="bg-slate-50 border-b border-gray-100">
                                <tr>
                                    <th className="p-4 font-bold text-gray-700">Produkt</th>
                                    <th className="p-4 font-bold text-gray-700">Cena</th>
                                    <th className="p-4 font-bold text-gray-700">Stan magazynowy</th>
                                </tr>
                                </thead>
                                <tbody>
                                {products.map(p => (
                                    <tr key={p.id} className="border-b border-gray-50 hover:bg-green-50/30 transition">
                                        <td className="p-4 font-medium">{p.name}</td>
                                        <td className="p-4 text-green-700 font-bold">{p.price}</td>
                                        <td className="p-4 font-mono">{p.stock} szt.</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Dashboard;