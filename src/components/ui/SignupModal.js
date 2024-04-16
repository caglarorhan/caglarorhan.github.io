// src/components/ui/SignupModal.js
import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { auth, createUserWithEmailAndPassword } from '../../firebase.js';


function SignupModal({show, onHide}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [realName, setRealName] = useState('');
    const [lastName, setLastName] = useState('');
    const [displayName, setDisplayName] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    };


    return (
        <Dialog open={show} onClose={onHide}>
            <DialogTitle>
                Sign Up
                <IconButton edge="end" color="inherit" onClick={onHide} aria-label="close">
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit}>
                    <TextField id="email" label="Email address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required fullWidth />
                    <TextField id="password" label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required fullWidth />
                    <TextField id="confirmPassword" label="Confirm Password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required fullWidth />
                    <TextField id="realName" label="Real Name" type="text" value={realName} onChange={(e) => setRealName(e.target.value)} required fullWidth />
                    <TextField id="lastName" label="Last Name" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required fullWidth />
                    <TextField id="displayName" label="Display Name" type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} fullWidth />
                    <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '1em' }}>Sign Up</Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}
export default SignupModal;
