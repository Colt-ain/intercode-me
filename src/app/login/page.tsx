'use client';
import React, {useState} from 'react';

function Page() {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = () => {
        alert(`Login: ${username} - ${password}`);
    };

    const onchangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const onchangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    return (
        <div className='flex flex-1 flex-col justify-center items-center'>
            <h1>Login</h1>
            <form className='flex flex-col w-[400px] align-middle justify-center gap-3' action={handleSubmit}>
                <input
                    value={username}
                    onChange={onchangeName}
                    className='text-black-100'
                    type="text"
                    placeholder="Username"
                />
                <input
                    onChange={onchangePassword}
                    value={password}
                    type="password"
                    placeholder="Password"
                />
                <button type="submit" className='backdrop-brightness-100 backdrop-blur border-2 mt-2'>Login</button>
            </form>
        </div>
    );
}

export default Page;
