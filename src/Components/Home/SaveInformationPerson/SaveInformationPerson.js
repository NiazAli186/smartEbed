import React, {useRef} from 'react';
import {Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, Typography} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AddPhoto from '../../../Images/AddPhoto.png';
import {useModal} from "../../../Common/Modal/modal-provider";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {TextField} from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const SaveInformationPerson = () => {

    const [age, setAge] = React.useState('');
    const inputRef = useRef(null);
    const {closeModal} = useModal();

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleClose =()=>{
        closeModal()
    }

    const styles = {
        container: {
            width: '100%',
            padding: '20px 32px',
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
            border: 1,
            height: '200px',
        },
        typographyProfileImag: {
            fontSize: "12px",
            color: 'gray',
        },
        noImg: {
            width: '48px',
            padding: '32px 0',
        },

        boxBtn: {
            width: '93%',
            position: 'sticky',
            bottom: '0px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingY: "14px",
            paddingLeft: "14px",
            zIndex: 2,
            background: "#FFFFFF"
        },
        btn: {
            marginBottom: "20px",
            background: '#1BB55C',
            padding: '10px',
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
        dateInput: {
            padding: "7px 7px",
            borderRadius: "10px",
            width: "100%"
        },
        iconPersonalInformation: {
            color: '#000',
            background: '#59F739',
            padding: '9px',
            borderRadius: '8px',
            width: '20px',
            height: '20px',
        },
        iconWhatsapp: {
            color: '#000',
            background: '#59F739',
            padding: '9px',
            borderRadius: '8px',
            width: '30px',
            height: '30px',

        },
        gridIconWhatsapp: {
            paddingLeft: "20px",
            paddingTop: "10px",
        },
        gridBackIcon:{
            background:"#F2F8F7",
            paddingBottom:'8px',
            paddingTop:'15px',
            paddingLeft:"10px",

        },
    };

    return (
        <>
            <Box sx={styles.container}>
                {/*<Grid container sx={styles.gridBackIcon}>*/}
                {/*    <Grid item xs={2}>*/}
                {/*        <KeyboardBackspaceIcon onClick={handleClose}/>*/}
                {/*    </Grid>*/}
                {/*</Grid>*/}
                <form style={styles.form}>
                    <FormControl sx={styles.inputs}>
                        <InputLabel sx={styles.formLabel} shrink htmlFor='bootstrap-input'>
                            <LockOutlinedIcon sx={styles.icon}/>
                            Flat
                        </InputLabel>
                        <FormControl m={0}>
                            <Select
                                sx={styles.selectBox}
                                fullWidth
                                value={age}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{'aria-label': 'Without label'}}
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
                            <LockOutlinedIcon sx={styles.icon}/>
                            Type
                        </InputLabel>
                        <FormControl m={0}>
                            <Select
                                sx={styles.selectBox}
                                fullWidth
                                value={age}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{'aria-label': 'Without label'}}
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
                            <LockOutlinedIcon sx={styles.icon}/>
                            Room
                        </InputLabel>
                        <FormControl m={0}>
                            <Select
                                sx={styles.selectBox}
                                fullWidth
                                value={age}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{'aria-label': 'Without label'}}
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
                            <LockOutlinedIcon sx={styles.icon}/>
                            Unit
                        </InputLabel>
                        <FormControl m={0}>
                            <Select
                                sx={styles.selectBox}
                                fullWidth
                                value={age}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{'aria-label': 'Without label'}}
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

                    {/*getProfileImage*/}
                    <FormControl sx={styles.inputs}>
                        <InputLabel sx={styles.formLabel} shrink htmlFor='imgInput'>
                            <LockOutlinedIcon sx={styles.icon}/>
                            Profile Image
                        </InputLabel>
                        <Box sx={styles.imgBox} onClick={() => inputRef.current.click()}>
                            <input type='file' accept='image/*' id='imgInput' hidden ref={inputRef}/>
                            <img src={AddPhoto} style={styles.noImg} alt=''/>
                        </Box>
                        <Typography sx={styles.typographyProfileImag}>
                            Not more than 20 quantity and not more that 4mb.
                        </Typography>
                    </FormControl>

                    {/*getPassportImage*/}
                    <FormControl sx={styles.inputs}>
                        <InputLabel sx={styles.formLabel} shrink htmlFor='imgInput'>
                            <LockOutlinedIcon sx={styles.icon}/>
                            Passport Image
                        </InputLabel>
                        <Box sx={styles.imgBox} onClick={() => inputRef.current.click()}>
                            <input type='file' accept='image/*' id='imgInput' hidden ref={inputRef}/>
                            <img src={AddPhoto} style={styles.noImg} alt=''/>
                        </Box>
                        <Typography sx={styles.typographyProfileImag}>
                            Not more than 20 quantity and not more that 4mb.
                        </Typography>
                    </FormControl>

                    {/*getIDCardImage*/}
                    <FormControl sx={styles.inputs}>
                        <InputLabel sx={styles.formLabel} shrink htmlFor='imgInput'>
                            <LockOutlinedIcon sx={styles.icon}/>
                            ID Card
                        </InputLabel>
                        <Box sx={styles.imgBox} onClick={() => inputRef.current.click()}>
                            <input type='file' accept='image/*' id='imgInput' hidden ref={inputRef}/>
                            <img src={AddPhoto} style={styles.noImg} alt=''/>
                        </Box>
                        <Typography sx={styles.typographyProfileImag}>
                            Not more than 20 quantity and not more that 4mb.
                        </Typography>
                    </FormControl>

                    {/*getContractImage*/}
                    <FormControl sx={styles.inputs}>
                        <InputLabel sx={styles.formLabel} shrink htmlFor='imgInput'>
                            <LockOutlinedIcon sx={styles.icon}/>
                            Contract
                        </InputLabel>
                        <Box sx={styles.imgBox} onClick={() => inputRef.current.click()}>
                            <input type='file' accept='image/*' id='imgInput' hidden ref={inputRef}/>
                            <img src={AddPhoto} style={styles.noImg} alt=''/>
                        </Box>
                        <Typography sx={styles.typographyProfileImag}>
                            Not more than 20 quantity and not more that 4mb.
                        </Typography>
                    </FormControl>

                    {/*GetSignImage*/}
                    <FormControl sx={styles.inputs}>
                        <InputLabel sx={styles.formLabel} shrink htmlFor='imgInput'>
                            <LockOutlinedIcon sx={styles.icon}/>
                            Sign
                        </InputLabel>
                        <Box sx={styles.imgBox} onClick={() => inputRef.current.click()}>
                            <input type='file' accept='image/*' id='imgInput' hidden ref={inputRef}/>
                            <img src={AddPhoto} style={styles.noImg} alt=''/>
                        </Box>
                        <Typography sx={styles.typographyProfileImag}>
                            Not more than 20 quantity and not more that 4mb.
                        </Typography>
                    </FormControl>

                    {/*Contract*/}
                    <Typography variant='h6'>
                        Contract
                    </Typography>
                    <FormControl sx={styles.inputs}>
                        <InputLabel sx={styles.formLabel} shrink htmlFor='bootstrap-input'>
                            <LockOutlinedIcon sx={styles.icon}/>
                            Date
                        </InputLabel>
                        <TextField
                            sx={styles.dateInput}
                            placeholder='2025/01/23'
                            InputProps={{disableUnderline: true}}
                        />
                    </FormControl>

                    <FormControl sx={styles.inputs}>
                        <InputLabel sx={styles.formLabel} shrink htmlFor='bootstrap-input'>
                            <LockOutlinedIcon sx={styles.icon}/>
                            Expration
                        </InputLabel>
                        <TextField
                            sx={styles.dateInput}
                            placeholder='2025/01/23'
                            InputProps={{disableUnderline: true}}
                        />
                    </FormControl>

                    <FormControl sx={styles.inputs}>
                        <InputLabel sx={styles.formLabel} shrink htmlFor='bootstrap-input'>
                            <LockOutlinedIcon sx={styles.icon}/>
                            Monthly Payment
                        </InputLabel>
                        <TextField
                            sx={styles.dateInput}
                            placeholder='Example: 1,000'
                            InputProps={{disableUnderline: true}}
                        />
                    </FormControl>
                    <FormControl sx={styles.inputs}>
                        <InputLabel sx={styles.formLabel} shrink htmlFor='bootstrap-input'>
                            <LockOutlinedIcon sx={styles.icon}/>
                            Pre Charge
                        </InputLabel>
                        <TextField
                            sx={styles.dateInput}
                            placeholder='Example: 1,000'
                            InputProps={{disableUnderline: true}}
                        />
                    </FormControl>

                    <FormControl sx={styles.inputs}>
                        <InputLabel sx={styles.formLabel} shrink htmlFor='bootstrap-input'>
                            <LockOutlinedIcon sx={styles.icon}/>
                            Description
                        </InputLabel>
                        <textarea
                            name="postContent"
                            rows={7}
                            cols={40}
                            placeholder='Description'
                            style={styles.dateInput}
                        />
                    </FormControl>

                    {/*PersonalInformation*/}
                    <Typography variant='h6'>
                        Personal Information
                    </Typography>
                    <FormControl sx={styles.inputs}>
                        <InputLabel sx={styles.formLabel} shrink htmlFor='bootstrap-input'>
                            <LockOutlinedIcon sx={styles.iconPersonalInformation}/>
                            Passport Number
                        </InputLabel>
                        <TextField
                            sx={styles.dateInput}
                            placeholder='Ex: X2736464904'
                            InputProps={{disableUnderline: true}}
                        />
                    </FormControl>

                    <FormControl sx={styles.inputs}>
                        <InputLabel sx={styles.formLabel} shrink htmlFor='bootstrap-input'>
                            <LockOutlinedIcon sx={styles.iconPersonalInformation}/>
                            Name
                        </InputLabel>
                        <TextField
                            sx={styles.dateInput}
                            placeholder='Ex: Ali Asghar'
                            InputProps={{disableUnderline: true}}
                        />
                    </FormControl>

                    <FormControl sx={styles.inputs}>
                        <InputLabel sx={styles.formLabel} shrink htmlFor='bootstrap-input'>
                            <LockOutlinedIcon sx={styles.iconPersonalInformation}/>
                            Family
                        </InputLabel>
                        <TextField
                            sx={styles.dateInput}
                            placeholder='Ex: Ali'
                            InputProps={{disableUnderline: true}}
                        />
                    </FormControl>

                    <FormControl sx={styles.inputs}>
                        <InputLabel sx={styles.formLabel} shrink htmlFor='bootstrap-input'>
                            <LockOutlinedIcon sx={styles.iconPersonalInformation}/>
                            Phone Number
                        </InputLabel>

                        <Grid container>
                            <Grid item xs={9}>
                                <TextField
                                    sx={styles.dateInput}
                                    placeholder='Ex: +978648322'
                                    InputProps={{disableUnderline: true}}
                                />
                            </Grid>
                            <Grid sx={styles.gridIconWhatsapp}>
                                <WhatsAppIcon sx={styles.iconWhatsapp}/>
                            </Grid>
                        </Grid>

                    </FormControl>
                </form>
            </Box>
            <Box sx={styles.boxBtn}>
                <Button sx={styles.btn} onClick={closeModal}>
                    Accept User
                </Button>
            </Box>
        </>
    );
};

export default SaveInformationPerson;