import React from 'react';
import {Box, Typography} from '@mui/material';
import {PersonOutline, Balance, InfoOutlined, SupportAgent, Logout} from '@mui/icons-material';
import {useModal} from "../../Common/Modal/modal-provider";
import ProfileModal from "./profile-modal/profile-modal";
import Login from "../Login/login";
import Terms from "./terms/terms";
import AboutUs from "./about Us/aboutUs";
import {useNavigate} from 'react-router-dom';
import Footer from '../Layout/Footer/footer';

const Profile = () => {

    const navigate = useNavigate();

    const {openModal,closeModal} = useModal()
    const handleRegister = () => {
       closeModal();
       navigate('/profile/ProfileModal')
    }
    const handleLogin =()=>{
        localStorage.clear();
        closeModal();
        navigate('/login');
    }

    const handleOpenTerms=()=>{
      closeModal();
      navigate('/profile/terms')
    }
    const handleOpenAboutUs=()=>{
       closeModal();
       navigate('/profile/aboutUs')
    }

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            padding: '12px 32px',
        },
        content: {
            display: 'flex',
            gap: '8px',
            padding: '8px',
            alignItems: 'center',
            borderBottom: '1px solid #B3B3B3',
            cursor: 'pointer',
        },
        personIcon: {
            width: '36px',
            height: '36px',
        },
        nameBox: {
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            padding: '8px',
        },
        fullName: {
            fontSize: '14px',
            fontWeight: 700,
        },
        phoneNumber: {
            fontSize: '14px',
            color: '#989898',
        },
        createdDate: {
            display: 'flex',
            flexDirection: 'column',
            padding: '8px',
            marginLeft: 'auto',
        },
        titleDate: {
            fontSize: '10px',
            fontWeight: 500,
        },
        textDate: {
            fontSize: '10px',
            color: '#989898',
        },
        profileBox: {
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            borderBottom: '1px solid #B3B3B3',
        },
        profileContent: {
            display: 'flex',
            gap: '8px',
            padding: '8px',
            alignItems: 'center',
            cursor: 'pointer',
        },
        icons: {
            width: '32px',
            height: '32px',
        },
        titleText: {
            fontSize: '14px',
            fontWeight: 700,
            padding: '8px',
        },
    };

    return (
        <>
            <Box sx={styles.container}>
                <Box sx={styles.content} onClick={handleRegister}>
                    <PersonOutline sx={styles.personIcon}/>
                    <Box sx={styles.nameBox}>
                        <Typography sx={styles.fullName}>John Dou</Typography>
                        <Typography sx={styles.phoneNumber}>+971 553 4123</Typography>
                    </Box>
                    <Box sx={styles.createdDate}>
                        <Typography sx={styles.titleDate}>Register At</Typography>
                        <Typography sx={styles.textDate}>2022/12/12</Typography>
                    </Box>
                </Box>
                <Box sx={styles.profileBox}>
                    <Box sx={styles.profileContent} onClick={handleOpenTerms}>
                        <Balance sx={styles.icons}/>
                        <Typography sx={styles.titleText}>Terms</Typography>
                    </Box>
                    <Box sx={styles.profileContent}>
                        <InfoOutlined sx={styles.icons}/>
                        <Typography sx={styles.titleText} onClick={handleOpenAboutUs}>About Us</Typography>
                    </Box>
                    <Box sx={styles.profileContent}>
                        <SupportAgent sx={styles.icons}/>
                        <Typography sx={styles.titleText}>Support</Typography>
                    </Box>
                </Box>
                <Box sx={styles.profileBox}>

                    <Box sx={styles.profileContent} onClick={handleLogin}>
                        <Logout sx={styles.icons}/>
                        <Typography sx={styles.titleText}>Sign Out</Typography>
                    </Box>

                </Box>
            </Box>
        </>
    );
};

export default Profile;