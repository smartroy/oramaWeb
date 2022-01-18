import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function PicGrid() {
    const picData = [1, 2, 3, 4];
    const pics = picData.map((pic, idx) =>
        <Grid item container xs={6} md={3} justifyContent="center">
            <img src="/oramaWeb/imgs/parterner1.png" style={{ maxWidth: 200 }}></img>
        </Grid>
    )
    return (
        <div className="picGrid-box" id="oramaPartner">
            <div className="picGrid-content-box" style={{ textAlign: "center" }}>
                <div className="picGrid-title">
                    <h1 style={{ paddingLeft: '0.5em' }}>Our Partners</h1>
                </div>
                <Box sx={{ flexGrow: 1 }} justifyContent="center">
                    <Grid container spacing={2} justifyContent="center">
                        {pics}
                    </Grid>

                </Box>
            </div>

        </div>
    )
}

export default PicGrid
