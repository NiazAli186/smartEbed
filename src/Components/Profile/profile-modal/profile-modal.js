import React, {useState} from 'react';
import {Box, Button, IconButton, Paper, TextField, Typography, useTheme} from '@mui/material';
import profilePhoto from '../../../Images/profilePhoto.png';
import edit from '../../../Images/edit.png';
import {useModal} from '../../../Common/Modal/modal-provider';
import Home from '../../Home/home';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

const ProfileModal = () => {

    const schema = yup.object().shape({
        name: yup.string().required('Name is required'),
        family: yup.string().required('Family is required'),
        password: yup.string().required('Password is required'),
    });
    // const {register, handleSubmit, formState: {errors}} = useForm({
    //     resolver: yupResolver(schema),
    // });

    // hooks
    const {openModal, closeModal} = useModal();
    const theme = useTheme();
    const {id} = useParams();
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: '',
        family: '',
        password: '',
    });
    const [errors, setErrors] = useState({
        name: '',
        family: '',
        password: '',
    });
    // style
    const styles = {
        container: {
            width: '100%',
            minHeight: '100%',
        },
        main: {
            background: theme.palette.background.paper,
            width: '100%',
            height: '100%',
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 4,
            gap: 3,
        },
        imageBox: {
            position: 'relative',
        },
        editImg: {
            position: 'absolute',
            top: 0,
            right: 0,
        },
        title: {
            width: '100%',
            fontSize: '18px',
        },
        submitBtn: {
            background: '#007BFF',
            color: '#fff',
            width: '100%',
            fontSize: '16px',
            paddingY: '10px',
            ':hover': {
                background: '#045dbd',
            },
        },
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!values.name) {
            setErrors(prevErrors => ({...prevErrors, name: 'Name is required'}));
            return;
        }
        if (!values.family) {
            setErrors(prevErrors => ({...prevErrors, family: 'Family is required'}));
            return;
        }
        if (!values.password) {
            setErrors(prevErrors => ({...prevErrors, password: 'Password is required'}));
            return;
        }

        const user_id = localStorage.getItem('user_id');
        const profileId = localStorage.getItem('profile_id');
        const token = localStorage.getItem('access_token');

        axios.patch(`http://207.244.254.162:8012/api/v1/users/${user_id}?relations=["profiles"]`, {
            'country_code': '98',
            'profiles': [
                {
                    'id': profileId,
                    'name': values.name,
                    'family': values.family,
                    'father_name': 'salam2',
                },
            ],
        }, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        })
            .then((res) => {
                console.log(res.data);
                closeModal();
                navigate('/')
            })
            .catch(err => console.log(err));
    };

    const handleChange = (e) => {
        // Update the `family` value in the `values` object
        const {name, value} = e.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value,
        }));
        // Clear the validation error for the current input field
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: '',
        }));
    };


    return (
        <>
            <Box sx={styles.container}>
                <Box sx={styles.main} component={Paper}>
                    <Box sx={styles.content} component="form" onSubmit={handleSubmit}>
                        <Box sx={styles.imageBox}>
                            <img src={profilePhoto} alt=""/>
                            <IconButton sx={styles.editImg}>
                                <img src={edit} alt=""/>
                            </IconButton>
                        </Box>
                        <Typography sx={styles.title}>
                            Please Complete your information
                        </Typography>
                        <TextField
                            onChange={handleChange}
                            value={values.name}
                            name="name"
                            sx={{background: '#fff'}}
                            label="Name"
                            variant="outlined"
                            fullWidth
                            error={Boolean(errors.name)}
                            helperText={errors.name}
                        />
                        <TextField
                            onChange={handleChange}
                            value={values.family}
                            name="family"
                            sx={{background: '#fff'}}
                            label="Family"
                            variant="outlined"
                            fullWidth
                            error={Boolean(errors.family)}
                            helperText={errors.family}
                            margin="normal"
                        />
                        <TextField
                            onChange={handleChange}
                            value={values.password}
                            name="password"
                            sx={{background: '#fff'}}
                            label="Password"
                            variant="outlined"
                            fullWidth
                            type="password"
                            error={Boolean(errors.password)}
                            helperText={errors.password}
                        />
                        <Button type="submit" sx={styles.submitBtn}>SAVE</Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default ProfileModal;