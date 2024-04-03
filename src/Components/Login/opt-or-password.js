import React from 'react';
import PropTypes from 'prop-types';
import {useState} from 'react';
import {
    Box,
    Typography,
    Tab,
    Tabs,
    useTheme, Button,
} from '@mui/material';
import OtpSection from './otp-section';
import PasswordSection from './password-section';
import {loginService} from "../../Services/user-services";

function CustomTabPanel(props) {


    const {children, value, index, ...other} = props;

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const OptOrPassword = ({email, defaultSelect}) => {

    // hooks
    const theme = useTheme();
    const [value, setValue] = useState(defaultSelect);

    // functions
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <>
            <Box sx={{width: '100%', background: theme.palette.background.paper}}>
                <Box>
                    <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
                        <Tab sx={{width: '50%', color: value === 0 ? '#000 !important' : '#989898'}}
                             label='OTP' {...a11yProps(0)} />
                        <Tab sx={{width: '50%', color: value === 1 ? '#000 !important' : '#989898'}}
                             label='Password' {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <OtpSection email={email} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <PasswordSection email={email} />
                </CustomTabPanel>
            </Box>
        </>
    );
};

export default OptOrPassword;