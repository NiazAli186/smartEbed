import React from 'react';
import {Grid, Typography, Box} from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {useModal} from "../../../Common/Modal/modal-provider";
import Button from '@mui/material/Button';
import imageTerms from '../../../Images/imageTerms.png'
import {useNavigate} from 'react-router-dom';

function Terms(props) {

    const {closeModal} = useModal();
    const navigate = useNavigate();

    const handleClose = () => {
        closeModal();
        navigate('/profile')
    }

    const styles = {
        gridHeaderTerms: {
            background: '#EFF2F5',
            paddingY: "10px",
            position: 'sticky',
            top: '0',
            zIndex: '1',
        },
        flasBackIcon: {
            textAlign: 'center',
        },
        boxTermConditions: {
            padding: '12px 20px',
        },
        typografyTermsConditions: {
            color: 'gray',
            paddingTop: '10px'
        },
        description: {
            paddingTop: '10px',
        },
        gridBtn:{
            paddingTop: '10px',
        },
        btn: {
            background: '#C3C5C5',
            borderRadius: '10px',
            color:"#050505",
        },
        termsImage:{
           paddingBottom:'10px',
        }
    }
    return (
        <>
            <Grid container sx={styles.gridHeaderTerms}>
                <Grid item xs={2} sx={styles.flasBackIcon}>
                    <KeyboardBackspaceIcon onClick={handleClose}/>
                </Grid>
                <Grid item>
                    Terms
                </Grid>
            </Grid>
            <Box sx={styles.boxTermConditions}>
                <Box sx={styles.termsImage}>
                    <img src={imageTerms} alt="" />
                </Box>
                <Typography variant='h6'>
                    Terms & Conditions
                </Typography>
                <Typography sx={styles.typografyTermsConditions}>
                    Terms & Conditions
                </Typography>
                <Typography variant='h6' sx={styles.description}>
                    Description:
                </Typography>
                <Typography sx={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolor ducimus eius esse
                    explicabo incidunt, inventore quasi repellat repellendus repudiandae suscipit velit vero!
                    Aspernatur, fugiat necessitatibus nulla obcaecati sapiente soluta.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolor ducimus eius esse
                    explicabo incidunt, inventore quasi repellat repellendus repudiandae suscipit velit vero!
                    Aspernatur, fugiat necessitatibus nulla obcaecati sapiente soluta.

                </Typography>
                <Typography variant='h6' sx={styles.description}>
                    Tags:
                </Typography>
                <Grid container sx={styles.gridBtn}>
                    <Grid item xs={4}>
                        <Button variant="contained" sx={styles.btn}>Tablet</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" sx={styles.btn}>Digital</Button>
                    </Grid>

                </Grid>
            </Box>

        </>
    );
}

export default Terms;