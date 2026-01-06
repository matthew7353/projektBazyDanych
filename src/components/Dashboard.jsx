const Dashboard = ({ onLogout }) => {
    // Przykładowe dane, które docelowo pobierzesz z API
    const users = [
        { id: 1, name: "Jan Kowalski", role: "Admin" },
        { id: 2, name: "Anna Nowak", role: "User" },
        { id: 3, name: "Marek Wyż", role: "Editor" },
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Panel Zarządzania</h1>
                    <button
                        onClick={onLogout}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition"
                    >
                        Wyloguj się
                    </button>
                </div>

                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-50 border-b">
                        <tr>
                            <th className="p-4 text-gray-600 font-semibold">ID</th>
                            <th className="p-4 text-gray-600 font-semibold">Imię i nazwisko</th>
                            <th className="p-4 text-gray-600 font-semibold">Rola</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map(user => (
                            <tr key={user.id} className="border-b hover:bg-gray-50">
                                <td className="p-4 text-gray-800">{user.id}</td>
                                <td className="p-4 text-gray-800">{user.name}</td>
                                <td className="p-4 text-gray-800">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                      {user.role}
                    </span>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;