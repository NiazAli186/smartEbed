import React, { useRef } from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AddPhoto from '../../../../Images/AddPhoto.png';
import { useModal } from '../../../../Common/Modal/modal-provider';

const NewContract = () => {

    const [age, setAge] = React.useState('');
    const inputRef = useRef(null);
    const { closeModal } = useModal();

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const styles = {
        container: {
            width: '100%',
            padding: '24px 32px',
            boxSizing: 'border-box',
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
        },
        inputs: {
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            padding: '4px 0 16px',
        },
        formLabel: {
            color: '#000',
            fontSize: '24px',
            fontWeight: 700,
            position: 'static',
            transform: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
        },
        icon: {
            color: '#000',
            background: '#E74C3C',
            padding: '9px',
            borderRadius: '8px',
            width: '20px',
            height: '20px',
        },
        selectBox: {
            borderRadius: '8px',
        },
        imgBox: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        noImg: {
            width: '48px',
            padding: '32px 0',
        },
        btn: {
            background: '#1BB55C',
            padding: '16px',
            width: '100%',
            color: '#fff',
            fontSize: '20px',
            borderRadius: '8px',
            ':hover': {
                background: '#16914a',
            },
        },
        closeBtn: {
            background: '#E74C3C',
            padding: '16px',
            width: '100%',
            color: '#fff',
            fontSize: '20px',
            borderRadius: '8px',
            ':hover': {
                background: '#b33127',
            },
        },
    };

    return (
        <>
            <Box sx={styles.container}>
                <form style={styles.form}>
                    <FormControl sx={styles.inputs}>
                        <InputLabel sx={styles.formLabel} shrink htmlFor='bootstrap-input'>
                            <LockOutlinedIcon sx={styles.icon} />
                            Flat
                        </InputLabel>
                        <FormControl m={0}>
                            <Select
                                sx={styles.selectBox}
                                fullWidth
                                value={age}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value=''>
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </FormControl>
                    <FormControl sx={styles.inputs}>
                        <InputLabel sx={styles.formLabel} shrink htmlFor='bootstrap-input'>
                            <LockOutlinedIcon sx={styles.icon} />
                            Type
                        </InputLabel>
                        <FormControl m={0}>
                            <Select
                                sx={styles.selectBox}
                                fullWidth
                                value={age}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value=''>
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </FormControl>
                    <FormControl sx={styles.inputs}>
                        <InputLabel sx={styles.formLabel} shrink htmlFor='bootstrap-input'>
                            <LockOutlinedIcon sx={styles.icon} />
                            Room
                        </InputLabel>
                        <FormControl m={0}>
                            <Select
                                sx={styles.selectBox}
                                fullWidth
                                value={age}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value=''>
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </FormControl>
                    <FormControl sx={styles.inputs}>
                        <InputLabel sx={styles.formLabel} shrink htmlFor='bootstrap-input'>
                            <LockOutlinedIcon sx={styles.icon} />
                            Unit
                        </InputLabel>
                        <FormControl m={0}>
                            <Select
                                sx={styles.selectBox}
                                fullWidth
                                value={age}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value=''>
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </FormControl>
                    <FormControl sx={styles.inputs}>
                        <InputLabel sx={styles.formLabel} shrink htmlFor='imgInput'>
                            <LockOutlinedIcon sx={styles.icon} />
                            Profile Image
                        </InputLabel>
                        <Box sx={styles.imgBox} onClick={() => inputRef.current.click()}>
                            <input type='file' accept='image/*' id='imgInput' hidden ref={inputRef} />
                            <img src={AddPhoto} style={styles.noImg} alt='' />
                        </Box>
                    </FormControl>
                    <Button sx={styles.btn}>
                        Register
                    </Button>
                    <Button sx={styles.closeBtn} onClick={closeModal}>
                        CANCEL
                    </Button>
                </form>
            </Box>
        </>
    );
};

export default NewContract;