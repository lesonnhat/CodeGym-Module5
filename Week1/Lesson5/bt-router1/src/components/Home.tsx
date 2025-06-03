import React from 'react';
import { useLocation } from 'react-router-dom';

interface Account {
    email: string;
    loggedIn: boolean;
}

const Home: React.FC = () => {
    const { state } = useLocation();
    const account = state as Account | null;

    return (
        <div>
            <h1>Welcome</h1>
            {account && account.loggedIn ? (
                <div>
                    <p>Email: {account.email}</p>
                    <p>Status: Logged In</p>
                </div>
            ) : (
                <p>No account data available</p>
            )}
        </div>
    );
};

export default Home;