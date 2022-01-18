
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function InfoCards(props) {
    const cardNum = [1, 2];
    const infos = props.cardsInfo.content;
    // const cards = cardNum.map((info, idx) =>
    //     <Grid item container xs={12} md={6} justifyContent="center">
    //         <Card sx={{ maxWidth: 500, borderRadius: "15px" }}>
    //             <CardMedia
    //                 component="img"
    //                 height="140"
    //                 image="/oramaWeb/imgs/CAN-tech.png"
    //                 alt="CAN tech"
    //             />
    //             <CardContent>
    //                 <Typography gutterBottom variant="h5" component="div">
    //                     CAN - Creative adversarial network
    //                 </Typography>
    //                 <Typography variant="h6" color="text.secondary">
    //                     CAN, namely creative adversarial network. CANs are architected in almost the same way as GANs, but with one key addition that allows the generator to “think” creatively.
    //                 </Typography>
    //             </CardContent>

    //         </Card>
    //     </Grid>
    // );

    const cards = infos.map((info, idx) =>
        <Grid item container xs={info.xsWidth} md={info.mdWidth} justifyContent="center">
            <Card sx={{ maxWidth: 500, borderRadius: "15px" }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={info.imgSrc}
                    alt="pic"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style={{ fontFamily: 'Chivo' }}>
                        {info.title}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" style={{ fontFamily: 'Chivo' }}>
                        {info.content}
                    </Typography>
                </CardContent>

            </Card>
        </Grid>
    );
    const [cardStart, setCardStart] = useState(0);
    const divId = props.cardsInfo.id ? props.cardsInfo.id : ""
    return (

        <div className="cardInfo-box" id={divId}>
            <div className="cardInfo-content-box">
                <Box sx={{ flexGrow: 1 }} justifyContent="center"
                >
                    <Grid container spacing={2} justifyContent="center">
                        {cards}
                    </Grid>
                </Box>
            </div>
        </div>

    )
}

export default InfoCards
