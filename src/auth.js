    import React, { useState } from 'react';
    import { auth, db } from './firebase';
    import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
    import { doc, setDoc } from 'firebase/firestore';

    const Auth = () => {
    const [isRegister, setIsRegister] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleAuth = async () => {
        try {
        if (isRegister) {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await setDoc(doc(db, 'users', userCredential.user.uid), {
            email,
            createdAt: new Date(),
            });
            alert('User registered');
        } else {
            await signInWithEmailAndPassword(auth, email, password);
            alert('Logged in successfully');
        }
        } catch (error) {
        console.error(error);
        }
    };

    return (
        <div>
        <h2>{isRegister ? 'Register' : 'Login'}</h2>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleAuth}>{isRegister ? 'Register' : 'Login'}</button>
        <p onClick={() => setIsRegister(!isRegister)} style={{ cursor: 'pointer' }}>
            {isRegister ? 'Already have an account? Login' : 'No account? Register'}
        </p>
        </div>
    );
    };

    export default Auth;
