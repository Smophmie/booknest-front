import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");

        try {
            const response = await fetch("http://195.15.204.108/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error("Échec de la connexion. Vérifiez vos identifiants.");
            }

            const data = await response.json();
            setMessage("Connexion réussie !");
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <div className="h-screen bg-gray-900 text-white p-12">
            <h2 className="my-6 text-lg font-bold">Connexion</h2>
            {message && <p className="mb-4 text-sm text-red-500">{message}</p>}
            <form className="space-y-4 w-64" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email" className="block mb-2 text-xs font-medium text-white">Votre e-mail</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        className="bg-transparent border border-gray-300 text-white rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                        placeholder="nom@example.com" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-xs font-medium text-white">Mot de passe</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="••••••••" 
                        className="bg-transparent border border-gray-300 text-white rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="mt-3 bg-blue-500 px-4 py-2 rounded-lg w-full">Connexion</button>
            </form>
        </div>
    );
}
