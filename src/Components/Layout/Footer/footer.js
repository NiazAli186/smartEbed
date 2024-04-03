import React, {useState} from 'react';
import {BottomNavigation, BottomNavigationAction} from '@mui/material';
import {AttachMoney, Home, SupervisorAccount, AccountCircle, Business} from '@mui/icons-material';
import {useLocation, useNavigate} from 'react-router-dom';

const Footer = () => {

    // hooks

    const location = useLocation();
    const display = location.pathname.includes('login');
    const displayProfileModal = location.pathname.includes('ProfileModal');
    const displayTerms = location.pathname.includes('/terms');
    const displayAboutUs = location.pathname.includes('/aboutUs');
    const displayUserBalance = location.pathname.includes('/userBalance');
    const saveInformation = location.pathname.includes('/savInformation');
    const registerInformation = location.pathname.includes('/registerInformation');
    const partition = location.pathname.includes('/partition');

    const [value, setValue] = useState(0);
    const navigate = useNavigate();

    const styles = {
        mainBox: {
            display:
                display ||
                displayProfileModal ||
                displayTerms ||
                displayAboutUs ||
                displayUserBalance ||
                saveInformation ||
                registerInformation ||
                partition ?
                    'none' : '',
            background: '#EFF2F5',
            position: 'fixed',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            '& .Mui-selected': {
                color: '#E74C3C !important',
            },
            maxWidth: '400px',
            zIndex:2,

        },
        btns: {
            color: 'rgba(50, 50, 50, 0.60)',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
            fontFamily: 'Roboto',
            '& .Mui-selected': {
                color: '#38383E !important',
            },
        },
    };

    return (
        <>
            <BottomNavigation
                sx={styles.mainBox}
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction
                    onClick={() => navigate('')}
                    sx={styles.btns}
                    label="Home"
                    icon={<Home/>}/>
                <BottomNavigationAction
                    onClick={() => navigate('/property')}
                    sx={styles.btns}
                    label="Property"
                    icon={<Business/>}/>
                <BottomNavigationAction
                    onClick={() => navigate('/payment')}
                    sx={styles.btns}
                    label="Payment"
                    icon={<AttachMoney/>}/>
                <BottomNavigationAction
                    onClick={() => navigate('/tenants')}
                    sx={styles.btns}
                    label="Tenants"
                    icon={<SupervisorAccount/>}/>
                <BottomNavigationAction
                    onClick={() => navigate('/profile')}
                    sx={styles.btns} label="Profile"
                    icon={<AccountCircle/>}/>
            </BottomNavigation>
        </>
    );
};

export default Footer;