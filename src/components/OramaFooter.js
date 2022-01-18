import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebook,
    faGithub,
    faTwitter,
    faMedium,
    faTelegram
} from '@fortawesome/free-brands-svg-icons'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';



function OramaFooter() {
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        width: "80%",
        color: theme.palette.text.secondary
    }));

    return (

        <div className="oramaFooter-box">
            <div className="orama-bottom-box" id="contact" style={{ paddingBottom: '5em' }}>

                <div className="social-box">
                    <h2 style={{ paddingBottom: '30px' }}>Follow Us:</h2>
                    <a className="social" href="#">
                        <FontAwesomeIcon icon={faMedium} size="4x"></FontAwesomeIcon>
                    </a>
                    <a className="social" href="#">
                        <FontAwesomeIcon icon={faTelegram} size="4x"></FontAwesomeIcon>
                    </a>
                    <a className="social" href="https://www.twitter.com">
                        <FontAwesomeIcon icon={faTwitter} size="4x"></FontAwesomeIcon>
                    </a>
                    <a className="social" href="#">
                        <FontAwesomeIcon icon={faFacebook} size="4x"></FontAwesomeIcon>
                    </a>

                </div>

            </div>
            <div className="oramaFooter-info-box">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={3}>

                            <div className="oramaFooter-bank">
                                <h6 style={{ paddingBottom: '1em' }}>News</h6>
                                <p>Announcement</p>
                            </div>
                        </Grid>

                        <Grid item xs={12} md={3}>

                            <div className="oramaFooter-bank">
                                <h6 style={{ paddingBottom: '1em' }}>Developer</h6>
                                <p>Gitbook</p>
                                <p>Github</p>
                            </div>

                        </Grid>

                        <Grid item xs={12} md={3}>

                            <div className="oramaFooter-bank">
                                <h6 style={{ paddingBottom: '1em' }}>Community</h6>
                                <p>Twitter</p>
                                <p>Medium</p>
                                <p>WeChat</p>
                            </div>
                        </Grid>

                        <Grid item xs={12} md={3}>

                            <div className="oramaFooter-bank">
                                <h6 style={{ paddingBottom: '1em' }}>Community</h6>
                                <p>Partner</p>
                                <p>Support</p>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <div className="orama-copy">
                <p style={{ textAlign: "center" }}>&copy; Orama Inc.</p>
            </div>
        </div>
    )
}

export default OramaFooter
