import React, {useEffect, useRef, useState} from 'react';
import LoginLogo from '../../Images/LoginLogo.png';
import {Box, Button, IconButton, TextField} from '@mui/material';
import OtpInput from './helper/otp-input';
import CountDownTimer from './helper/counter-down-timer';
import ReplayIcon from '@mui/icons-material/Replay';
import {useModal} from '../../Common/Modal/modal-provider';
import {SendOtpService} from '../../Services/sendOtpService';
import {useNavigate} from 'react-router-dom';
import {LoginWithOtpService} from '../../Services/loginWithOtpService';

const OtpSection = ({email}, {
    length = 4, onOtpSubmit = () => {
    },
}) => {


    const [otp, setOtp] = useState(new Array(length).fill(''));
    const inputRefs = useRef([]);


    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, []);

    const handleChange = (index, e) => {
        const value = e.target.value;
        if (isNaN(value)) return;

        const newOtp = [...otp];
        // allow only one input
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);

        // submit trigger
        const combinedOtp = newOtp.join('');
        if (combinedOtp.length === length) onOtpSubmit(combinedOtp);

        // Move to next input if current field is filled
        if (value && index < length - 1 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleClick = (index) => {

        inputRefs.current[index].setSelectionRange(1, 1);

        // optional
        if (index > 0 && !otp[index - 1]) {
            inputRefs.current[otp.indexOf('')].focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (
            e.key === 'Backspace' &&
            !otp[index] &&
            index > 0 &&
            inputRefs.current[index - 1]
        ) {
            // Move focus to the previous input field on backspace
            inputRefs.current[index - 1].focus();
        }
    };


    const {openModal, closeModal} = useModal();

    const handleWorng = () => {
        closeModal();
        navigate('/login');
    };

    // hooks
    const navigate = useNavigate();
    const [minutes, setMinutes] = useState(2);
    const [seconds, setSeconds] = useState(0);
    const [showTimer, setShowTimer] = useState(true);
    // functions
    const handleSendCodeAgain = (e) => {
        // setMinutes(1);
        // setSeconds(30);
        const response = async () => {
            const data = {
                email: email,
                scope: '["customer"]',
                client_id: '9aa0729a-6d0b-4d13-bcac-1cb7555ab9a9',
                client_secret: 'tEm7wgLRUid0SU4sJlMkHawlXMT837D9wNkI6SHh',

            };
            const res = await SendOtpService(data);

            if (res?.results?.access_token) {
                localStorage.setItem('access_token', res.results.access_token);
                console.log(res.data);
            } else {
                console.log(res.message);
            }
        };
        response().catch((err) => {
            console.log(err);
        });
    };
    const onFinishTimer = () => {
        setShowTimer(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const response = async () => {
            let mainOtp = otp.join('');
            console.log(mainOtp);
            const data = {
                email: email,
                scope: '["customer"]',
                client_id: '9aa0729a-6d0b-4d13-bcac-1cb7555ab9a9',
                client_secret: 'tEm7wgLRUid0SU4sJlMkHawlXMT837D9wNkI6SHh',
                otp: mainOtp,
            };
            const res = await LoginWithOtpService(data);

            if (res?.results?.access_token) {
                localStorage.setItem('user_id', res.results.user_id);
                localStorage.setItem('access_token', res.results.access_token);
                localStorage.setItem('expires_at', res.results.expires_at);
                localStorage.setItem('application_id', res.results.application_id);
                closeModal();
                navigate('/');
            } else {
                alert(res.message);
            }
        };
        response().catch((err) => {
            console.log(err);
        });
    };


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
            paddingX: '15px',
            textAlign: 'justify',
        },
        footerBox: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            gap: 2,
        },
        timerBox: {
            display: 'flex',
            alignItems: 'center',
        },
        timer: {
            display: showTimer ? 'inline-block' : 'none',
        },
        resend: {
            display: showTimer ? 'none' : 'inline-block',
            color: '#000',
            padding: 0,
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
            <Box sx={styles.content}>
                <img src={LoginLogo} style={styles.logo} alt=""/>
                <Box sx={styles.text}>
                    <Box>To<Box sx={styles.title} component="span">{email}</Box>OTP</Box>
                    <Box>Code was Sent, Please check your</Box>
                    <Box>SMS inbox.</Box>
                </Box>
                <Box sx={styles.footerBox} component="form" onSubmit={handleSubmit}>


                    <Box display="flex" justifyContent="center" alignItems="center" gap={1}>
                        {otp.map((value, index) => (
                            <TextField
                                key={index}
                                type="text"
                                variant="outlined"
                                size="small"
                                value={value}
                                onChange={(e) => handleChange(index, e)}
                                onClick={() => handleClick(index)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                inputRef={(input) => (inputRefs.current[index] = input)}
                                inputProps={{
                                    maxLength: 1,
                                    style: {textAlign: 'center'},
                                }}
                            />
                        ))}
                    </Box>


                    <Box sx={styles.timerBox}>
                        {/*is not align and timer is not reset*/}
                        <CountDownTimer onFinished={onFinishTimer} seconds={seconds} setSeconds={setSeconds}
                                        minutes={minutes} setMinutes={setMinutes}/>
                        <IconButton onClick={handleSendCodeAgain}>
                            <ReplayIcon fontSize="medium"/>
                        </IconButton>
                    </Box>
                    <Button
                        sx={styles.loginBtn}
                        type={'submit'}
                    >
                        Login/Register
                    </Button>
                    <Button
                        sx={styles.wrongBtn}
                        onClick={handleWorng}
                    >
                        Wrong Email?
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default OtpSection;