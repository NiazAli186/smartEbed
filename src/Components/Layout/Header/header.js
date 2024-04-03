import React from 'react';
import {Box} from '@mui/material';
import {useLocation} from 'react-router-dom';
import Acount from './acount';
import UserBalance from '../../Tenants/userBalance/userBalance';
import FlashBackHeaderPartition from './flashBackHeaderPartition';

const Header = () => {

    const location = useLocation();
    const headerLocation = useLocation();
    const title = location.pathname.split('/');

    let _title;
    if (title[1] === '') {
        _title = <Acount/>;
    } else if (title[1] === 'property' && title[2] === 'flat' && title[3] === 'partition') {
        _title = <FlashBackHeaderPartition/>;
    } else if (title[1] === 'property' && title[2] === 'flat' && title[3] === 'userBalance') {
        _title = '';
    } else if (title[1] === 'login') {
        _title = ''; // If you want to render nothing for login, keep it empty
    } else {
        _title = title[1];
    }


    const styles = {
        mainBox: {
            display: title[1] === 'property' && title[2] === 'flat' && title[3] === 'userBalance' ? 'none' : '',
            background: '#EFF2F5',
            position: 'sticky',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 2,
        }, mainTitle: {
            fontSize: '20px', lineHeight: '23.44px', padding: '13px 32px', position: 'relative',
        }, backIcon: {
            position: 'absolute', top: '3', left: '0',
        },
    };
    return (<>
            <Box sx={styles.mainBox}>
                <Box sx={styles.mainTitle}>{_title}</Box>
            </Box>
        </>);
};

export default Header;