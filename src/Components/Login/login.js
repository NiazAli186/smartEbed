import React, {useContext, useState,useEffect} from 'react';
import {
    Box,
    Button,
    Grid,
    Paper,
    TextField,
    useTheme,
} from '@mui/material';
import LoginLogo from '../../Images/LoginLogo.png';
import {useModal} from '../../Common/Modal/modal-provider';
import OptOrPassword from './opt-or-password';
import {SendOtpService} from '../../Services/sendOtpService';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {LoadingContext} from '../../App';
import SimpleBackdrop from '../../Common/contextProgress/backropProgress';
import {SendOtpForRegister} from '../../Services/sendOtpForRegister';


const Login = () => {

    const {setLoadingPgs, progressBar} = useContext(LoadingContext);

    const {openModal, closeModal} = useModal();

    // hooks
    const navigate = useNavigate();
    const theme = useTheme();

    const [error, setError] = useState(false);
    const [email, setEmail] = useState('');

    // functions
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = (emailAddress) => {
        return emailPattern.test(emailAddress);
    };

    const handleEmail = (e) => {
        const _email = e.target.value;
        if (isValidEmail(_email)) {
            setEmail(_email);
        }
    };

    const handleOptOrPassword = () => {

    };
    const handlePassword = () => {
        openModal({
            content: <OptOrPassword
                defaultSelect={1}
                email={email}/>,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = async () => {
            const data = {
                username: email,
                scope: '["customer"]',
                client_id: '9aa0729a-6d0b-4d13-bcac-1cb7555ab9a9',
                client_secret: 'tEm7wgLRUid0SU4sJlMkHawlXMT837D9wNkI6SHh',
            };
            const res = await SendOtpService(data);
            closeModal();
            openModal({
                content: <OptOrPassword
                    defaultSelect={0}
                    email={email}/>,
            })

            if (res?.results?.access_token) {
                localStorage.setItem('access_token', res.results.access_token);
                console.log(res.results);
            } else {
                console.log(res.message);
            }
        };
        response().catch((err) => {
            console.error('An error occurred:', error);
        });
    };

    const handleA = () => {
        setLoadingPgs(progressBar);
    };

    // styles
    const styles = {
        container: {
            width: '100%',
            minHeight: '100vh',

        },
        main: {
            background: theme.palette.background.paper,
            width: '100%',
            height: '100vh',
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 4,
            gap: 4,
        },
        logo: {
            width: '12rem',
            height: '12rem',
        },
        text: {
            fontSize: '18px',
            fontWeight: 400,
            wordSpacing: 5,
            textAlign: 'justify',
            lineHeight: 1.16,
            textJustify: 'inter-word',
        },
        title: {
            fontSize: '20px',
            fontWeight: 700,
            wordSpacing: 15,
            paddingLeft: '20px',
            textAlign: 'justify',
        },
        inputs: {
            background: '#fff',
            padding: '0 !important',
        },
        otpBtn: {
            background: '#007BFF',
            color: '#fff',
            width: '100%',
            fontSize: '16px',
            paddingY: '10px',
            ':hover': {
                background: '#045dbd',
            },
        },
        passBtn: {
            background: 'inherit',
            color: '#000',
            width: '100%',
            fontSize: '16px',
            paddingY: '10px',
            border: '2px solid #007BFF',
            ':hover': {
                background: '#cbced1',
            },
        },
    };

    return (
        <>
            <Box sx={styles.container}>
                <Box sx={styles.main} component={Paper}>
                    <Box sx={styles.content} component="form" onSubmit={handleSubmit}>
                        <img src={LoginLogo} style={styles.logo} alt=""/>
                        <Box sx={styles.text}>
                            <Box>Welcome &nbsp;to&nbsp;
                                <Box sx={styles.title} component="span">Smart eBed</Box>
                            </Box>
                            <Box>Cobone, Gift & Advertisment Platform.</Box>
                        </Box>
                        <Grid container>

                            <Grid item xs={12}>
                                <TextField
                                    error={error}
                                    type={'email'}
                                    label={'Email'}
                                    onInput={handleEmail}
                                    required={true}
                                    sx={styles.inputs}
                                    id="outlined-basic"
                                    fullWidth
                                    placeholder="smart@gmail.com"
                                />
                            </Grid>
                        </Grid>
                        <Button sx={styles.otpBtn} type={'submit'} onClick={handleOptOrPassword}>
                            Send OTP in Whats app
                        </Button>
                        <Button sx={styles.passBtn} onClick={handlePassword}>
                            Login with Password
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Login;