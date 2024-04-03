import React, { useState } from 'react';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Flats from './Helper/Flats';


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
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

const Payment = () => {

    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box>
                <Box>
                    <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'
                          sx={{ minHeight: '40px', height: '40px' }}>
                        <Tab sx={{ width: '33.33%', padding: 0, color: value === 0 ? '#000 !important' : '#989898' }}
                             label='Flats' {...a11yProps(0)} />
                        <Tab sx={{ width: '33.33%', padding: 0, color: value === 1 ? '#000 !important' : '#989898' }}
                             label='Partitions' {...a11yProps(1)} />
                        <Tab sx={{ width: '33.34%', padding: 0, color: value === 1 ? '#000 !important' : '#989898' }}
                             label='Beds' {...a11yProps(2)} />
                    </Tabs>
                    <CustomTabPanel index={0} value={value}>
                        <Flats/>
                    </CustomTabPanel>
                    <CustomTabPanel index={1} value={value}></CustomTabPanel>
                    <CustomTabPanel index={2} value={value}></CustomTabPanel>
                </Box>

            </Box>
        </>
    );
};

export default Payment;