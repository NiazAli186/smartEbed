import React, {useState} from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Box, Button, Typography} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import payment1 from '../../../Images/payment1.png';
import {Close, Done, InfoOutlined, LocalPhone} from '@mui/icons-material';
import {useModal} from '../../../Common/Modal/modal-provider';
import ProfileInfo from '../../Payment/payment-modals/profile-info';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Partition from '../payFromWhatsapp/partition';
import {useNavigate} from 'react-router-dom';

const TenantsFlat = () => {

    const {openModal, closeModal} = useModal();
    const navigate = useNavigate();
    const handleInformationModal = () => {
        closeModal();
        navigate('/property/flat/partition')
    };

    //styles
    const styles = {
        accordion: {
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            background: '#fff',
        },
        accordionBody: {
            background: '#EFF2F5',
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
        },
        accordionHead: {
            background: '#fff',
        },
        content: {
            display: 'flex',
            gap: '8px',
            width: '100%',
        },
        img: {
            width: '96px',
            height: '96px',
        },
        contentMain: {
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            padding: '8px 8px 0',
        },
        contentSummery: {
            padding: '8px 8px 0',
            gap: 0,
        },
        contentTitle: {
            fontSize: '15px',
            fontWeight: 700,
        },
        contentText: {
            fontSize: '13px',
        },
        contentTextSub: {
            fontSize: '13px',
            color: '#989898',
        },
        contentSummeryText: {
            fontSize: '10px',
            fontWeight: 500,
            color: '#989898',
        },
        btns: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '4px',
        },
        doneBtn: {
            background: '#F5E70E',
            color: '#fff',
            borderRadius: '4px',
            padding: '4px 30px',
            ':hover': {
                background: '#148c47',
            },
        },
        infoBtn: {
            background: '#007BFF',
            color: '#fff',
            borderRadius: '4px',
            padding: '4px 30px',
            ':hover': {
                background: '#025dbf',
            },
        },
        closeBtn: {
            background: '#18F50E',
            color: '#fff',
            borderRadius: '4px',
            padding: '4px 30px',
            ':hover': {
                background: '#b33127',
            },
        },
    };

    return (
        <>
            <Box>
                <Accordion defaultExpanded>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        sx={styles.accordionHead}
                    >
                        <Typography>Flat 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={styles.accordion}>
                        <Box sx={styles.accordionBody}>
                            <Box sx={styles.content}>
                                <img style={styles.img} src={payment1} alt=""/>
                                <Box sx={styles.contentMain}>
                                    <Typography sx={styles.contentTitle}>#Partition 1-1</Typography>
                                    <Typography sx={styles.contentText}>Ali Akbar Farhad Al Dooghi</Typography>
                                    <Typography sx={styles.contentTextSub}>P1287131231</Typography>
                                    <Typography sx={styles.contentText}>Flat 1- Partition 1- Unit 1</Typography>
                                </Box>
                                <Box sx={styles.contentSummery}>
                                    <Typography sx={styles.contentSummeryText}>Contract:</Typography>
                                    <Typography sx={styles.contentSummeryText}>2022/12/12</Typography>
                                    <Typography sx={styles.contentSummeryText}>Pay:</Typography>
                                    <Typography sx={styles.contentSummeryText}>2024/12/12</Typography>
                                </Box>
                            </Box>
                            <Box sx={styles.btns}>
                                <Button sx={styles.doneBtn}>
                                    <LocalPhone/>
                                </Button>
                                <Button sx={styles.infoBtn} onClick={handleInformationModal}>
                                    <InfoOutlined/>
                                </Button>
                                <Button sx={styles.closeBtn}>
                                    <WhatsAppIcon/>
                                </Button>
                            </Box>
                        </Box>
                        <Box sx={styles.accordionBody}>
                            <Box sx={styles.content}>
                                <img style={styles.img} src={payment1} alt=""/>
                                <Box sx={styles.contentMain}>
                                    <Typography sx={styles.contentTitle}>#Partition 1-1</Typography>
                                    <Typography sx={styles.contentText}>Ali Akbar Farhad Al Dooghi</Typography>
                                    <Typography sx={styles.contentTextSub}>P1287131231</Typography>
                                    <Typography sx={styles.contentText}>Flat 1- Partition 1- Unit 1</Typography>
                                </Box>
                                <Box sx={styles.contentSummery}>
                                    <Typography sx={styles.contentSummeryText}>Contract:</Typography>
                                    <Typography sx={styles.contentSummeryText}>2022/12/12</Typography>
                                    <Typography sx={styles.contentSummeryText}>Pay:</Typography>
                                    <Typography sx={styles.contentSummeryText}>2024/12/12</Typography>
                                </Box>
                            </Box>
                            <Box sx={styles.btns}>
                                <Button sx={styles.doneBtn}>
                                    <Done/>
                                </Button>
                                <Button sx={styles.infoBtn} onClick={handleInformationModal}>
                                    <InfoOutlined/>
                                </Button>
                                <Button sx={styles.closeBtn}>
                                    <WhatsAppIcon/>
                                </Button>
                            </Box>
                        </Box>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </>
    );
};

export default TenantsFlat;