import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function SimpleBackdrop() {
    const [open, setOpen] = React.useState(true);

    return (
        <>

            <Backdrop
                sx={{color: '#fff', width:"100%", zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={open}
            >
                <CircularProgress color="inherit"/>
            </Backdrop>
        </>
    );
}