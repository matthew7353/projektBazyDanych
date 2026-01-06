import { useState } from 'react'

const Login = ({ onLogin }) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()

        // SIMULATION:
        if (login === "admin" && password === "admin") {
            onLogin("fake-token-123");
        } else {
            alert("Błędne dane! Użyj admin / admin");
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
            <div className="bg-white p-8 rounded-xl shadow-2xl w-96">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Logowanie</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Login</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded mt-1 text-black"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Hasło</label>
                        <input
                            type="password"
                            className="w-full p-2 border border-gray-300 rounded mt-1 text-black"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded font-bold hover:bg-blue-700 transition"
                    >
                        Zaloguj się
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login