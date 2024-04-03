import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import {Grid} from "@mui/material";
import Typography from '@mui/material/Typography';

import payment1 from '../.././Images/payment1.png'
import costomer22 from '../../Images/costomer22.png'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import {useModal} from "../../Common/Modal/modal-provider";
import SaveInformationPerson from "./SaveInformationPerson/SaveInformationPerson";

export default function MediaControlCard() {
    const theme = useTheme();

    const { openModal } = useModal();

    const handleOpenModal =()=>{
    openModal({
        content: <SaveInformationPerson/>
    })
    }


 const styles={
    img:{
        height:"100%",
        width:'140px',

    },
     container:{
        border:'1px solid gray',
         paddingLeft:1,
         marginTop:'10px',
         cursor:'pointer',
     },
     gridIconChat:{
         position:'relative'
     },
     iconChat:{
        position: "absolute",
         bottom:10,
     }
 }
    return (
        <Box sx={{padding:'10px 7px  ' }} >
            <Typography variant="h6">
                Last User
            </Typography>
      <Grid container sx={styles.container} onClick={handleOpenModal}>
          <Grid item xs={6}>
              <Typography variant="h6">
                  Ali Asmar Amar
              </Typography>
              <Typography color="text.secondary">
                 Passport No: x53524783
              </Typography>
              <Typography color="text.secondary">
                  Tell: +978686543
              </Typography>
              <Typography color="text.secondary">
                 2 years ago
              </Typography>
          </Grid>
          <Grid item xs={1} sx={styles.gridIconChat}>
              <ChatBubbleOutlineIcon sx={styles.iconChat}/>
          </Grid>
          <Grid item sx={styles.gridItem}>
              <img src={payment1} style={styles.img} alt=''/>
          </Grid>
      </Grid>

            <Grid container sx={styles.container} onClick={handleOpenModal}>
                <Grid item xs={6}>
                    <Typography variant="h6">
                        Ali Asmar Amar
                    </Typography>
                    <Typography color="text.secondary">
                        Passport No: x53524783
                    </Typography>
                    <Typography color="text.secondary">
                        Tell: +978686543
                    </Typography>
                    <Typography color="text.secondary">
                        2 years ago
                    </Typography>
                </Grid>
                <Grid item xs={1} sx={styles.gridIconChat}>
                    <ChatBubbleOutlineIcon sx={styles.iconChat}/>
                </Grid>
                <Grid item sx={styles.gridItem}>
                    <img src={costomer22} style={styles.img} alt=''/>
                </Grid>
            </Grid>

            <Grid container sx={styles.container} onClick={handleOpenModal}>
                <Grid item xs={6}>
                    <Typography variant="h6">
                        Ali Asmar Amar
                    </Typography>
                    <Typography color="text.secondary">
                        Passport No: x53524783
                    </Typography>
                    <Typography color="text.secondary">
                        Tell: +978686543
                    </Typography>
                    <Typography color="text.secondary">
                        2 years ago
                    </Typography>
                </Grid>
                <Grid item xs={1} sx={styles.gridIconChat}>
                    <ChatBubbleOutlineIcon sx={styles.iconChat}/>
                </Grid>
                <Grid item sx={styles.gridItem}>
                    <img src={payment1} style={styles.img} alt=''/>
                </Grid>
            </Grid>

            <Grid container sx={styles.container} onClick={handleOpenModal}>
                <Grid item xs={6}>
                    <Typography variant="h6">
                        Ali Asmar Amar
                    </Typography>
                    <Typography color="text.secondary">
                        Passport No: x53524783
                    </Typography>
                    <Typography color="text.secondary">
                        Tell: +978686543
                    </Typography>
                    <Typography color="text.secondary">
                        2 years ago
                    </Typography>
                </Grid>
                <Grid item xs={1} sx={styles.gridIconChat}>
                    <ChatBubbleOutlineIcon sx={styles.iconChat}/>
                </Grid>
                <Grid item sx={styles.gridItem}>
                    <img src={costomer22} style={styles.img} alt=''/>
                </Grid>
            </Grid>

            <Grid container sx={styles.container} onClick={handleOpenModal}>
                <Grid item xs={6}>
                    <Typography variant="h6">
                        Ali Asmar Amar
                    </Typography>
                    <Typography color="text.secondary">
                        Passport No: x53524783
                    </Typography>
                    <Typography color="text.secondary">
                        Tell: +978686543
                    </Typography>
                    <Typography color="text.secondary">
                        2 years ago
                    </Typography>
                </Grid>
                <Grid item xs={1} sx={styles.gridIconChat}>
                    <ChatBubbleOutlineIcon sx={styles.iconChat}/>
                </Grid>
                <Grid item sx={styles.gridItem}>
                    <img src={payment1} style={styles.img} alt=''/>
                </Grid>
            </Grid>

            <Grid container sx={styles.container} onClick={handleOpenModal}>
                <Grid item xs={6}>
                    <Typography variant="h6">
                        Ali Asmar Amar
                    </Typography>
                    <Typography color="text.secondary">
                        Passport No: x53524783
                    </Typography>
                    <Typography color="text.secondary">
                        Tell: +978686543
                    </Typography>
                    <Typography color="text.secondary">
                        2 years ago
                    </Typography>
                </Grid>
                <Grid item xs={1} sx={styles.gridIconChat}>
                    <ChatBubbleOutlineIcon sx={styles.iconChat}/>
                </Grid>
                <Grid item sx={styles.gridItem}>
                    <img src={costomer22} style={styles.img} alt=''/>
                </Grid>
            </Grid>

        </Box>
    );
}
