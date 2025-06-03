import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginForm {
    email: string;
    password: string;
}

const Login: React.FC = () => {
    const [form, setForm] = useState<LoginForm>({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (form.email === 'admin@gmail.com' && form.password === 'letmein') {
            const account = { email: form.email, loggedIn: true };
            navigate('/home', { state: account });
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;