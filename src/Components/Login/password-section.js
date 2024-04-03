import React, {useContext, useState} from 'react';
import LoginLogo from '../../Images/LoginLogo.png';
import {Box, Button, InputAdornment, TextField} from '@mui/material';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import {loginService} from '../../Services/user-services';
import {useNavigate} from 'react-router-dom';
import {useModal} from '../../Common/Modal/modal-provider';
import Progress from '../../Common/progressLouding/progress';
import SimpleBackdrop from '../../Common/contextProgress/backropProgress';
import {LoadingContext} from '../../App';
const PasswordSection = ({email}) => {

    // hooks
    const [loading, setLoading] = useState('');
    const progressBar = <SimpleBackdrop/>;
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const {closeModal} = useModal();
    const handleChange = (event) => {
        setPassword(event.target.value);
    };

    // style
    const styles = {
        content: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 4,
            gap: 3,
        },
        logo: {
            width: '12rem',
            height: '12rem',
        },
        text: {
            fontSize: '18px',
            fontWeight: 400,
            textAlign: 'justify',
            lineHeight: 1.2,
            textJustify: 'inter-word',
        },
        title: {
            fontSize: '20px',
            fontWeight: 700,
            paddingRight: '15px',
            textAlign: 'justify',
        },
        footerBox: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            gap: 3,
        },
        timerBox: {
            display: 'flex',
            alignItems: 'center',
        },
        loginBtn: {
            background: '#007BFF',
            color: '#fff',
            width: '100%',
            fontSize: '16px',
            paddingY: '10px',
            ':hover': {
                background: '#045dbd',
            },
        },
        wrongBtn: {
            background: '#FFFFFF',
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

    const handleSubmit = (e) => {
        e.preventDefault();
        const response = async () => {
            setLoading(progressBar);
            const data = {
                username: email,
                scope: '["customer"]',
                client_id: '9aa0729a-6d0b-4d13-bcac-1cb7555ab9a9',
                client_secret: 'tEm7wgLRUid0SU4sJlMkHawlXMT837D9wNkI6SHh',
                password: password,
            };
            const res = await loginService(data);

            if (res?.results?.access_token) {
                localStorage.setItem('access_token', res.results.access_token);
                closeModal();
                navigate('/');
                setLoading('');

            } else {
                alert(res.message);
            }
        };
        response().catch((err) => {
            console.log(err);
        });
    };
    const handleWrong = () => {
        closeModal();
        navigate('/login');
    };

    return (
        <>
            <Box sx={styles.content}>
                {loading}
                <img src={LoginLogo} style={styles.logo} alt=""/>
                <Box sx={styles.text}>
                    <Box>You are trying to login with</Box>
                    <Box><Box sx={styles.title} component="span">{email}</Box>gmail</Box>
                    <Box>please write your password</Box>
                </Box>
                <Box sx={styles.footerBox} component={'form'} onSubmit={handleSubmit}>
                    <TextField
                        onInput={handleChange}
                        required={true}
                        fullWidth
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        type={passwordVisibility ? 'text' : 'password'}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">
                                <Box
                                    onClick={() => setPasswordVisibility(prev => !prev)}
                                    sx={styles.button}
                                >
                                    {passwordVisibility ? <VisibilityOff/> : <Visibility/>}
                                </Box>
                            </InputAdornment>,
                        }}/>
                    <Button
                        sx={styles.loginBtn}
                        type={'submit'}
                    >
                        Login/Register
                    </Button>
                    <Button
                        sx={styles.wrongBtn}
                        onClick={handleWrong}
                    >
                        Wrong Email?
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default PasswordSection;