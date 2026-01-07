import { useState } from 'react';

const Dashboard = ({ onLogout }) => {
    const [currentView, setCurrentView] = useState('home'); // 'home', 'users' lub 'products'

    // Dane użytkowników
    const users = [
        { id: 1, name: "Jan Kowalski", email: "kowalski@sklep.pl", role: "Kierownik" },
        { id: 2, name: "Anna Nowak", email: "nowak@sklep.pl", role: "Sprzedawca" },
        { id: 3, name: "Michał Pietruszka", email: "pietruszka@sklep.pl", role: "Magazynier" },
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
                    </div>
                )}

                {currentView === 'users' && (
                    <div className="text-black animate-fade-in">
                        <div className="flex justify-between items-center mb-6">
                            <h1 className="text-3xl font-bold text-gray-800">
                                👥 Zarządzanie Użytkownikami
                            </h1>
                            <button
                                onClick={() => setCurrentView('add_user')}
                                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-bold shadow-md transition duration-200 flex items-center gap-2"
                            >
                                <span className="text-xl">+</span> Dodaj pracownika
                            </button>
                        </div>

                        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
                            <table className="w-full text-left">
                                <thead className="bg-slate-50 border-b border-gray-100">
                                <tr>
                                    <th className="p-4 font-bold text-gray-700">ID</th>
                                    <th className="p-4 font-bold text-gray-700">Imię i nazwisko</th>
                                    <th className="p-4 font-bold text-gray-700">Adres email</th>
                                    <th className="p-4 font-bold text-gray-700">Rola</th>
                                    <th className="p-4 font-bold text-gray-700 text-right">Akcje</th>
                                </tr>
                                </thead>
                                <tbody>
                                {users.map(u => (
                                    <tr key={u.id} className="border-b border-gray-50 hover:bg-blue-50/30 transition group">
                                        <td className="p-4 font-mono text-blue-600">{u.id}</td>
                                        <td className="p-4 font-medium">{u.name}</td>
                                        <td className="p-4 font-medium">{u.email}</td>
                                        <td className="p-4">
                                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold">
                                                {u.role}
                                            </span>
                                        </td>
                                        <td className="p-4 text-right">
                                            <button
                                                onClick={() => alert(`Opcje dla użytkownika: ${u.name}\n1. Edytuj\n2. Usuń`)}
                                                className="p-2 hover:bg-gray-200 rounded-full transition duration-200 text-gray-600 font-bold"
                                                title="Więcej opcji"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="Link2 0 24 24M12 12h.01M12 19h.01M12 5h.01" />
                                                    <circle cx="12" cy="5" r="1.5" fill="currentColor" stroke="none"/>
                                                    <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/>
                                                    <circle cx="12" cy="19" r="1.5" fill="currentColor" stroke="none"/>
                                                </svg>
                                            </button>
                                        </td>
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

                {currentView === 'add_user' && (
                    <div className="text-black animate-fade-in">
                        <div className="flex justify-between items-center mb-6">
                            <h1 className="text-3xl font-bold text-gray-800">
                                ➕ Dodaj nowego pracownika
                            </h1>
                            <button
                                onClick={() => setCurrentView('users')}
                                className="text-gray-500 hover:text-gray-700 font-medium transition"
                            >
                                ← Powrót do listy
                            </button>
                        </div>

                        <div className="bg-white shadow-xl rounded-2xl p-8 max-w-2xl mx-auto border border-gray-100">
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Imię i Nazwisko</label>
                                    <input
                                        type="text"
                                        className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Adres email</label>
                                    <input
                                        type="email"
                                        className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Stanowisko</label>
                                    <select className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition bg-white">
                                        <option>Sprzedawca</option>
                                        <option>Magazynier</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Hasło</label>
                                    <input
                                        type="text"
                                        className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                                    />
                                </div>

                                <div className="pt-4 flex gap-4">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            alert("Pracownik został dodany (symulacja)");
                                            setCurrentView('users');
                                        }}
                                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg transition duration-200"
                                    >
                                        Zapisz pracownika
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setCurrentView('users')}
                                        className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold py-3 rounded-xl transition duration-200"
                                    >
                                        Anuluj
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;