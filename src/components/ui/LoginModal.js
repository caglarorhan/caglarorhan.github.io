// src/components/ui/LoginModal.js
import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton, TextField, Button } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';

import { auth, signInWithEmailAndPassword } from '../../firebase.js';

function LoginModal({showTheModal}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);

    // asagidaki kod sadece ana componentten showTheModal true gelirse tetiklenecek.
    useEffect(() => {
        setShow(showTheModal);
        console.log('show set to', showTheModal, 'now');
    }, [showTheModal]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = async (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
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
        <Dialog open={show} onClose={handleClose}>
            <DialogTitle>Login</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit}>
                    <TextField label="Email address" type="email" value={email}
                               onChange={(e) => setEmail(e.target.value)} required fullWidth/>
                    <TextField label="Password" type="password" value={password}
                               onChange={(e) => setPassword(e.target.value)} required fullWidth/>
                    <Button type="submit" color="primary" variant="contained" fullWidth>Login</Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}
export default LoginModal;
